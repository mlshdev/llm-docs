> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/presentationsize](https://developer.apple.com/documentation/avfoundation/avplayeritem/presentationsize)

# presentationSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The size at which the visual portion of the item is presented by the player.

## Declaration

```swift
nonisolated var presentationSize: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

This property can be accessed at any time, but may return a value of `CGSizeZero` prior to the player item becoming ready to play. You can use key-value observing to obtain the player item’s valid presentation size as early as possible.

## See Also

### Configuring presentation

- [preferredMaximumResolution](preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [videoApertureMode](videoaperturemode.md): The video aperture mode to apply during playback.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.

# presentationSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The size at which the visual portion of the item is presented by the player.

## Declaration

```objectivec
@property (readonly) CGSize presentationSize;
```

<a id="Discussion"></a>

## Discussion

This property can be accessed at any time, but may return a value of `CGSizeZero` prior to the player item becoming ready to play. You can use key-value observing to obtain the player item’s valid presentation size as early as possible.

## See Also

### Configuring presentation

- [preferredMaximumResolution](preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [videoApertureMode](videoaperturemode.md): The video aperture mode to apply during playback.
- [AVVideoApertureMode](../avvideoaperturemode.md): A value that describes how a video is scaled or cropped.
