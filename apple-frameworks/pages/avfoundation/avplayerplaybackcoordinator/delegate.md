> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinator/delegate

# delegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A delegate object for the playback coordinator.

## Declaration

```swift
weak var delegate: (any AVPlayerPlaybackCoordinatorDelegate)? { get set }
```

## See Also

### Configuring the delegate

- [AVPlayerPlaybackCoordinatorDelegate](../avplayerplaybackcoordinatordelegate.md): A protocol that defines the methods to implement to participate in playback coordination.

# delegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A delegate object for the playback coordinator.

## Declaration

```objectivec
@property (weak) id<AVPlayerPlaybackCoordinatorDelegate> delegate;
```

## See Also

### Configuring the delegate

- [AVPlayerPlaybackCoordinatorDelegate](../avplayerplaybackcoordinatordelegate.md): A protocol that defines the methods to implement to participate in playback coordination.
