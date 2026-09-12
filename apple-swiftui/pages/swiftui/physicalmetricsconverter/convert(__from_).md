> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/physicalmetricsconverter/convert(_:from:)](https://developer.apple.com/documentation/swiftui/physicalmetricsconverter/convert(_:from:))

# convert(\_:from:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Converts a length in the specified unit to a length in points suitable for use in the environment this converter is associated with.

## Declaration

```swift
@MainActor @preconcurrency func convert(_ lengthValue: CGFloat, from unit: UnitLength) -> CGFloat
```

<a id="return-value"></a>

## Return Value

A value in points. Use this value only in the scene this converter was associated with.

## See Also

### Converting a unit length

- [convert(\_:to:)](convert%28__to_%29.md): Converts a point’s coordinates to physical length measurements in the specified unit.
