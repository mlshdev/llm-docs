> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/physicalmetricsconverter/convert(_:to:)](https://developer.apple.com/documentation/swiftui/physicalmetricsconverter/convert(_:to:))

# convert(\_:to:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a point’s coordinates to physical length measurements in the specified unit.

## Declaration

```swift
@MainActor @preconcurrency func convert(_ point: CGPoint, to unit: UnitLength) -> CGPoint
```

<a id="return-value"></a>

## Return Value

A point value with physical length measurements, in the given unit

<a id="discussion"></a>

## Discussion

The point is assumed to be in the coordinate system of the scene that this converter is associated with. If the scene is scaled, the physical measurement will take this scale into account.

## See Also

### Converting a unit length

- [convert(\_:from:)](convert%28__from_%29.md): Converts a length in the specified unit to a length in points suitable for use in the environment this converter is associated with.
