> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/vehiclereport/supportedfunctions](https://developer.apple.com/documentation/carkey/vehiclereport/supportedfunctions)

# supportedFunctions

**Framework:** CarKey  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

An array of function identifiers that indicates the features the vehicle supports, populated only after the first BLE connection with the vehicle.

## Declaration

```swift
var supportedFunctions: [FunctionIdentifier] { get }
```

<a id="discussion"></a>

## Discussion

When building your app’s UI, use the information in this property to determine what features you can access. The array contains all supported features. To determine if a feature is currently supported, call the [status(for:)](status%28for_%29.md) method.

## See Also

### Getting the Vehicle’s Supported Functions

- [status(for:)](status%28for_%29.md): Returns the current status of the specified vehicle function.
- [FunctionStatus](../functionstatus.md): A value that the vehicle can return to indicate the status of a particular vehicle feature.
