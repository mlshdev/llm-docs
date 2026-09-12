> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoaperturemode/encodedpixels](https://developer.apple.com/documentation/avfoundation/avvideoaperturemode/encodedpixels)

# encodedPixels (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The encoded dimensions of the image description are displayed.

## Declaration

```swift
static let encodedPixels: AVVideoApertureMode
```

<a id="Discussion"></a>

## Discussion

The image is not cropped to the clean aperture region and is not scaled according to the pixel aspect ratio.

## See Also

### Aperture modes

- [cleanAperture](cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [productionAperture](productionaperture.md): The pixel aspect ratio will be applied.

# AVVideoApertureModeEncodedPixels (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The encoded dimensions of the image description are displayed.

## Declaration

```objectivec
extern AVVideoApertureMode const AVVideoApertureModeEncodedPixels;
```

<a id="Discussion"></a>

## Discussion

The image is not cropped to the clean aperture region and is not scaled according to the pixel aspect ratio.

## See Also

### Aperture modes

- [AVVideoApertureModeCleanAperture](cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [AVVideoApertureModeProductionAperture](productionaperture.md): The pixel aspect ratio will be applied.
