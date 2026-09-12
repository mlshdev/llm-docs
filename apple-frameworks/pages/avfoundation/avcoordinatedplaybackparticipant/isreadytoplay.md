> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybackparticipant/isreadytoplay](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/isreadytoplay)

# isReadyToPlay (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the participant is ready to start coordinated playback.

## Declaration

```swift
var isReadyToPlay: Bool { get }
```

## See Also

### Accessing participant status

- [identifier](identifier.md): A unique identifier for the participant.
- [suspensionReasons](suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.

# readyToPlay (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the participant is ready to start coordinated playback.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isReadyToPlay) BOOL readyToPlay;
```

## See Also

### Accessing participant status

- [identifier](identifier.md): A unique identifier for the participant.
- [suspensionReasons](suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.
