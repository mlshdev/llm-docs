> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartscrolltargetbehavior](https://developer.apple.com/documentation/charts/chartscrolltargetbehavior)

# ChartScrollTargetBehavior

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that configures the scroll behavior of charts.

## Declaration

```swift
protocol ChartScrollTargetBehavior : ScrollTargetBehavior
```

## Topics

### Supporting types

- [MajorValueAlignment](majorvaluealignment.md): A type that defines how the valigned aligned chart scroll target behavior aligns to major values on swipe.
- [ValueAlignedLimitBehavior](valuealignedlimitbehavior.md): A type that defines the amount of marks that can be scrolled at a time.
- [ValueAlignedChartScrollTargetBehavior](valuealignedchartscrolltargetbehavior.md): A scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.

### Instance Methods

- [updateTarget(\_:context:)](chartscrolltargetbehavior/updatetarget%28__context_%29.md)

### Type Methods

- [valueAligned(matching:majorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28matching_majoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
- [valueAligned(unit:majorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28unit_majoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
- [valueAligned(xMatching:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28xmatching_ymatching_xmajoralignment_ymajoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
- [valueAligned(xMatching:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28xmatching_yunit_xmajoralignment_ymajoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
- [valueAligned(xUnit:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28xunit_ymatching_xmajoralignment_ymajoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
- [valueAligned(xUnit:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)](chartscrolltargetbehavior/valuealigned%28xunit_yunit_xmajoralignment_ymajoralignment_limitbehavior_%29.md): Creates a scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.

### Default Implementations

- [ScrollTargetBehavior Implementations](chartscrolltargetbehavior/scrolltargetbehavior-implementations.md)

## Relationships

### Inherits From

- [ScrollTargetBehavior](https://developer.apple.com/documentation/swiftui/scrolltargetbehavior)

### Conforming Types

- [ValueAlignedChartScrollTargetBehavior](valuealignedchartscrolltargetbehavior.md)

## See Also

### Scrolling

- [ChartScrollTargetBehaviorContext](chartscrolltargetbehaviorcontext.md): Contextual information that you can use to determine how to best adjust how charts scroll.
