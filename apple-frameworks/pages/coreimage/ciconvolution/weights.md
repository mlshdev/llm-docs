> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciconvolution/weights

# weights (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The convolution kernel.

## Declaration

```swift
var weights: CIVector { get set }
```

## See Also

### Instance Properties

- [bias](bias.md): A value that’s added to each output pixel.
- [inputImage](inputimage.md): The image to use as an input image.

# weights (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The convolution kernel.

## Declaration

```objectivec
@property (nonatomic, retain) CIVector * weights;
```

## See Also

### Instance Properties

- [bias](bias.md): A value that’s added to each output pixel.
- [inputImage](inputimage.md): The image to use as an input image.
