> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/unitcurve/linear

# linear

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A linear curve.

## Declaration

```swift
static let linear: UnitCurve
```

<a id="discussion"></a>

## Discussion

As the linear curve is a straight line from (0, 0) to (1, 1), the output progress is always equal to the input progress, and the velocity is always equal to 1.0.
