> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/converted(to:)](https://developer.apple.com/documentation/foundation/measurement/converted(to:))

# converted(to:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new measurement created by converting to the specified unit.

## Declaration

```swift
func converted(to otherUnit: UnitType) -> Measurement<UnitType>
```

## Parameters

- `otherUnit`: A unit of the same `Dimension`.

<a id="return-value"></a>

## Return Value

A converted measurement.

## See Also

### Converting to Other Units

- [convert(to:)](convert%28to_%29.md): Conforms when `UnitType` inherits `Dimension`. Converts the measurement to the specified unit.
