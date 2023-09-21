import { ReactNode } from "react";
import { LabelContent } from "./styles";

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlForVariant?: string;
  children: ReactNode;
}

export function Label({ htmlForVariant, children }: LabelProps) {
  return <LabelContent htmlFor={htmlForVariant}>{children}</LabelContent>;
}
