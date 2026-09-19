> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricalloaddevice/name

# name

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A human-readable name for the device.

## Declaration

```swift
let name: String
```

<a id="discussion"></a>

## Discussion

The framework displays this name in the Home app when you adopt the [EnergyKit LoadEvents Entitlement](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience).

## See Also

### Getting device information

- [id](id.md): A unique, stable identifier for a device.
- [type](type.md): The type of electrical load device.
- [ElectricalLoadDevice.DeviceType](devicetype.md): The type of electrical load device.
