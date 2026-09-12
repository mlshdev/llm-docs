> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/preferredmaximumresolution](https://developer.apple.com/documentation/avfoundation/avplayeritem/preferredmaximumresolution)

# preferredMaximumResolution (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The desired maximum resolution of a video that is to be downloaded.

## Declaration

```swift
nonisolated var preferredMaximumResolution: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to [CGSizeZero](../../coregraphics/cgsizezero.md), which indicates there is no limit on the video resolution. Any other value indicates a preferred maximum video resolution. This property only applies to HTTP Live Streaming assets.

## See Also

### Configuring presentation

- [presentationSize](presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [videoApertureMode](videoaperturemode.md): The video aperture mode to apply during playback.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.

# preferredMaximumResolution (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The desired maximum resolution of a video that is to be downloaded.

## Declaration

```objectivec
@property CGSize preferredMaximumResolution;
```

<a id="Discussion"></a>

## Discussion

Defaults to [CGSizeZero](../../coregraphics/cgsizezero.md), which indicates there is no limit on the video resolution. Any other value indicates a preferred maximum video resolution. This property only applies to HTTP Live Streaming assets.

## See Also

### Configuring presentation

- [presentationSize](presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [videoApertureMode](videoaperturemode.md): The video aperture mode to apply during playback.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.
