> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemperatureresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/intemperatureresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with temperaturesToDisambiguate: [Measurement<UnitTemperature>]) -> Self
```

## Parameters

- `temperaturesToDisambiguate`: An array of [NSMeasurement](../../foundation/nsmeasurement.md) objects for the user to choose from. Each measurement object reflects a value of type [UnitTemperature](../../foundation/unittemperature.md).

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there is more one value that might match the given parameter. Siri asks the user to select from among the measurement values that you specify.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithTemperaturesToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithTemperaturesToDisambiguate:(NSArray<NSMeasurement<NSUnitTemperature *> *> *) temperaturesToDisambiguate;
```

## Parameters

- `temperaturesToDisambiguate`: An array of [NSMeasurement](../../foundation/nsmeasurement.md) objects for the user to choose from. Each measurement object reflects a value of type [NSUnitTemperature](../../foundation/unittemperature.md).

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there is more one value that might match the given parameter. Siri asks the user to select from among the measurement values that you specify.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTemperature:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithTemperatureToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
