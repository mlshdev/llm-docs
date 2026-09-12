> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinationmedium/connectedplaybackcoordinators](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinationmedium/connectedplaybackcoordinators)

# connectedPlaybackCoordinators (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All playback coordinators that are connected to the coordination medium.

## Declaration

```swift
var connectedPlaybackCoordinators: [AVPlayerPlaybackCoordinator] { get }
```

<a id="discussion"></a>

## Discussion

Returns an array of all the AVPlayerPlaybackCoordinators that are connected to the coordination medium. This coordination is specifically for AVPlayerPlaybackCoordinators, and we exclude AVDelegatingPlaybackCoordinators. AVPlaybackCoordinator properties and methods are individually configurable for each playback coordinator. To ensure correct synchronized behavior across all local playback coordinators, any common AVPlaybackCoordinator properties and methods should be set and called on all playback coordinators in the coordination medium. The properties and methods `otherParticipants`, `setParticipantLimit:forWaitingOutSuspensionsWithReason:`, and `participantLimitForWaitingOutSuspensionsWithReason:` refer specifically to remote participants that are coordinated through a group session rather than through the playback coordination medium. `otherParticipants` only returns participants connected to the same group session. `setParticipantLimit` and `participantLimitForWaitingOutSuspensionsWithReason` affect only policies and behavior with the group session.

# connectedPlaybackCoordinators (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

All playback coordinators that are connected to the coordination medium.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVPlayerPlaybackCoordinator *> * connectedPlaybackCoordinators;
```

<a id="discussion"></a>

## Discussion

Returns an array of all the AVPlayerPlaybackCoordinators that are connected to the coordination medium. This coordination is specifically for AVPlayerPlaybackCoordinators, and we exclude AVDelegatingPlaybackCoordinators. AVPlaybackCoordinator properties and methods are individually configurable for each playback coordinator. To ensure correct synchronized behavior across all local playback coordinators, any common AVPlaybackCoordinator properties and methods should be set and called on all playback coordinators in the coordination medium. The properties and methods `otherParticipants`, `setParticipantLimit:forWaitingOutSuspensionsWithReason:`, and `participantLimitForWaitingOutSuspensionsWithReason:` refer specifically to remote participants that are coordinated through a group session rather than through the playback coordination medium. `otherParticipants` only returns participants connected to the same group session. `setParticipantLimit` and `participantLimitForWaitingOutSuspensionsWithReason` affect only policies and behavior with the group session.
