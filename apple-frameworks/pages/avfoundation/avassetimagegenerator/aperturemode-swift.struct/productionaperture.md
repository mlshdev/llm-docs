> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/productionaperture](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/productionaperture)

# productionAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies only pixel aspect ratio.

## Declaration

```swift
static let productionAperture: AVAssetImageGenerator.ApertureMode
```

<a id="Discussion"></a>

## Discussion

The image isn’t cropped to the clean aperture region, but it’s scaled according to the pixel aspect ratio. Use this option when you want to see all the pixels in your video, including the edges.

## See Also

### Aperture modes

- [cleanAperture](cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [encodedPixels](encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.

# AVAssetImageGeneratorApertureModeProductionAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies only pixel aspect ratio.

## Declaration

```objectivec
extern AVAssetImageGeneratorApertureMode const AVAssetImageGeneratorApertureModeProductionAperture;
```

<a id="Discussion"></a>

## Discussion

The image isn’t cropped to the clean aperture region, but it’s scaled according to the pixel aspect ratio. Use this option when you want to see all the pixels in your video, including the edges.

## See Also

### Aperture modes

- [AVAssetImageGeneratorApertureModeCleanAperture](cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [AVAssetImageGeneratorApertureModeEncodedPixels](encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.
