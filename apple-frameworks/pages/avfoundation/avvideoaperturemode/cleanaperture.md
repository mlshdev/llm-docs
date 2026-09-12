> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoaperturemode/cleanaperture](https://developer.apple.com/documentation/avfoundation/avvideoaperturemode/cleanaperture)

# cleanAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The pixel aspect ratio and clean aperture will be applied.

## Declaration

```swift
static let cleanAperture: AVVideoApertureMode
```

<a id="Discussion"></a>

## Discussion

An image’s clean aperture is a region of video free from transition artifacts caused by the encoding of the signal.

## See Also

### Aperture modes

- [encodedPixels](encodedpixels.md): The encoded dimensions of the image description are displayed.
- [productionAperture](productionaperture.md): The pixel aspect ratio will be applied.

# AVVideoApertureModeCleanAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The pixel aspect ratio and clean aperture will be applied.

## Declaration

```objectivec
extern AVVideoApertureMode const AVVideoApertureModeCleanAperture;
```

<a id="Discussion"></a>

## Discussion

An image’s clean aperture is a region of video free from transition artifacts caused by the encoding of the signal.

## See Also

### Aperture modes

- [AVVideoApertureModeEncodedPixels](encodedpixels.md): The encoded dimensions of the image description are displayed.
- [AVVideoApertureModeProductionAperture](productionaperture.md): The pixel aspect ratio will be applied.
