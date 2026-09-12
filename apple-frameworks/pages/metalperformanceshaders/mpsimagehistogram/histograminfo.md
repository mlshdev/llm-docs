> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/histograminfo](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/histograminfo)

# histogramInfo (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A structure describing the histogram content.

## Declaration

```swift
var histogramInfo: MPSImageHistogramInfo { get }
```

<a id="Discussion"></a>

## Discussion

Returns a structure describing the format of the histogram.

## See Also

### Properties

- [clipRectSource](cliprectsource.md): The source rectangle to use when reading data.
- [zeroHistogram](zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [minPixelThresholdValue](minpixelthresholdvalue.md)

# histogramInfo (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A structure describing the histogram content.

## Declaration

```objectivec
@property (nonatomic, readonly) MPSImageHistogramInfo histogramInfo;
```

<a id="Discussion"></a>

## Discussion

Returns a structure describing the format of the histogram.

## See Also

### Properties

- [clipRectSource](cliprectsource.md): The source rectangle to use when reading data.
- [zeroHistogram](zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [minPixelThresholdValue](minpixelthresholdvalue.md)
