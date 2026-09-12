> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice/streamingeardidchangenotification](https://developer.apple.com/documentation/accessibility/axmfihearingdevice/streamingeardidchangenotification)

# streamingEarDidChangeNotification (Swift)

**Framework:** Accessibility  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that the system posts when there’s a change to which ears enable streaming.

## Declaration

```swift
static let streamingEarDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The system posts this notification when the value of [streamingEar()](streamingear%28%29.md) changes.

## See Also

### Streaming status

- [AXMFiHearingDevice.Ear](ear.md): Constants that represent a hearing device ear.
- [streamingEar()](streamingear%28%29.md): Returns which ears enable streaming.

# AXMFiHearingDeviceStreamingEarDidChangeNotification (Objective-C)

**Framework:** Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

A notification that the system posts when there’s a change to which ears enable streaming.

## Declaration

```objectivec
extern NSNotificationName const AXMFiHearingDeviceStreamingEarDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

The system posts this notification when the value of [AXMFiHearingDeviceStreamingEar](streamingear%28%29.md) changes.

## See Also

### Streaming status

- [AXHearingDeviceEar](ear.md): Constants that represent a hearing device ear.
- [AXMFiHearingDeviceStreamingEar](streamingear%28%29.md): Returns which ears enable streaming.
