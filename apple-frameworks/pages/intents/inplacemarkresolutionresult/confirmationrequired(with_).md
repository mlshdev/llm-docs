> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplacemarkresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inplacemarkresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with placemarkToConfirm: CLPlacemark?) -> Self
```

## Parameters

- `placemarkToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified object but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithPlacemarkToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPlacemarkToConfirm:(CLPlacemark *) placemarkToConfirm;
```

## Parameters

- `placemarkToConfirm`: The object that resolves the request but must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to the specified object but you want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPlacemark:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithPlacemarksToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
