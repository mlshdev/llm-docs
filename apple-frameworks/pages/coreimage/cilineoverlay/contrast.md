> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/contrast](https://developer.apple.com/documentation/coreimage/cilineoverlay/contrast)

# contrast (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of antialiasing to use on the edges produced by this filter.

## Declaration

```swift
var contrast: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Higher values produce higher contrast edges, that is, they’re less antialiased.

## See Also

### Instance Properties

- [nrNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [nrSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.

# contrast (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The amount of antialiasing to use on the edges produced by this filter.

## Declaration

```objectivec
@property (nonatomic) float contrast;
```

<a id="Discussion"></a>

## Discussion

Higher values produce higher contrast edges, that is, they’re less antialiased.

## See Also

### Instance Properties

- [NRNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [NRSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.
