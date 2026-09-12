> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemperatureresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/intemperatureresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedTemperature: Measurement<UnitTemperature>) -> Self
```

## Parameters

- `resolvedTemperature`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the temperature value and are able to apply it to the vehicle settings.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedTemperature: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedTemperature:(NSMeasurement<NSUnitTemperature *> *) resolvedTemperature;
```

## Parameters

- `resolvedTemperature`: The value that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you recognize the temperature value and are able to apply it to the vehicle settings.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithTemperatureToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithTemperaturesToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
