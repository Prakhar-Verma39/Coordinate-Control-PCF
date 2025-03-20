import * as React from 'react';
import { Label, Input } from '@fluentui/react-components';
import { Button } from "@fluentui/react-components";
import { CoordinatesText } from './CoordinateTextBox';
import { AlertBox } from './AlertBox';
import {
  useId,
  Toaster,
  useToastController,
  ToastTitle,
  Toast,
  ToastIntent
} from "@fluentui/react-components";


export interface ICoordinateProps {
  coord: string
  onAdd: (coord: string) => void; 
}


export const CoordinateComp = (props: ICoordinateProps) => {


  const [lat, setLat] = React.useState<string>('');
  const [long, setLong] = React.useState<string>('');
  const [isAlert, setIsAlert] = React.useState<boolean>(false);
  const [alertMessage, setAlertMessage] = React.useState<string>('');

  const toasterId = useId("toaster");
  const intent: ToastIntent = "success";
  const { dispatchToast } = useToastController(toasterId);
  const notify = () => {
          dispatchToast(
            <Toast
              style={{
                backgroundColor: '#fff',
                border: '1px solid lightgreen',
                padding: '16px',
                borderRadius: '8px',
                color: '#333',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <ToastTitle style={{ fontWeight: 'bold', fontSize: '16px' }}>
                Removed last coordinates.
              </ToastTitle>
            </Toast>, {intent}
            )
      }

    const AddHandler = () => {
      if( lat.length > 0 && long.length > 0) {
        if (/^-?\d+(\.\d+)?$/.test(lat) && /^-?\d+(\.\d+)?$/.test(long)) {
          // console.log("Latitude:", lat);
          // console.log("Longitude:", long);
            if (parseFloat(parseFloat(lat).toFixed(2)) > 90.00 || parseFloat(parseFloat(lat).toFixed(2)) < -90.00)
            {
              setAlertMessage('Latitude must be within the range of -90.00 to 90.00 degrees.');
              setIsAlert(true);
              return
            }
            if (parseFloat(parseFloat(long).toFixed(2)) > 180.00 || parseFloat(parseFloat(long).toFixed(2)) < -180.00)
            {
              setAlertMessage('Longitude must be within the range of -180.00 to 180.00 degrees.');
              setIsAlert(true);
              return
            }
            let coord = `${props.coord}`;
            coord += ` Coordinate ${coord.split(';').length}:: Latitude: ${lat}, Longitude: ${long};`
            props.onAdd(coord); 
            setLat('');
            setLong('');
        } else {
          setAlertMessage("Please provide only decimal values. For e.g., 90.03, 112.565, 0.53434, etc");
          setIsAlert(true);
        }
      } else {
        setAlertMessage("Please provide values for both Laitude and Longitude.");
        setIsAlert(true);
      }
  };

  const RemoveHandler = () => {
    let coord = props.coord;
    const coordArray = coord.split('; ').filter(element => element !== '');
    coord = coordArray.slice(0, -1).join('; ');
    if (coord.length > 0)
      coord += '; ';
    props.onAdd(coord); 
    setLat('');
    setLong('');
    if (coordArray.length > 0)
      notify();
  };

    return (<>
      <div style={{display: "flex", gap: "4px", width: "100%", flexWrap: 'wrap'}}>
        <div style={{flexGrow: 2}}>
          <CoordinatesText value={props.coord}/>
        </div>
        <div style={{display: "flex", flexDirection:"column", flexGrow: 1, gap: "3px", overflow: 'hidden'}}>
          <div style={{display: "flex", gap: "3px", alignItems: "center", marginRight: "2px", marginTop: "2px"}}>
            <Label htmlFor={"lat"} style={{flexGrow: 1}}>
                  Latitude (in deg.)
            </Label>
            <Input placeholder='Enter Latitude Here' aria-label='Latitude-Input' id="lat" style={{border: "1px Solid LightGray", minWidth: "70%", paddingLeft: "2.5%"}} 
              value={lat}
              onChange={(e) => setLat(e.target.value)} // Update state on change
            />
          </div>
          <div style={{display: "flex", gap: "3px", alignItems: "center", marginRight: "2px"}}>
            <Label htmlFor={"long"} style={{flexGrow: 1}}>
                      Longitude (in deg.)
            </Label>
            <Input placeholder='Enter Longitude Here' aria-label='Longitude-Input' id="long" style={{border: "1px Solid LightGray", minWidth: "70%", paddingLeft: "2.5%"}}
              value={long}
              onChange={(e) => setLong(e.target.value)} // Update state on change
            />
          </div>
          <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1px", marginBottom: "3px", marginRight: "2px", gap: "3px"}}>
            <Button style={{backgroundColor: 'Blue', color: "White", padding: "3px" , borderRadius: "3px"}} onClick={AddHandler}>Add</Button>
            <Button style={{backgroundColor: 'Red', color: "White", padding: "3px" , borderRadius: "3px"}} onClick={RemoveHandler}>Remove</Button>
          </div>
        </div>
  </div>
  {isAlert ? <AlertBox value={alertMessage} isAlert={isAlert} setIsAlert={setIsAlert} setAlertMessage={setAlertMessage}/> : null}
   <Toaster 
      toasterId={toasterId}
      position="top-end"
      pauseOnHover
   />
  </>
)
}
