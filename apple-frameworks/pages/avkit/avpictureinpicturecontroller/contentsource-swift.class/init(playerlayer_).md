> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avpictureinpicturecontroller/contentsource-swift.class/init(playerlayer:)

# init(playerLayer:) (Swift)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a content source with a player layer.

## Declaration

```swift
init(playerLayer: AVPlayerLayer)
```

## Parameters

- `playerLayer`: The player layer to show in Picture in Picture.

## See Also

### Creating a content source

- [init(sampleBufferDisplayLayer:playbackDelegate:)](init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.
- [init(activeVideoCallSourceView:contentViewController:)](init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.

# initWithPlayerLayer: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a content source with a player layer.

## Declaration

```objectivec
- (instancetype) initWithPlayerLayer:(AVPlayerLayer *) playerLayer;
```

## Parameters

- `playerLayer`: The player layer to show in Picture in Picture.

## See Also

### Creating a content source

- [initWithSampleBufferDisplayLayer:playbackDelegate:](init%28samplebufferdisplaylayer_playbackdelegate_%29.md): Creates a content source with a sample buffer display layer.
- [initWithActiveVideoCallSourceView:contentViewController:](init%28activevideocallsourceview_contentviewcontroller_%29.md): Creates a content source with an active video call.
