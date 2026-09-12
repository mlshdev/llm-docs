> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistograminfo/histogramforalpha](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistograminfo/histogramforalpha)

# histogramForAlpha (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether the histogram for the alpha channel should be computed or not.

## Declaration

```swift
var histogramForAlpha: ObjCBool
```

## See Also

### Fields

- [numberOfHistogramEntries](numberofhistogramentries.md): Specifies the number of histogram entries (*bins*) for each channel.
- [minPixelValue](minpixelvalue.md): Specifies the minimum pixel value. Any pixel value less than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This minimum value is applied to each of the four channels separately.
- [maxPixelValue](maxpixelvalue.md): Specifies the maximum pixel value. Any pixel value greater than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This maximum value is applied to each of the four channels separately.

# histogramForAlpha (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Specifies whether the histogram for the alpha channel should be computed or not.

## Declaration

```objectivec
BOOL histogramForAlpha;
```

## See Also

### Fields

- [numberOfHistogramEntries](numberofhistogramentries.md): Specifies the number of histogram entries (*bins*) for each channel.
- [minPixelValue](minpixelvalue.md): Specifies the minimum pixel value. Any pixel value less than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This minimum value is applied to each of the four channels separately.
- [maxPixelValue](maxpixelvalue.md): Specifies the maximum pixel value. Any pixel value greater than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This maximum value is applied to each of the four channels separately.
