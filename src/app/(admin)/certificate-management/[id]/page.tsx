import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default function UpdateCertificatePage({ params }: Readonly<Props>) {
  return <div>UpdateCertificatePage {params.id}</div>;
}
