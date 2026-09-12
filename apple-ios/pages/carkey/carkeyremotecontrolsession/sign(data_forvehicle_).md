> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/sign(data:forvehicle:)](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/sign(data:forvehicle:))

# sign(data:forVehicle:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · watchOS 11.0+

Sign data with the endpoint.SK identified by vehicleIdentifier as described in the section “OEM App Data Attestation” of the Car Connectivity Consortium Digital Key Release 3.0 specification.

## Declaration

```swift
func sign(data: Data, forVehicle vehicleID: String) throws -> CarKeyRemoteControlSession.Attestation
```

## Parameters

- `data`: The OEM App Data to sign.
- `vehicleID`: The vehicle identifier.

<a id="return-value"></a>

## Return Value

An Attestation object.

<a id="discussion"></a>

## Discussion

This method can only be used while the application is in the foreground.
