> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/cleanaperture](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct/cleanaperture)

# cleanAperture (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies both pixel aspect ratio and clean aperture.

## Declaration

```swift
static let cleanAperture: AVAssetImageGenerator.ApertureMode
```

<a id="Discussion"></a>

## Discussion

An image’s clean aperture is a region of video free from transition artifacts caused by the encoding of the signal.

## See Also

### Aperture modes

- [encodedPixels](encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.
- [productionAperture](productionaperture.md): A mode that applies only pixel aspect ratio.

# AVAssetImageGeneratorApertureModeCleanAperture (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mode that applies both pixel aspect ratio and clean aperture.

## Declaration

```objectivec
extern AVAssetImageGeneratorApertureMode const AVAssetImageGeneratorApertureModeCleanAperture;
```

<a id="Discussion"></a>

## Discussion

An image’s clean aperture is a region of video free from transition artifacts caused by the encoding of the signal.

## See Also

### Aperture modes

- [AVAssetImageGeneratorApertureModeEncodedPixels](encodedpixels.md): A mode that applies neither pixel aspect ratio nor clean aperture.
- [AVAssetImageGeneratorApertureModeProductionAperture](productionaperture.md): A mode that applies only pixel aspect ratio.
