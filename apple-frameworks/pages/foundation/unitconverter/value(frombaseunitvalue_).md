> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/unitconverter/value(frombaseunitvalue:)](https://developer.apple.com/documentation/foundation/unitconverter/value(frombaseunitvalue:))

# value(fromBaseUnitValue:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

For a given unit, returns the specified value of the base unit in terms of that unit.

## Declaration

```swift
func value(fromBaseUnitValue baseUnitValue: Double) -> Double
```

## Parameters

- `baseUnitValue`: The value in terms of the base unit.

<a id="return-value"></a>

## Return Value

The value in terms of a given unit.

<a id="Discussion"></a>

## Discussion

This method takes a value in the base unit of a unit’s dimension and returns the result of converting it into that unit. For example, a converter for the pounds unit calling this method, passing `2.20462` to the `baseUnitValue` parameter, results in `1.0` (*2.20462 lbs = 1 kg*).

## See Also

### Converting Between Units

- [baseUnitValue(fromValue:)](baseunitvalue%28fromvalue_%29.md): For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.

# valueFromBaseUnitValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

For a given unit, returns the specified value of the base unit in terms of that unit.

## Declaration

```objectivec
- (double) valueFromBaseUnitValue:(double) baseUnitValue;
```

## Parameters

- `baseUnitValue`: The value in terms of the base unit.

<a id="return-value"></a>

## Return Value

The value in terms of a given unit.

<a id="Discussion"></a>

## Discussion

This method takes a value in the base unit of a unit’s dimension and returns the result of converting it into that unit. For example, a converter for the pounds unit calling this method, passing `2.20462` to the `baseUnitValue` parameter, results in `1.0` (*2.20462 lbs = 1 kg*).

## See Also

### Converting Between Units

- [baseUnitValueFromValue:](baseunitvalue%28fromvalue_%29.md): For a given unit, returns the specified value of that unit in terms of the base unit of its dimension.
