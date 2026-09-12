> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator/init(playbackcontroldelegate:)](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/init(playbackcontroldelegate:))

# init(playbackControlDelegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a playback coordinator for a custom playback object.

## Declaration

```swift
init(playbackControlDelegate: any AVPlaybackCoordinatorPlaybackControlDelegate)
```

## Parameters

- `playbackControlDelegate`: The playback control delegate for the playback coordinator.

<a id="Discussion"></a>

## Discussion

If your app doesn’t use [AVPlayer](../avplayer.md) for playback, create an instance of this class to coordinate playback of your customer player.

## See Also

### Creating a coordinator

- [AVPlaybackCoordinatorPlaybackControlDelegate](../avplaybackcoordinatorplaybackcontroldelegate.md): A protocol that defines the method to implement to respond to playback commands from the playback coordinator.

# initWithPlaybackControlDelegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a playback coordinator for a custom playback object.

## Declaration

```objectivec
- (instancetype) initWithPlaybackControlDelegate:(id<AVPlaybackCoordinatorPlaybackControlDelegate>) playbackControlDelegate;
```

## Parameters

- `playbackControlDelegate`: The playback control delegate for the playback coordinator.

<a id="Discussion"></a>

## Discussion

If your app doesn’t use [AVPlayer](../avplayer.md) for playback, create an instance of this class to coordinate playback of your customer player.

## See Also

### Creating a coordinator

- [AVPlaybackCoordinatorPlaybackControlDelegate](../avplaybackcoordinatorplaybackcontroldelegate.md): A protocol that defines the method to implement to respond to playback commands from the playback coordinator.
