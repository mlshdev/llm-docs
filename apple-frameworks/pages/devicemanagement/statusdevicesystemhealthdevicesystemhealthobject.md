> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusdevicesystemhealthdevicesystemhealthobject](https://developer.apple.com/documentation/devicemanagement/statusdevicesystemhealthdevicesystemhealthobject)

# StatusDeviceSystemHealthDeviceSystemHealthObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A dictionary where each key represents a hardware component name and each value is a string indicating the component’s health status, which has the following values:

## Declaration

```
object StatusDeviceSystemHealthDeviceSystemHealthObject
```

## Properties

- `Baseband` — `string`: The baseband health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.  
  **Allowed values:** `ok`, `error`
- `Camera` — `string`: The camera health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.
  - `non-genuine`: The component isn’t a genuine Apple component.  
  **Allowed values:** `ok`, `error`, `non-genuine`
- `Display` — `string`: The display health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.
  - `non-genuine`: The component isn’t a genuine Apple component.  
  **Allowed values:** `ok`, `error`, `non-genuine`
- `FaceID` — `string`: The Face ID health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.  
  **Allowed values:** `ok`, `error`
- `NFC` — `string`: The NFC (Near Field Communication) health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.  
  **Allowed values:** `ok`, `error`
- `TouchID` — `string`: The Touch ID health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.  
  **Allowed values:** `ok`, `error`
- `UWB` — `string`: The UWB (Ultra-Wideband) radio health status, which has the following values:

  - `ok`: The component is operating normally.
  - `error`: The component has a detected error or failure.  
  **Allowed values:** `ok`, `error`

<a id="Discussion"></a>

## Discussion

- `ok`: The component is operating normally.
- `error`: The component has a detected error or failure.
- `non-genuine`: The component isn’t a genuine Apple component.

Not all keys are supported on each device. The dictionary includes only components that are present and reportable on the device.
