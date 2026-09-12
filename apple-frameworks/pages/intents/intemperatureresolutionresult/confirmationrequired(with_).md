> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intemperatureresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/intemperatureresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with temperatureToConfirm: Measurement<UnitTemperature>?) -> Self
```

## Parameters

- `temperatureToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to an equivalent value and want the user to confirm the replacement value before proceeding.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithTemperatureToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithTemperatureToConfirm:(NSMeasurement<NSUnitTemperature *> *) temperatureToConfirm;
```

## Parameters

- `temperatureToConfirm`: The value that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INTemperatureResolutionResult](../intemperatureresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to an equivalent value and want the user to confirm the replacement value before proceeding.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedTemperature:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithTemperaturesToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
