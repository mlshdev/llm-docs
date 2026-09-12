> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinatordelegate/playbackcoordinator(_:identifierfor:)](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate/playbackcoordinator(_:identifierfor:))

# playbackCoordinator(\_:identifierFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an identifier for a player item.

## Declaration

```swift
optional func playbackCoordinator(_ coordinator: AVPlayerPlaybackCoordinator, identifierFor playerItem: AVPlayerItem) -> String
```

## Parameters

- `coordinator`: The object coordinating playback.
- `playerItem`: The player item to return an identifier for.

<a id="return-value"></a>

## Return Value

An identifier string.

<a id="Discussion"></a>

## Discussion

A coordinator calls this method to identify the items that its player object plays.

Implement this method to enable the coordinator to establish the identity of items that have different URLs. For example, two participants may play the same item, but one plays the item from a remote host and the other from a local version on a device.

If you don’t implement this method, the coordinator derives an identifier from the item’s asset.

# playbackCoordinator:identifierForPlayerItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns an identifier for a player item.

## Declaration

```objectivec
- (NSString *) playbackCoordinator:(AVPlayerPlaybackCoordinator *) coordinator identifierForPlayerItem:(AVPlayerItem *) playerItem;
```

## Parameters

- `coordinator`: The object coordinating playback.
- `playerItem`: The player item to return an identifier for.

<a id="return-value"></a>

## Return Value

An identifier string.

<a id="Discussion"></a>

## Discussion

A coordinator calls this method to identify the items that its player object plays.

Implement this method to enable the coordinator to establish the identity of items that have different URLs. For example, two participants may play the same item, but one plays the item from a remote host and the other from a local version on a device.

If you don’t implement this method, the coordinator derives an identifier from the item’s asset.
