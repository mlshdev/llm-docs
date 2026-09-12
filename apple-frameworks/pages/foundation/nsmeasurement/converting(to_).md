> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmeasurement/converting(to:)](https://developer.apple.com/documentation/foundation/nsmeasurement/converting(to:))

# converting(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a measurement created by converting the receiver to the specified unit.

## Declaration

```swift
func converting(to unit: Unit) -> Measurement<Unit>
```

## Parameters

- `unit`: The unit to convert the measurement into.

<a id="return-value"></a>

## Return Value

A new measurement with a value calculated by converting into the new unit.

<a id="Discussion"></a>

## Discussion

This method raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if the receiver cannot be converted to unit.

## See Also

### Converting to Other Units

- [canBeConverted(to:)](canbeconverted%28to_%29.md): Indicates whether the measurement can be converted to the given unit.

# measurementByConvertingToUnit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a measurement created by converting the receiver to the specified unit.

## Declaration

```objectivec
- (NSMeasurement *) measurementByConvertingToUnit:(NSUnit *) unit;
```

## Parameters

- `unit`: The unit to convert the measurement into.

<a id="return-value"></a>

## Return Value

A new measurement with a value calculated by converting into the new unit.

<a id="Discussion"></a>

## Discussion

This method raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if the receiver cannot be converted to unit.

## See Also

### Converting to Other Units

- [canBeConvertedToUnit:](canbeconverted%28to_%29.md): Indicates whether the measurement can be converted to the given unit.
