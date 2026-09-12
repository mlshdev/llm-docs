> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/suspensionreasonsdidchangenotification](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/suspensionreasonsdidchangenotification)

# suspensionReasonsDidChangeNotification (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that the coordinator posts when its suspension reasons change.

## Declaration

```swift
class let suspensionReasonsDidChangeNotification: NSNotification.Name
```

## See Also

### Observing suspension reasons

- [suspensionReasons](suspensionreasons.md): The reasons a coordinator is currently unable to participate in a group playback activity.

# AVPlaybackCoordinatorSuspensionReasonsDidChangeNotification (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification that the coordinator posts when its suspension reasons change.

## Declaration

```objectivec
extern NSNotificationName const AVPlaybackCoordinatorSuspensionReasonsDidChangeNotification;
```

## See Also

### Observing suspension reasons

- [suspensionReasons](suspensionreasons.md): The reasons a coordinator is currently unable to participate in a group playback activity.
