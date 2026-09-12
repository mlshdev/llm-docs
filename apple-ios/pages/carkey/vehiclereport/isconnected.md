> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/vehiclereport/isconnected](https://developer.apple.com/documentation/carkey/vehiclereport/isconnected)

# isConnected

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

A Boolean value that indicates whether the vehicle is currently connected over Bluetooth.

## Declaration

```swift
var isConnected: Bool { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is `true` when the vehicle is connected over Bluetooth, or `false` when it isn’t connected.

## See Also

### Getting the Vehicle Details

- [identifier](identifier.md): The string you use to identify the vehicle when making requests.
