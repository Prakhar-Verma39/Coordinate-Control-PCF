import * as React from "react";
import { Field, Textarea } from "@fluentui/react-components";
import type { TextareaProps } from "@fluentui/react-components";

export const CoordinatesText = (props: Partial<TextareaProps>) => (
  <Field style={{height: "100%"}}>
    <Textarea placeholder="Coordinates..." {...props} readOnly/>
  </Field>
);