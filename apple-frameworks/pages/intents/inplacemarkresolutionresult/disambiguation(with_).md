> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplacemarkresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inplacemarkresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with placemarksToDisambiguate: [CLPlacemark]) -> Self
```

## Parameters

- `placemarksToDisambiguate`: An array of [CLPlacemark](../../corelocation/clplacemark.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there is more one value that might match the given parameter. The user is asked to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithPlacemarksToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithPlacemarksToDisambiguate:(NSArray<CLPlacemark *> *) placemarksToDisambiguate;
```

## Parameters

- `placemarksToDisambiguate`: An array of [CLPlacemark](../../corelocation/clplacemark.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INPlacemarkResolutionResult](../inplacemarkresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there is more one value that might match the given parameter. The user is asked to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPlacemark:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithPlacemarkToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
