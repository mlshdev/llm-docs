> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/axismarkvalues/stride(by:roundlowerbound:roundupperbound:)

# stride(by:roundLowerBound:roundUpperBound:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates values with the given number step.

## Declaration

```swift
static func stride<P>(by stepSize: P, roundLowerBound: Bool? = nil, roundUpperBound: Bool? = nil) -> AxisMarkValues where P : BinaryFloatingPoint
```
