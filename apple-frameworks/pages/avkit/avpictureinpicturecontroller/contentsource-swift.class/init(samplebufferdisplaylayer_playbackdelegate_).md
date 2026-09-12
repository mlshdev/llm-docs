> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/init(samplebufferdisplaylayer:playbackdelegate:)](https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/init(samplebufferdisplaylayer:playbackdelegate:))

# init(sampleBufferDisplayLayer:playbackDelegate:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a content source with a sample buffer display layer.

## Declaration

```swift
init(sampleBufferDisplayLayer: AVSampleBufferDisplayLayer, playbackDelegate: any AVPictureInPictureSampleBufferPlaybackDelegate)
```

## Parameters

- `sampleBufferDisplayLayer`: The sample buffer display layer to show in Picture in Picture.
- `playbackDelegate`: The playback delegate object that responds to Picture in Picture events.

## See Also

### Creating a Content Source

- [init(playerLayer:)](init%28playerlayer_%29.md): Creates a content source with a player layer.
- [init(activeVideoCallSourceView:contentViewController:)](init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.

# initWithSampleBufferDisplayLayer:playbackDelegate: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a content source with a sample buffer display layer.

## Declaration

```objectivec
- (instancetype) initWithSampleBufferDisplayLayer:(AVSampleBufferDisplayLayer *) sampleBufferDisplayLayer playbackDelegate:(id<AVPictureInPictureSampleBufferPlaybackDelegate>) playbackDelegate;
```

## Parameters

- `sampleBufferDisplayLayer`: The sample buffer display layer to show in Picture in Picture.
- `playbackDelegate`: The playback delegate object that responds to Picture in Picture events.

## See Also

### Creating a Content Source

- [initWithPlayerLayer:](init%28playerlayer_%29.md): Creates a content source with a player layer.
- [initWithActiveVideoCallSourceView:contentViewController:](init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.
