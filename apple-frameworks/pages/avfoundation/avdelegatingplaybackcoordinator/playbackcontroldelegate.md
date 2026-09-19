> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/playbackcontroldelegate

# playbackControlDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate object for the playback coordinator.

## Declaration

```swift
weak var playbackControlDelegate: (any AVPlaybackCoordinatorPlaybackControlDelegate)? { get }
```

# playbackControlDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The delegate object for the playback coordinator.

## Declaration

```objectivec
@property (nonatomic, weak, readonly) id<AVPlaybackCoordinatorPlaybackControlDelegate> playbackControlDelegate;
```
