> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:vehicledidupdatereport:)](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:vehicledidupdatereport:))

# remoteControlSession(\_:vehicleDidUpdateReport:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Notifies your delegate object that the status of the specified vehicle changed.

## Declaration

```swift
func remoteControlSession(_ session: CarKeyRemoteControlSession, vehicleDidUpdateReport: VehicleReport)
```

## Parameters

- `session`: The current session.
- `vehicleDidUpdateReport`: The updated vehicle report, which you can use to make changes immediately.

<a id="discussion"></a>

## Discussion

When information for a vehicle changes, the session notifies its delegate so you can make any changes. To save time, use the provided report rather than requesting the report again from the session’s [vehicleReports](../carkeyremotecontrolsession/vehiclereports.md) property. The system executes this method on the dispatch queue you specified when you started the session.

## See Also

### Receiving Data from the Vehicle

- [remoteControlSession(\_:didReceivePassthroughData:fromVehicle:)](remotecontrolsession%28__didreceivepassthroughdata_fromvehicle_%29.md): Notifies the delegate object that the vehicle sent passthrough data for you to handle.
