> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitconverter/baseunitvalue(fromvalue:)](https://developer.apple.com/documentation/foundation/unitconverter/baseunitvalue(fromvalue:))

# baseUnitValue(fromValue:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.

## Declaration

```swift
func baseUnitValue(fromValue value: Double) -> Double
```

## Parameters

- `value`: The value in terms of a given unit.

<a id="return-value"></a>

## Return Value

The value in terms of the base unit.

<a id="Discussion"></a>

## Discussion

This method takes a value in a particular unit and returns the result of converting it into the base unit of that unit’s dimension. For example, a converter for the miles unit calling this method, passing `1.0` to the `value` parameter, results in `1609.34` (*1 mi = 1609.34 m*).

## See Also

### Converting Between Units

- [value(fromBaseUnitValue:)](value%28frombaseunitvalue_%29.md): For a given unit, returns the specified value of the base unit in terms of that unit.

# baseUnitValueFromValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.

## Declaration

```objectivec
- (double) baseUnitValueFromValue:(double) value;
```

## Parameters

- `value`: The value in terms of a given unit.

<a id="return-value"></a>

## Return Value

The value in terms of the base unit.

<a id="Discussion"></a>

## Discussion

This method takes a value in a particular unit and returns the result of converting it into the base unit of that unit’s dimension. For example, a converter for the miles unit calling this method, passing `1.0` to the `value` parameter, results in `1609.34` (*1 mi = 1609.34 m*).

## See Also

### Converting Between Units

- [valueFromBaseUnitValue:](value%28frombaseunitvalue_%29.md): For a given unit, returns the specified value of the base unit in terms of that unit.
