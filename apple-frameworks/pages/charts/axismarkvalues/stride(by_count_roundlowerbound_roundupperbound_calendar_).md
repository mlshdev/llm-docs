> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/axismarkvalues/stride(by:count:roundlowerbound:roundupperbound:calendar:)

# stride(by:count:roundLowerBound:roundUpperBound:calendar:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates values with the given calendar unit.

## Declaration

```swift
static func stride(by component: Calendar.Component, count: Int = 1, roundLowerBound: Bool? = nil, roundUpperBound: Bool? = nil, calendar: Calendar? = nil) -> AxisMarkValues
```

## Mentioned In

- [Customizing axes in Swift Charts](../customizing-axes-in-swift-charts.md)
