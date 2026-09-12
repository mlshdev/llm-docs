> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/preferredforwardbufferduration](https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredforwardbufferduration)

# preferredForwardBufferDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The duration the player should buffer media from the network ahead of the playhead to guard against playback disruption.

## Declaration

```swift
nonisolated var preferredForwardBufferDuration: TimeInterval { get set }
```

<a id="Discussion"></a>

## Discussion

This property defines the preferred forward buffer duration in seconds. If set to 0, the player will choose an appropriate level of buffering for most use cases. Setting this property to a low value will increase the chance that playback will stall and re-buffer, while setting it to a high value will increase demand on system resources.

## See Also

### Configuring network behavior

- [preferredPeakBitRate](preferredpeakbitrate.md): The desired limit, in bits per second, of network bandwidth consumption for this item.
- [canUseNetworkResourcesForLiveStreamingWhilePaused](canusenetworkresourcesforlivestreamingwhilepaused.md): A Boolean value that indicates whether the player item can use network resources to keep the playback state up to date while paused.

# preferredForwardBufferDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The duration the player should buffer media from the network ahead of the playhead to guard against playback disruption.

## Declaration

```objectivec
@property NSTimeInterval preferredForwardBufferDuration;
```

<a id="Discussion"></a>

## Discussion

This property defines the preferred forward buffer duration in seconds. If set to 0, the player will choose an appropriate level of buffering for most use cases. Setting this property to a low value will increase the chance that playback will stall and re-buffer, while setting it to a high value will increase demand on system resources.

## See Also

### Configuring network behavior

- [preferredPeakBitRate](preferredpeakbitrate.md): The desired limit, in bits per second, of network bandwidth consumption for this item.
- [canUseNetworkResourcesForLiveStreamingWhilePaused](canusenetworkresourcesforlivestreamingwhilepaused.md): A Boolean value that indicates whether the player item can use network resources to keep the playback state up to date while paused.
