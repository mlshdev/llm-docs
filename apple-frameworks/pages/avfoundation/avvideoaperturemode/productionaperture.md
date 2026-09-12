> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoaperturemode/productionaperture](https://developer.apple.com/documentation/avfoundation/avvideoaperturemode/productionaperture)

# productionAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The pixel aspect ratio will be applied.

## Declaration

```swift
static let productionAperture: AVVideoApertureMode
```

<a id="Discussion"></a>

## Discussion

The image is not cropped to the clean aperture region, but it is scaled according to the pixel aspect ratio. Use this option when you want to see all the pixels in your video, including the edges.

## See Also

### Aperture modes

- [cleanAperture](cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [encodedPixels](encodedpixels.md): The encoded dimensions of the image description are displayed.

# AVVideoApertureModeProductionAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The pixel aspect ratio will be applied.

## Declaration

```objectivec
extern AVVideoApertureMode const AVVideoApertureModeProductionAperture;
```

<a id="Discussion"></a>

## Discussion

The image is not cropped to the clean aperture region, but it is scaled according to the pixel aspect ratio. Use this option when you want to see all the pixels in your video, including the edges.

## See Also

### Aperture modes

- [AVVideoApertureModeCleanAperture](cleanaperture.md): The pixel aspect ratio and clean aperture will be applied.
- [AVVideoApertureModeEncodedPixels](encodedpixels.md): The encoded dimensions of the image description are displayed.
