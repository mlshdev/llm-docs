> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmeasurement/adding(_:)](https://developer.apple.com/documentation/foundation/nsmeasurement/adding(_:))

# adding(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new measurement by adding the receiver to the specified measurement.

## Declaration

```swift
func adding(_ measurement: Measurement<Unit>) -> Measurement<Unit>
```

## Parameters

- `measurement`: The measurement to be added.

<a id="return-value"></a>

## Return Value

A new measurement with a value equal to the receiver’s value plus the value of the specified measurement converted into the unit of the receiver.

<a id="Discussion"></a>

## Discussion

This method raises an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) if the receiver cannot be converted to unit.

You can use the [canBeConverted(to:)](canbeconverted%28to_%29.md) method, passing the unit of the specified measurement, to determine whether a measurement can be converted to a particular unit before calling this method.

## See Also

### Operating on Measurements

- [subtracting(\_:)](subtracting%28__%29.md): Returns a new measurement by subtracting the specified measurement from the receiver.

# measurementByAddingMeasurement: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns a new measurement by adding the receiver to the specified measurement.

## Declaration

```objectivec
- (NSMeasurement<NSUnit *> *) measurementByAddingMeasurement:(NSMeasurement<NSUnit *> *) measurement;
```

## Parameters

- `measurement`: The measurement to be added.

<a id="return-value"></a>

## Return Value

A new measurement with a value equal to the receiver’s value plus the value of the specified measurement converted into the unit of the receiver.

<a id="Discussion"></a>

## Discussion

This method raises an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) if the receiver cannot be converted to unit.

You can use the [canBeConvertedToUnit:](canbeconverted%28to_%29.md) method, passing the unit of the specified measurement, to determine whether a measurement can be converted to a particular unit before calling this method.

## See Also

### Operating on Measurements

- [measurementBySubtractingMeasurement:](subtracting%28__%29.md): Returns a new measurement by subtracting the specified measurement from the receiver.
