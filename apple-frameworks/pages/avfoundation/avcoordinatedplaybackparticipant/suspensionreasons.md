> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybackparticipant/suspensionreasons](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/suspensionreasons)

# suspensionReasons (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons a participant isn’t currently participating in coordinated playback.

## Declaration

```swift
var suspensionReasons: [AVCoordinatedPlaybackSuspension.Reason] { get }
```

<a id="Discussion"></a>

## Discussion

This value is empty if the participant’s playback isn’t in a suspended state.

## See Also

### Accessing participant status

- [identifier](identifier.md): A unique identifier for the participant.
- [isReadyToPlay](isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.

# suspensionReasons (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The reasons a participant isn’t currently participating in coordinated playback.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * suspensionReasons;
```

<a id="Discussion"></a>

## Discussion

This value is empty if the participant’s playback isn’t in a suspended state.

## See Also

### Accessing participant status

- [identifier](identifier.md): A unique identifier for the participant.
- [readyToPlay](isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.
