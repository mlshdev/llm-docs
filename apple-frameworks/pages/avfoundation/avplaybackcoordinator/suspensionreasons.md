> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinator/suspensionreasons](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinator/suspensionreasons)

# suspensionReasons (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons a coordinator is currently unable to participate in a group playback activity.

## Declaration

```swift
var suspensionReasons: [AVCoordinatedPlaybackSuspension.Reason] { get }
```

<a id="Discussion"></a>

## Discussion

The coordinator doesn’t respond to changes in group playback state when this property value contains suspension reasons.

> **Note**

>  To observe changes to this property value, register for notifications of type [suspensionReasonsDidChangeNotification](suspensionreasonsdidchangenotification.md).

## See Also

### Observing suspension reasons

- [suspensionReasonsDidChangeNotification](suspensionreasonsdidchangenotification.md): A notification that the coordinator posts when its suspension reasons change.

# suspensionReasons (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons a coordinator is currently unable to participate in a group playback activity.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * suspensionReasons;
```

<a id="Discussion"></a>

## Discussion

The coordinator doesn’t respond to changes in group playback state when this property value contains suspension reasons.

> **Note**

>  To observe changes to this property value, register for notifications of type [AVPlaybackCoordinatorSuspensionReasonsDidChangeNotification](suspensionreasonsdidchangenotification.md).

## See Also

### Observing suspension reasons

- [AVPlaybackCoordinatorSuspensionReasonsDidChangeNotification](suspensionreasonsdidchangenotification.md): A notification that the coordinator posts when its suspension reasons change.
