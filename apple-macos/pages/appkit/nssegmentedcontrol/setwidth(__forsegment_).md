> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/setwidth(_:forsegment:)](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/setwidth(_:forsegment:))

# setWidth(\_:forSegment:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the width of the specified segment.

## Declaration

```swift
func setWidth(_ width: CGFloat, forSegment segment: Int)
```

## Parameters

- `width`: The width of the segment, measured in points. Specify the value `0` if you want the segment to be sized to fit the available space automatically.
- `segment`: The index of the segment whose width you want to set. This method raises an exception ([rangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Adjusting the segment spacing

- [width(forSegment:)](width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [NSSegmentedControl.Distribution](distribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compress(withPrioritizedCompressionOptions:)](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md)

# setWidth:forSegment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the width of the specified segment.

## Declaration

```objectivec
- (void) setWidth:(CGFloat) width forSegment:(NSInteger) segment;
```

## Parameters

- `width`: The width of the segment, measured in points. Specify the value `0` if you want the segment to be sized to fit the available space automatically.
- `segment`: The index of the segment whose width you want to set. This method raises an exception ([NSRangeException](https://developer.apple.com/documentation/foundation/nsexceptionname/rangeexception)) if the index is out of bounds.

## See Also

### Adjusting the segment spacing

- [widthForSegment:](width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [NSSegmentDistribution](distribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compressWithPrioritizedCompressionOptions:](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md)
