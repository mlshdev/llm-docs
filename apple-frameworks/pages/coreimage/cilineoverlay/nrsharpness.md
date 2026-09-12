> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/nrsharpness](https://developer.apple.com/documentation/coreimage/cilineoverlay/nrsharpness)

# nrSharpness (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of sharpening done when removing noise in the image before tracing the edges of the image.

## Declaration

```swift
var nrSharpness: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This improves the edge acquisition.

## See Also

### Instance Properties

- [nrNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.

# NRSharpness (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of sharpening done when removing noise in the image before tracing the edges of the image.

## Declaration

```objectivec
@property (nonatomic) float NRSharpness;
```

<a id="Discussion"></a>

## Discussion

This improves the edge acquisition.

## See Also

### Instance Properties

- [NRNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.
