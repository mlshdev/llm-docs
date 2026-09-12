> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageaccumulator/init(extent:format:)](https://developer.apple.com/documentation/coreimage/ciimageaccumulator/init(extent:format:))

# init(extent:format:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image accumulator with the specified extent and pixel format.

## Declaration

```swift
init?(extent: CGRect, format: CIFormat)
```

## Parameters

- `extent`: A rectangle that specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.
- `format`: The format and size of each pixel. You must supply a pixel format constant, such askCIFormatARGB8  (32 bit-per-pixel, fixed-point pixel format) or kCIFormatRGBAf (128 bit-per-pixel, floating-point pixel format). See [CIImage](../ciimage.md) for more information about pixel format constants.

<a id="return-value"></a>

## Return Value

The initialized image accumulator object.

## See Also

### Initializing an Image Accumulator

- [init(extent:format:colorSpace:)](init%28extent_format_colorspace_%29.md): Initializes an image accumulator with the specified extent, pixel format, and color space.

# initWithExtent:format: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Initializes an image accumulator with the specified extent and pixel format.

## Declaration

```objectivec
- (instancetype) initWithExtent:(CGRect) extent format:(CIFormat) format;
```

## Parameters

- `extent`: A rectangle that specifies the x-value of the rectangle origin, the y-value of the rectangle origin, and the width and height.
- `format`: The format and size of each pixel. You must supply a pixel format constant, such askCIFormatARGB8  (32 bit-per-pixel, fixed-point pixel format) or kCIFormatRGBAf (128 bit-per-pixel, floating-point pixel format). See [CIImage](../ciimage.md) for more information about pixel format constants.

<a id="return-value"></a>

## Return Value

The initialized image accumulator object.

## See Also

### Related Documentation

- [imageAccumulatorWithExtent:format:](imageaccumulatorwithextent_format_.md): Creates an image accumulator with the specified extent and pixel format.

### Initializing an Image Accumulator

- [initWithExtent:format:colorSpace:](init%28extent_format_colorspace_%29.md): Initializes an image accumulator with the specified extent, pixel format, and color space.
