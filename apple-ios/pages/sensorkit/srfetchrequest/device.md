> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sensorkit/srfetchrequest/device

# device (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The device to query for sample data.

## Declaration

```swift
var device: SRDevice { get set }
```

<a id="Discussion"></a>

## Discussion

If the app doesn’t define a value for this property, the framework queries the current device. To get a list of available devices, the app calls [fetchDevices()](../srsensorreader/fetchdevices%28%29.md) on its sensor reader.

## See Also

### Selecting the Device

- [SRDevice](../srdevice.md): A representation of a device that provides sample data.

# device (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The device to query for sample data.

## Declaration

```objectivec
@property (strong) SRDevice * device;
```

<a id="Discussion"></a>

## Discussion

If the app doesn’t define a value for this property, the framework queries the current device. To get a list of available devices, the app calls [fetchDevices](../srsensorreader/fetchdevices%28%29.md) on its sensor reader.

## See Also

### Selecting the Device

- [SRDevice](../srdevice.md): A representation of a device that provides sample data.
