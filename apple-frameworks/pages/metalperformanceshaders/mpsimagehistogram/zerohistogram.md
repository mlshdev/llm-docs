> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/zerohistogram](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/zerohistogram)

# zeroHistogram (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines whether to zero-initialize the histogram results.

## Declaration

```swift
var zeroHistogram: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Determines whether the memory region in which the histogram results are to be written in the histogram buffer are to be zero-initialized or not.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Properties

- [clipRectSource](cliprectsource.md): The source rectangle to use when reading data.
- [histogramInfo](histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](minpixelthresholdvalue.md)

# zeroHistogram (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines whether to zero-initialize the histogram results.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL zeroHistogram;
```

<a id="Discussion"></a>

## Discussion

Determines whether the memory region in which the histogram results are to be written in the histogram buffer are to be zero-initialized or not.

The default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Properties

- [clipRectSource](cliprectsource.md): The source rectangle to use when reading data.
- [histogramInfo](histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](minpixelthresholdvalue.md)
