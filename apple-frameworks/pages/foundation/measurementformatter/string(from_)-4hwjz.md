> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/string(from:)-4hwjz](https://developer.apple.com/documentation/foundation/measurementformatter/string(from:)-4hwjz)

# string(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a localized string representation of the provided unit of measure.

## Declaration

```swift
func string(from unit: Unit) -> String
```

## Parameters

- `unit`: The unit of measure to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string that represents the unit of measure. If the unit cannot be localized, the unit’s [symbol](../unit/symbol.md) value is used.

## See Also

### Converting Measurements

- [string(from:)](string%28from_%29-wt9y.md): Creates and returns a localized string representation of the provided measurement.
- [string(from:)](string%28from_%29-6rcb1.md): Creates and returns a localized string representation of the provided measurement.

# stringFromUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Creates and returns a localized string representation of the provided unit of measure.

## Declaration

```objectivec
- (NSString *) stringFromUnit:(NSUnit *) unit;
```

## Parameters

- `unit`: The unit of measure to be represented.

<a id="return-value"></a>

## Return Value

A user-readable string that represents the unit of measure. If the unit cannot be localized, the unit’s [symbol](../unit/symbol.md) value is used.

## See Also

### Converting Measurements

- [stringFromMeasurement:](string%28from_%29-wt9y.md): Creates and returns a localized string representation of the provided measurement.
