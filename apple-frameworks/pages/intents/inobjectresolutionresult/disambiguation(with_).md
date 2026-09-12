> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inobjectresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inobjectresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with objectsToDisambiguate: [INObject]) -> Self
```

## Parameters

- `objectsToDisambiguate`: An array of [INObject](../inobject.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INObjectResolutionResult](../inobjectresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri prompts the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithObjectsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithObjectsToDisambiguate:(NSArray<INObject *> *) objectsToDisambiguate;
```

## Parameters

- `objectsToDisambiguate`: An array of [INObject](../inobject.md) objects for the user to choose from.

<a id="return-value"></a>

## Return Value

A new [INObjectResolutionResult](../inobjectresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when there’s more one value that might match the given parameter. Siri prompts the user to select from among the objects you provide.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedObject:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithObjectToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
