> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehicleloadevent/devicename](https://developer.apple.com/documentation/energykit/electricvehicleloadevent/devicename)

# deviceName

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A human-readable name for the device.

## Declaration

```swift
var deviceName: String { get }
```

<a id="discussion"></a>

## Discussion

Set a String value that meets these criteria:

- Less than or equal to 250 `UTF-16` characters
- Contains only alphanumeric, whitespace, punctuation, or symbol characters.
- Isn’t the empty String

The framework alters the value to abide by these rules, if necessary.

The Home app incorporates the device by this name when you adopt the [EnergyKit LoadEvents Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience).

## See Also

### Getting device information

- [deviceID](deviceid.md): The device’s unique stable identifier.
