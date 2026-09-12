> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciconvolution](https://developer.apple.com/documentation/coreimage/ciconvolution)

# CIConvolution (Swift)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a convolution filter.

## Declaration

```swift
protocol CIConvolution : CIFilterProtocol
```

## Topics

### Instance Properties

- [bias](ciconvolution/bias.md): A value that’s added to each output pixel.
- [inputImage](ciconvolution/inputimage.md): The image to use as an input image.
- [weights](ciconvolution/weights.md): The convolution kernel.

## Relationships

### Inherits From

- [CIFilterProtocol](cifilterprotocol.md)

## See Also

### Related Documentation

- [convolution3X3()](cifilter-swift.class/convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5()](cifilter-swift.class/convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7()](cifilter-swift.class/convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9Horizontal()](cifilter-swift.class/convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolution9Vertical()](cifilter-swift.class/convolution9vertical%28%29.md): Applies a convolution-9 vertical filter to the `RGBA` components of an image.

# CIConvolution (Objective-C)

**Framework:** Core Image  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The properties you use to configure a convolution filter.

## Declaration

```objectivec
@protocol CIConvolution <CIFilter>
```

## Topics

### Instance Properties

- [bias](ciconvolution/bias.md): A value that’s added to each output pixel.
- [inputImage](ciconvolution/inputimage.md): The image to use as an input image.
- [weights](ciconvolution/weights.md): The convolution kernel.

## Relationships

### Inherits From

- [CIFilter](cifilterprotocol.md)

## See Also

### Related Documentation

- [convolution3X3Filter](cifilter-swift.class/convolution3x3%28%29.md): Applies a convolution 3 x 3 filter to the `RGBA` components of an image.
- [convolution5X5Filter](cifilter-swift.class/convolution5x5%28%29.md): Applies a convolution 5 x 5 filter to the `RGBA` components image.
- [convolution7X7Filter](cifilter-swift.class/convolution7x7%28%29.md): Applies a convolution 7 x 7 filter to the `RGBA` color components of an image.
- [convolution9HorizontalFilter](cifilter-swift.class/convolution9horizontal%28%29.md): Applies a convolution-9 horizontal filter to the `RGBA` components of an image.
- [convolution9VerticalFilter](cifilter-swift.class/convolution9vertical%28%29.md): Applies a convolution-9 vertical filter to the `RGBA` components of an image.
