> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/samplebufferplaybackdelegate](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/samplebufferplaybackdelegate)

# sampleBufferPlaybackDelegate (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A delegate object that responds to sample buffer playback events.

## Declaration

```swift
weak var sampleBufferPlaybackDelegate: (any AVPictureInPictureSampleBufferPlaybackDelegate)? { get }
```

## See Also

### Configuring the Delegate

- [AVPictureInPictureSampleBufferPlaybackDelegate](../../avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.

# sampleBufferPlaybackDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A delegate object that responds to sample buffer playback events.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<AVPictureInPictureSampleBufferPlaybackDelegate> sampleBufferPlaybackDelegate;
```

## See Also

### Configuring the Delegate

- [AVPictureInPictureSampleBufferPlaybackDelegate](../../avpictureinpicturesamplebufferplaybackdelegate.md): A protocol for controlling playback from a sample buffer display layer in Picture in Picture.
