> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/encodedpixels](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/encodedpixels)

# encodedPixels (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies neither pixel aspect ratio nor clean aperture.

## Declaration

```swift
static let encodedPixels: AVAssetImageGenerator.ApertureMode
```

<a id="Discussion"></a>

## Discussion

The image isn’t cropped to the clean aperture region and isn’t scaled according to the pixel aspect ratio. It displays the image according to its encoded dimensions.

## See Also

### Aperture modes

- [cleanAperture](cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [productionAperture](productionaperture.md): A mode that applies only pixel aspect ratio.

# AVAssetImageGeneratorApertureModeEncodedPixels (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies neither pixel aspect ratio nor clean aperture.

## Declaration

```objectivec
extern AVAssetImageGeneratorApertureMode const AVAssetImageGeneratorApertureModeEncodedPixels;
```

<a id="Discussion"></a>

## Discussion

The image isn’t cropped to the clean aperture region and isn’t scaled according to the pixel aspect ratio. It displays the image according to its encoded dimensions.

## See Also

### Aperture modes

- [AVAssetImageGeneratorApertureModeCleanAperture](cleanaperture.md): A mode that applies both pixel aspect ratio and clean aperture.
- [AVAssetImageGeneratorApertureModeProductionAperture](productionaperture.md): A mode that applies only pixel aspect ratio.
