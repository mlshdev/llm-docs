> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/vehiclereport/identifier](https://developer.apple.com/documentation/carkey/vehiclereport/identifier)

# identifier

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

The string you use to identify the vehicle when making requests.

## Declaration

```swift
let identifier: String
```

<a id="discussion"></a>

## Discussion

Use this string to differentiate vehicles associated with the session, and to ensure you send requests to the correct vehicle.

## See Also

### Getting the Vehicle Details

- [isConnected](isconnected.md): A Boolean value that indicates whether the vehicle is currently connected over Bluetooth.
