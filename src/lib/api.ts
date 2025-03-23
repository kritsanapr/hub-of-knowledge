import { axiosInstance } from "./axios";
import {
  UseQueryOptions,
  UseMutationOptions,
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

// Generic type for API response
export type ApiResponse<T> = {
  data: T;
  message: string;
  success: boolean;
};

// Generic CRUD hooks
export const useGetData = <T>(
  key: string[],
  url: string,
  options?: Omit<
    UseQueryOptions<ApiResponse<T>, AxiosError>,
    "queryKey" | "queryFn"
  >,
) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const { data } = await axiosInstance.get<ApiResponse<T>>(url);
      return data;
    },
    ...options,
  });
};

export const usePostData = <T, TVariables>(
  url: string,
  invalidateKey: string[],
  options?: Omit<
    UseMutationOptions<ApiResponse<T>, AxiosError, TVariables>,
    "mutationFn"
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      const { data } = await axiosInstance.post<ApiResponse<T>>(url, variables);
      return data;
    },
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({ queryKey: invalidateKey });
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

export const usePutData = <T, TVariables>(
  url: string,
  invalidateKey: string[],
  options?: Omit<
    UseMutationOptions<ApiResponse<T>, AxiosError, TVariables>,
    "mutationFn"
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: TVariables) => {
      const { data } = await axiosInstance.put<ApiResponse<T>>(url, variables);
      return data;
    },
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({ queryKey: invalidateKey });
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};

export const useDeleteData = <T>(
  url: string,
  invalidateKey: string[],
  options?: Omit<
    UseMutationOptions<ApiResponse<T>, AxiosError, void>,
    "mutationFn"
  >,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const { data } = await axiosInstance.delete<ApiResponse<T>>(url);
      return data;
    },
    onSuccess: async (data, variables, context) => {
      await queryClient.invalidateQueries({ queryKey: invalidateKey });
      if (options?.onSuccess) {
        await options.onSuccess(data, variables, context);
      }
    },
    ...options,
  });
};
