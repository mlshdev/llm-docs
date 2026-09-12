> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/width(forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/width(forsegment:))

# width(forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the width of the specified segment.

## Declaration

```swift
func width(forSegment segment: Int) -> CGFloat
```

## Parameters

- `segment`: The index of the segment whose width you want to get. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The width of the segment, measured in points, or 0 if the segment is sized to fit the available space automatically.

## See Also

### Adjusting the segment spacing

- [setWidth(\_:forSegment:)](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [NSSegmentedControl.Distribution](distribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compress(withPrioritizedCompressionOptions:)](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md)

# widthForSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the width of the specified segment.

## Declaration

```objectivec
- (CGFloat) widthForSegment:(NSInteger) segment;
```

## Parameters

- `segment`: The index of the segment whose width you want to get. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

<a id="return-value"></a>

## Return Value

The width of the segment, measured in points, or 0 if the segment is sized to fit the available space automatically.

## See Also

### Adjusting the segment spacing

- [setWidth:forSegment:](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [NSSegmentDistribution](distribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compressWithPrioritizedCompressionOptions:](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md)
