> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/nrnoiselevel](https://developer.apple.com/documentation/coreimage/cilineoverlay/nrnoiselevel)

# nrNoiseLevel (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.

## Declaration

```swift
var nrNoiseLevel: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Increasing the noise level helps to clean up the traced edges of the image.

## See Also

### Instance Properties

- [nrSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.

# NRNoiseLevel (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.

## Declaration

```objectivec
@property (nonatomic) float NRNoiseLevel;
```

<a id="Discussion"></a>

## Discussion

Increasing the noise level helps to clean up the traced edges of the image.

## See Also

### Instance Properties

- [NRSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.
