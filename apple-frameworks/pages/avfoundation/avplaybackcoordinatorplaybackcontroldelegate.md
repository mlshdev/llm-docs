> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate)

# AVPlaybackCoordinatorPlaybackControlDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol that defines the method to implement to respond to playback commands from the playback coordinator.

## Declaration

```swift
protocol AVPlaybackCoordinatorPlaybackControlDelegate : NSObjectProtocol, Sendable
```

## Topics

### Responding to commands

- [playbackCoordinator(\_:didIssue:completionHandler:)](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-73p3a.md): Tells the delegate to match the playback rate to that of the group when the rate is nonzero.
- [playbackCoordinator(\_:didIssue:completionHandler:)](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-56t01.md): Tells the delegate to pause playback.
- [playbackCoordinator(\_:didIssue:completionHandler:)](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-4fk8y.md): Tells the delegate to seek to a new time.
- [playbackCoordinator(\_:didIssue:completionHandler:)](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-btle.md): Tells the delegate to expect playback soon and to start buffering media data in preparation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a coordinator

- [init(playbackControlDelegate:)](avdelegatingplaybackcoordinator/init%28playbackcontroldelegate_%29.md): Creates a playback coordinator for a custom playback object.

# AVPlaybackCoordinatorPlaybackControlDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol that defines the method to implement to respond to playback commands from the playback coordinator.

## Declaration

```objectivec
@protocol AVPlaybackCoordinatorPlaybackControlDelegate <NSObject>
```

## Topics

### Responding to commands

- [playbackCoordinator:didIssuePlayCommand:completionHandler:](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-73p3a.md): Tells the delegate to match the playback rate to that of the group when the rate is nonzero.
- [playbackCoordinator:didIssuePauseCommand:completionHandler:](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-56t01.md): Tells the delegate to pause playback.
- [playbackCoordinator:didIssueSeekCommand:completionHandler:](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-4fk8y.md): Tells the delegate to seek to a new time.
- [playbackCoordinator:didIssueBufferingCommand:completionHandler:](avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator%28__didissue_completionhandler_%29-btle.md): Tells the delegate to expect playback soon and to start buffering media data in preparation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a coordinator

- [initWithPlaybackControlDelegate:](avdelegatingplaybackcoordinator/init%28playbackcontroldelegate_%29.md): Creates a playback coordinator for a custom playback object.
