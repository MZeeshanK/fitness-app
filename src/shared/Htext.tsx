import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Htext({ children, className }: Props) {
  return (
    <h1
      className={`basis-3/5 font-montserrat text-3xl font-bold uppercase ${className}`}
    >
      {children}
    </h1>
  );
}
