> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssegmentedcontrol/distribution](https://developer.apple.com/documentation/appkit/nssegmentedcontrol/distribution)

# NSSegmentedControl.Distribution (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.13+

## Declaration

```swift
enum Distribution
```

## Topics

### Distribution Options

- [NSSegmentedControl.Distribution.fit](distribution/fit.md): Dynamically sized segments will be sized to fit their contents, any remaining space will be left blank. This style is equivalent to the way segments were distributed on older systems.
- [NSSegmentedControl.Distribution.fill](distribution/fill.md): Dynamically sized segments will be sized to fill the available space, with extra space being distributed equally among them. Default value.
- [NSSegmentedControl.Distribution.fillEqually](distribution/fillequally.md): Dynamically sized segments will be sized to fill the available space, and kept the same size as each other.
- [NSSegmentedControl.Distribution.fillProportionally](distribution/fillproportionally.md): Dynamically sized segments will be sized to fill the available space, and kept proportional to their fitting size.

### Initializers

- [init(rawValue:)](distribution/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adjusting the segment spacing

- [setWidth(\_:forSegment:)](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [width(forSegment:)](width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compress(withPrioritizedCompressionOptions:)](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSize(withPrioritizedCompressionOptions:)](minimumsize%28withprioritizedcompressionoptions_%29.md)

# NSSegmentDistribution (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.13+

## Declaration

```objectivec
enum NSSegmentDistribution : NSInteger;
```

## Topics

### Distribution Options

- [NSSegmentDistributionFit](distribution/fit.md): Dynamically sized segments will be sized to fit their contents, any remaining space will be left blank. This style is equivalent to the way segments were distributed on older systems.
- [NSSegmentDistributionFill](distribution/fill.md): Dynamically sized segments will be sized to fill the available space, with extra space being distributed equally among them. Default value.
- [NSSegmentDistributionFillEqually](distribution/fillequally.md): Dynamically sized segments will be sized to fill the available space, and kept the same size as each other.
- [NSSegmentDistributionFillProportionally](distribution/fillproportionally.md): Dynamically sized segments will be sized to fill the available space, and kept proportional to their fitting size.

## See Also

### Adjusting the segment spacing

- [setWidth:forSegment:](setwidth%28__forsegment_%29.md): Sets the width of the specified segment.
- [widthForSegment:](width%28forsegment_%29.md): Returns the width of the specified segment.
- [segmentDistribution](segmentdistribution.md)
- [activeCompressionOptions](activecompressionoptions.md)
- [compressWithPrioritizedCompressionOptions:](compress%28withprioritizedcompressionoptions_%29.md)
- [minimumSizeWithPrioritizedCompressionOptions:](minimumsize%28withprioritizedcompressionoptions_%29.md)
