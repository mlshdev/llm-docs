> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/edgeintensity](https://developer.apple.com/documentation/coreimage/cilineoverlay/edgeintensity)

# edgeIntensity (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The accentuation factor of the Sobel gradient information when tracing the edges of the image.

## Declaration

```swift
var edgeIntensity: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Higher values find more edges, although typically, you’d use a low value (such as 1.0).

## See Also

### Instance Properties

- [nrNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [nrSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.

# edgeIntensity (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The accentuation factor of the Sobel gradient information when tracing the edges of the image.

## Declaration

```objectivec
@property (nonatomic) float edgeIntensity;
```

<a id="Discussion"></a>

## Discussion

Higher values find more edges, although typically, you’d use a low value (such as 1.0).

## See Also

### Instance Properties

- [NRNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [NRSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [inputImage](inputimage.md): The image to use as an input image.
- [threshold](threshold.md): A value that determines edge visibility.
