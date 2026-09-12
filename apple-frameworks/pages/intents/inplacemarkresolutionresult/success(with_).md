> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplacemarkresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inplacemarkresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedPlacemark: CLPlacemark) -> Self
```

## Parameters

- `resolvedPlacemark`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the placemark successfully and use it to handle the intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedPlacemark: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPlacemark:(CLPlacemark *) resolvedPlacemark;
```

## Parameters

- `resolvedPlacemark`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the placemark successfully and use it to handle the intent.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithPlacemarkToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithPlacemarksToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
