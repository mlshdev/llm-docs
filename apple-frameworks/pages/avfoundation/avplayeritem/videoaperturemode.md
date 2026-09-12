> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/videoaperturemode](https://developer.apple.com/documentation/avfoundation/avplayeritem/videoaperturemode)

# videoApertureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The video aperture mode to apply during playback.

## Declaration

```swift
nonisolated var videoApertureMode: AVVideoApertureMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [cleanAperture](../avvideoaperturemode/cleanaperture.md).

## See Also

### Configuring presentation

- [presentationSize](presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [preferredMaximumResolution](preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.

# videoApertureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The video aperture mode to apply during playback.

## Declaration

```objectivec
@property (copy) AVVideoApertureMode videoApertureMode;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [AVVideoApertureModeCleanAperture](../avvideoaperturemode/cleanaperture.md).

## See Also

### Configuring presentation

- [presentationSize](presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [preferredMaximumResolution](preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.
