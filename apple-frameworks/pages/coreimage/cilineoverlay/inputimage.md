> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/inputimage](https://developer.apple.com/documentation/coreimage/cilineoverlay/inputimage)

# inputImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image to use as an input image.

## Declaration

```swift
var inputImage: CIImage? { get set }
```

## See Also

### Instance Properties

- [nrNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [nrSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [threshold](threshold.md): A value that determines edge visibility.

# inputImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image to use as an input image.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * inputImage;
```

## See Also

### Instance Properties

- [NRNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [NRSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [threshold](threshold.md): A value that determines edge visibility.
