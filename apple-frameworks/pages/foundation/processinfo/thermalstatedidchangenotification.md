> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/processinfo/thermalstatedidchangenotification

# thermalStateDidChangeNotification (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Posts when the thermal state of the system changes.

## Declaration

```swift
class let thermalStateDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is a [ProcessInfo](../processinfo.md) instance.

To receive [thermalStateDidChangeNotification](thermalstatedidchangenotification.md), you must access the [thermalState](thermalstate-swift.property.md) prior to registering for the notification.

## See Also

### Working with notifications

- [NSProcessInfoPowerStateDidChange](../nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.

# NSProcessInfoThermalStateDidChangeNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.10.3+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Posts when the thermal state of the system changes.

## Declaration

```objectivec
extern NSNotificationName const NSProcessInfoThermalStateDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is a [NSProcessInfo](../processinfo.md) instance.

To receive [NSProcessInfoThermalStateDidChangeNotification](thermalstatedidchangenotification.md), you must access the [thermalState](thermalstate-swift.property.md) prior to registering for the notification.

## See Also

### Working with notifications

- [NSProcessInfoPowerStateDidChangeNotification](../nsnotification/name-swift.struct/nsprocessinfopowerstatedidchange.md): Posts when the power state of a device changes.
