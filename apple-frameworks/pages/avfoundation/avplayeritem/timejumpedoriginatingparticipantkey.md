> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/timejumpedoriginatingparticipantkey](https://developer.apple.com/documentation/avfoundation/avplayeritem/timejumpedoriginatingparticipantkey)

# timeJumpedOriginatingParticipantKey (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key to retrieve a unique identifier of the participant that caused the time jump.

## Declaration

```swift
class let timeJumpedOriginatingParticipantKey: String
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve a UUID value for the participant in a coordinated playback session that caused the time jump. The returned UUID reresents a value in the playback coordinator’s [otherParticipants](../avplaybackcoordinator/otherparticipants.md) array.

# AVPlayerItemTimeJumpedOriginatingParticipantKey (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A key to retrieve a unique identifier of the participant that caused the time jump.

## Declaration

```objectivec
extern NSString * const AVPlayerItemTimeJumpedOriginatingParticipantKey;
```

<a id="Discussion"></a>

## Discussion

Use this key to retrieve a UUID value for the participant in a coordinated playback session that caused the time jump. The returned UUID reresents a value in the playback coordinator’s [otherParticipants](../avplaybackcoordinator/otherparticipants.md) array.
