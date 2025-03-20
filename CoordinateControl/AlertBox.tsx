import * as React from "react";
import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogTrigger,
  DialogBody,
  Button,
} from "@fluentui/react-components";

interface IAlertBoxProps {
    value: string,
    isAlert: boolean,
    setIsAlert: (value: boolean) => void
    setAlertMessage: (value: string) => void
}

export const AlertBox: React.FunctionComponent<IAlertBoxProps> = ({value, isAlert, setIsAlert, setAlertMessage}) => {

  return (
    <Dialog
      modalType="alert"
      open={isAlert}
      onOpenChange={() => setIsAlert(false)}
    >
      <DialogSurface
        style={{
          backgroundColor: "#fff",
          border: "2px solid lightgray",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <DialogBody>
          <DialogTitle style={{ color: "black", fontWeight: "bold", fontSize: "18px" }}>
            Alert
          </DialogTitle>
          <DialogContent style={{ color: "#333", fontSize: "14px", lineHeight: "1.5" }}>
            {value}
          </DialogContent>
          <DialogActions>
              <DialogTrigger disableButtonEnhancement>
                <Button style={{backgroundColor: 'Blue', color: "White", padding: "3px" , borderRadius: "3px"}} >Understood</Button>
              </DialogTrigger>
            </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>

  );
};