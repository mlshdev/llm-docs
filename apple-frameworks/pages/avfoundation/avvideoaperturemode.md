> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoaperturemode](https://developer.apple.com/documentation/avfoundation/avvideoaperturemode)

# AVVideoApertureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that describes how a video is scaled or cropped.

## Declaration

```swift
struct AVVideoApertureMode
```

## Topics

### Aperture modes

- [cleanAperture](avvideoaperturemode/cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [encodedPixels](avvideoaperturemode/encodedpixels.md): The encoded dimensions of the image description are displayed.
- [productionAperture](avvideoaperturemode/productionaperture.md): The pixel aspect ratio will be applied.

### Initializers

- [init(rawValue:)](avvideoaperturemode/init%28rawvalue_%29.md): Creates a video aperture mode with a string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring presentation

- [presentationSize](avplayeritem/presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [preferredMaximumResolution](avplayeritem/preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [videoApertureMode](avplayeritem/videoaperturemode.md): The video aperture mode to apply during playback.

# AVVideoApertureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A value that describes how a video is scaled or cropped.

## Declaration

```objectivec
typedef NSString * AVVideoApertureMode;
```

## Topics

### Aperture modes

- [AVVideoApertureModeCleanAperture](avvideoaperturemode/cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [AVVideoApertureModeEncodedPixels](avvideoaperturemode/encodedpixels.md): The encoded dimensions of the image description are displayed.
- [AVVideoApertureModeProductionAperture](avvideoaperturemode/productionaperture.md): The pixel aspect ratio will be applied.

## See Also

### Configuring presentation

- [presentationSize](avplayeritem/presentationsize.md): The size at which the visual portion of the item is presented by the player.
- [preferredMaximumResolution](avplayeritem/preferredmaximumresolution.md): The desired maximum resolution of a video that is to be downloaded.
- [videoApertureMode](avplayeritem/videoaperturemode.md): The video aperture mode to apply during playback.
