> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcoordinatedplaybackparticipant/identifier](https://developer.apple.com/documentation/avfoundation/avcoordinatedplaybackparticipant/identifier)

# identifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A unique identifier for the participant.

## Declaration

```swift
var identifier: UUID { get }
```

## See Also

### Accessing participant status

- [isReadyToPlay](isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.
- [suspensionReasons](suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.

# identifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A unique identifier for the participant.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUUID * identifier;
```

## See Also

### Accessing participant status

- [readyToPlay](isreadytoplay.md): A Boolean value that indicates whether the participant is ready to start coordinated playback.
- [suspensionReasons](suspensionreasons.md): The reasons a participant isn’t currently participating in coordinated playback.
