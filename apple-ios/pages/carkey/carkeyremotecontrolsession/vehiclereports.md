> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/carkeyremotecontrolsession/vehiclereports](https://developer.apple.com/documentation/carkey/carkeyremotecontrolsession/vehiclereports)

# vehicleReports

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The configuration details of the provisioned vehicles that match your company’s make.

## Declaration

```swift
var vehicleReports: [VehicleReport] { get throws }
```

<a id="discussion"></a>

## Discussion

The system maintains a cache of provisioned vehicles and updates that information when the configuration details change.

## See Also

### Getting Vehicle Information

- [isPassiveEntryAvailable(forVehicle:)](ispassiveentryavailable%28forvehicle_%29.md): Returns a Boolean value that indicates whether passive entry is currently available for the specified vehicle.
