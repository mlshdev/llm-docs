> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeedresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inspeedresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedSpeed: Measurement<UnitSpeed>) -> Self
```

## Parameters

- `resolvedSpeed`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSpeedResolutionResult](../inspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedSpeed: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedSpeed:(NSMeasurement<NSUnitSpeed *> *) resolvedSpeed;
```

## Parameters

- `resolvedSpeed`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INSpeedResolutionResult](../inspeedresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you can resolve a parameter successfully to a value in your own internal data structures.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithSpeedToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithSpeedToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
