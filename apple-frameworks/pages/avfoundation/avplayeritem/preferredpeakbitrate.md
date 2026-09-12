> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/preferredpeakbitrate](https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredpeakbitrate)

# preferredPeakBitRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The desired limit, in bits per second, of network bandwidth consumption for this item.

## Declaration

```swift
nonisolated var preferredPeakBitRate: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Set `preferredPeakBitRate` to nonzero to indicate that the player should attempt to limit item playback to that bit rate, expressed in bits per second.

If the system can’t lower network bandwidth consumption to meet the this value, it reduces it as much as possible while it continues to play the item.

## See Also

### Configuring network behavior

- [preferredForwardBufferDuration](preferredforwardbufferduration.md): The duration the player should buffer media from the network ahead of the playhead to guard against playback disruption.
- [canUseNetworkResourcesForLiveStreamingWhilePaused](canusenetworkresourcesforlivestreamingwhilepaused.md): A Boolean value that indicates whether the player item can use network resources to keep the playback state up to date while paused.

# preferredPeakBitRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The desired limit, in bits per second, of network bandwidth consumption for this item.

## Declaration

```objectivec
@property double preferredPeakBitRate;
```

<a id="Discussion"></a>

## Discussion

Set `preferredPeakBitRate` to nonzero to indicate that the player should attempt to limit item playback to that bit rate, expressed in bits per second.

If the system can’t lower network bandwidth consumption to meet the this value, it reduces it as much as possible while it continues to play the item.

## See Also

### Configuring network behavior

- [preferredForwardBufferDuration](preferredforwardbufferduration.md): The duration the player should buffer media from the network ahead of the playhead to guard against playback disruption.
- [canUseNetworkResourcesForLiveStreamingWhilePaused](canusenetworkresourcesforlivestreamingwhilepaused.md): A Boolean value that indicates whether the player item can use network resources to keep the playback state up to date while paused.
