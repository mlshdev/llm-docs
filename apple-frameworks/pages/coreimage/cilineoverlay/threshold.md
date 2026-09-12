> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilineoverlay/threshold](https://developer.apple.com/documentation/coreimage/cilineoverlay/threshold)

# threshold (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that determines edge visibility.

## Declaration

```swift
var threshold: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Larger values thin out the edges.

## See Also

### Instance Properties

- [nrNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [nrSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.

# threshold (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A value that determines edge visibility.

## Declaration

```objectivec
@property (nonatomic) float threshold;
```

<a id="Discussion"></a>

## Discussion

Larger values thin out the edges.

## See Also

### Instance Properties

- [NRNoiseLevel](nrnoiselevel.md): The noise level of the image, used with camera data, that’s removed before tracing the edges of the image.
- [NRSharpness](nrsharpness.md): The amount of sharpening done when removing noise in the image before tracing the edges of the image.
- [contrast](contrast.md): The amount of antialiasing to use on the edges produced by this filter.
- [edgeIntensity](edgeintensity.md): The accentuation factor of the Sobel gradient information when tracing the edges of the image.
- [inputImage](inputimage.md): The image to use as an input image.
