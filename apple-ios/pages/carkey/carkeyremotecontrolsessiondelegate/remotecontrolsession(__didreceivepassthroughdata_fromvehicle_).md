> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:didreceivepassthroughdata:fromvehicle:)](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:didreceivepassthroughdata:fromvehicle:))

# remoteControlSession(\_:didReceivePassthroughData:fromVehicle:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Notifies the delegate object that the vehicle sent passthrough data for you to handle.

## Declaration

```swift
func remoteControlSession(_ session: CarKeyRemoteControlSession, didReceivePassthroughData: Data, fromVehicle vehicleID: String)
```

## Parameters

- `session`: The current session.
- `didReceivePassthroughData`: The passthrough data that the vehicle sent. Use the data to determine what actions to take, if any.
- `vehicleID`: The identifier of the vehicle that sent the data. This identifier is the same string in the [identifier](../vehiclereport/identifier.md) property of the vehicle report.

<a id="discussion"></a>

## Discussion

If the vehicle sends data, the system delivers it to your app using this method. You are responsible for the data your vehicles produce, and for decoding that data in your implementation of this method. The session doesn’t save or modify the data in any way.

The system executes this method on the dispatch queue you specified when you started the session.

## See Also

### Receiving Data from the Vehicle

- [remoteControlSession(\_:vehicleDidUpdateReport:)](remotecontrolsession%28__vehicledidupdatereport_%29.md): Notifies your delegate object that the status of the specified vehicle changed.
