> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/majorvaluealignment](https://developer.apple.com/documentation/charts/majorvaluealignment)

# MajorValueAlignment

**Framework:** Swift Charts  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that defines how the valigned aligned chart scroll target behavior aligns to major values on swipe.

## Declaration

```swift
struct MajorValueAlignment<Value> where Value : Plottable
```

## Topics

### Type Properties

- [page](majorvaluealignment/page.md): Automatically set the major aligment unit to be the size of the visible domain which is equivalent to a page.

### Type Methods

- [matching(\_:)](majorvaluealignment/matching%28__%29.md): Align to calendar components.
- [unit(\_:)](majorvaluealignment/unit%28__%29.md): Align to units.

## See Also

### Supporting types

- [ValueAlignedLimitBehavior](valuealignedlimitbehavior.md): A type that defines the amount of marks that can be scrolled at a time.
- [ValueAlignedChartScrollTargetBehavior](valuealignedchartscrolltargetbehavior.md): A scroll target behavior that aligns to values spaced at regular intervals along the scrollable axes.
