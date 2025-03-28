# Coordinate-Control-PCF
![image](https://github.com/user-attachments/assets/eaaf35fd-176f-4e60-a2cd-7989c0e732f9)

The PCF (PowerApps Component Framework) control allows users to efficiently record multiple coordinates of a location within Microsoft Dynamics 365 / Model-driven Power Apps. This control can be attached to fields such as single line text, text area, or multiple lines, providing a user-friendly interface for managing geographic data.

## Features

- **Coordinate Fields**: The control includes two input fields for latitude and longitude.
  
- **Buttons**: It features two buttons:
  - **Add**: This button allows users to add a new coordinate after performing necessary checks. If there are any issues during the addition, the user will be notified.![image](https://github.com/user-attachments/assets/947e1ce5-74d6-4b9f-b010-3452387c18a0)

  - **Remove**: This button removes the last added coordinate if one exists.![image](https://github.com/user-attachments/assets/8aee23a9-a200-4d76-86b9-56ff35757aae)


## Instructions for Use

1. **Integration**:
   - Attach the PCF control to a suitable field type in your Dynamics 365 environment (Single Line of Text, Text Area, or Multiple Lines).

2. **Adding Coordinates**:
   - Enter the latitude and longitude values in their respective fields.
   - Click the **Add** button to save the coordinate. Ensure that the input values are valid; otherwise, an alert message will be displayed.

3. **Removing Coordinates**:
   - To remove the last entered coordinate, simply click the **Remove** button. If no coordinates exist, this action will have no effect.

This PCF control enhances data management capabilities in Dynamics 365 by enabling users to easily handle geographic coordinates, making it a valuable tool for applications requiring location data tracking.
