> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/sendpassthroughdata(_:tovehicle:)](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/sendpassthroughdata(_:tovehicle:))

# sendPassthroughData(\_:toVehicle:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Sends the specified custom data to the vehicle.

## Declaration

```swift
func sendPassthroughData(_ passthroughData: Data, toVehicle vehicleID: String) throws
```

## Parameters

- `passthroughData`: The custom data to send to the vehicle. Make sure the size of your data object doesn’t exceed 65 kilobytes.
- `vehicleID`: The target vehicle for the request. Choose the vehicle from one of the session’s vehicle reports. Specify the string in the [identifier](../vehiclereport/identifier.md) property of the corresponding report.

<a id="discussion"></a>

## Discussion

Use this method to send data that is custom to your specific vehicle. This method passes the data unmodified directly to the vehicle, and it is up to you to format the data exactly how the vehicle needs it.

If the vehicle sends a custom response, the system delivers it to the [remoteControlSession(\_:didReceivePassthroughData:fromVehicle:)](../carkeyremotecontrolsessiondelegate/remotecontrolsession%28__didreceivepassthroughdata_fromvehicle_%29.md) method of your session’s delegate object.
