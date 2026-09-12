> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:didcreatekey:forvehicle:)-1djol](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsessiondelegate/remotecontrolsession(_:didcreatekey:forvehicle:)-1djol)

# remoteControlSession(\_:didCreateKey:forVehicle:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Called to notify your app when a new key has been created.

## Declaration

```swift
func remoteControlSession(_ session: CarKeyRemoteControlSession, didCreateKey keyID: String, forVehicle vehicleID: String)
```

## Parameters

- `session`: The current session.
- `keyID`: The identifier of the key.
- `vehicleID`: The identifier of the vehicle.
