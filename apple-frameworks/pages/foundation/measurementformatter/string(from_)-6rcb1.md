> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/string(from:)-6rcb1](https://developer.apple.com/documentation/foundation/measurementformatter/string(from:)-6rcb1)

# string(from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a localized string representation of the provided measurement.

## Declaration

```swift
func string<UnitType>(from measurement: Measurement<UnitType>) -> String where UnitType : Unit
```

## Parameters

- `measurement`: The measurement to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string that represents the measurement.

## See Also

### Converting Measurements

- [string(from:)](string%28from_%29-wt9y.md): Creates and returns a localized string representation of the provided measurement.
- [string(from:)](string%28from_%29-4hwjz.md): Creates and returns a localized string representation of the provided unit of measure.
