> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice/paireduuidsdidchangenotification](https://developer.apple.com/documentation/accessibility/axmfihearingdevice/paireduuidsdidchangenotification)

# pairedUUIDsDidChangeNotification (Swift)

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that the system posts when there’s a change to the UUIDs of the hearing device peripherals.

## Declaration

```swift
static let pairedUUIDsDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The system posts this notification when the value of [pairedDeviceIdentifiers()](paireddeviceidentifiers%28%29.md) changes.

## See Also

### Paired hearing devices

- [pairedDeviceIdentifiers()](paireddeviceidentifiers%28%29.md): Returns the UUIDs of the hearing device peripherals.

# AXMFiHearingDevicePairedUUIDsDidChangeNotification (Objective-C)

**Framework:** Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that the system posts when there’s a change to the UUIDs of the hearing device peripherals.

## Declaration

```objectivec
extern NSNotificationName const AXMFiHearingDevicePairedUUIDsDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

The system posts this notification when the value of [AXMFiHearingDevicePairedUUIDs](paireddeviceidentifiers%28%29.md) changes.

## See Also

### Paired hearing devices

- [AXMFiHearingDevicePairedUUIDs](paireddeviceidentifiers%28%29.md): Returns the UUIDs of the hearing device peripherals.
