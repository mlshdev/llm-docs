> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/+(_:_:)-9lejn](https://developer.apple.com/documentation/foundation/measurement/+(_:_:)-9lejn)

# +(\_:\_:)

**Framework:** Foundation  
**Kind:** Operator  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Add two measurements.

## Declaration

```swift
static func + (lhs: Measurement<UnitType>, rhs: Measurement<UnitType>) -> Measurement<UnitType>
```

## Parameters

- `lhs`: A measurement to add.
- `rhs`: Another measurement to add.

<a id="return-value"></a>

## Return Value

The result of adding the two measurements.

## See Also

### Operating on a Measurement

- [\*(\_:\_:)](_%28____%29-1d26c.md): Conforms when `UnitType` inherits `Unit`. Multiply a scalar value by a measurement.
- [\*(\_:\_:)](_%28____%29-5tv8a.md): Conforms when `UnitType` inherits `Unit`. Multiply a measurement by a scalar value.
- [+(\_:\_:)](+%28____%29-4fsbl.md): Conforms when `UnitType` inherits `Dimension`. Adds two measurements of the same dimension.
- [-(\_:\_:)](-%28____%29-2nnoy.md): Conforms when `UnitType` inherits `Unit`. Subtract two measurements of the same Unit.
- [-(\_:\_:)](-%28____%29-1a47h.md): Conforms when `UnitType` inherits `Dimension`. Subtract two measurements of the same Dimension.
- [/(\_:\_:)](_%28____%29-98s40.md): Conforms when `UnitType` inherits `Unit`. Divide a scalar value by a measurement.
- [/(\_:\_:)](_%28____%29-71kwk.md): Conforms when `UnitType` inherits `Unit`. Divide a measurement by a scalar value.
