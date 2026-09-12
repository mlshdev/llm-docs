> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/ispassiveentryavailable(forvehicle:)](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/ispassiveentryavailable(forvehicle:))

# isPassiveEntryAvailable(forVehicle:)

**Framework:** CarKey  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

Returns a Boolean value that indicates whether passive entry is currently available for the specified vehicle.

## Declaration

```swift
func isPassiveEntryAvailable(forVehicle vehicleID: String) throws -> Bool
```

## Parameters

- `vehicleID`: The target vehicle for the request. Choose the vehicle from one of the session’s vehicle reports. Specify the string in the [identifier](../vehiclereport/identifier.md) property of the corresponding report.

<a id="return-value"></a>

## Return Value

`true` if passive entry is available, or `false` if the feature is not available.

## See Also

### Getting Vehicle Information

- [vehicleReports](vehiclereports.md): The configuration details of the provisioned vehicles that match your company’s make.
