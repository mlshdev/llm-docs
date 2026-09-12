> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinatordelegate](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate)

# AVPlayerPlaybackCoordinatorDelegate (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol that defines the methods to implement to participate in playback coordination.

## Declaration

```swift
protocol AVPlayerPlaybackCoordinatorDelegate : NSObjectProtocol, Sendable
```

## Topics

### Identifying items

- [playbackCoordinator(\_:identifierFor:)](avplayerplaybackcoordinatordelegate/playbackcoordinator%28__identifierfor_%29.md): Returns an identifier for a player item.

### Retrieving interstitial time ranges

- [playbackCoordinator(\_:interstitialTimeRangesFor:)](avplayerplaybackcoordinatordelegate/playbackcoordinator%28__interstitialtimerangesfor_%29.md): Asks the delegate for time ranges in a player item that don’t correspond to the primary content.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the delegate

- [delegate](avplayerplaybackcoordinator/delegate.md): A delegate object for the playback coordinator.

# AVPlayerPlaybackCoordinatorDelegate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A protocol that defines the methods to implement to participate in playback coordination.

## Declaration

```objectivec
@protocol AVPlayerPlaybackCoordinatorDelegate <NSObject>
```

## Topics

### Identifying items

- [playbackCoordinator:identifierForPlayerItem:](avplayerplaybackcoordinatordelegate/playbackcoordinator%28__identifierfor_%29.md): Returns an identifier for a player item.

### Retrieving interstitial time ranges

- [playbackCoordinator:interstitialTimeRangesForPlayerItem:](avplayerplaybackcoordinatordelegate/playbackcoordinator%28__interstitialtimerangesfor_%29.md): Asks the delegate for time ranges in a player item that don’t correspond to the primary content.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the delegate

- [delegate](avplayerplaybackcoordinator/delegate.md): A delegate object for the playback coordinator.
