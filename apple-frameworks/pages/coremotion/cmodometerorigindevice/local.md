> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmodometerorigindevice/local

# CMOdometerOriginDevice.local (Swift)

**Framework:** Core Motion  
**Kind:** Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 10.15+ · visionOS 1.0+ · watchOS 8.4+

The origin of the odometer sample comes from the same device that requests the sample.

## Declaration

```swift
case local
```

## See Also

### Device origins

- [CMOdometerOriginDevice.unknown](unknown.md): The origin of the odometer sample is unknown.
- [CMOdometerOriginDevice.remote](remote.md): The origin of the odometer sample comes from a device that’s paired with the local device.

# CMOdometerOriginDeviceLocal (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 10.15+ · visionOS 1.0+ · watchOS 8.4+

The origin of the odometer sample comes from the same device that requests the sample.

## Declaration

```objectivec
CMOdometerOriginDeviceLocal
```

## See Also

### Device origins

- [CMOdometerOriginDeviceUnknown](unknown.md): The origin of the odometer sample is unknown.
- [CMOdometerOriginDeviceRemote](remote.md): The origin of the odometer sample comes from a device that’s paired with the local device.
