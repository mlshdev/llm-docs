> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/indatecomponentsresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```swift
class func success(with resolvedDateComponents: DateComponents) -> Self
```

## Parameters

- `resolvedDateComponents`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a specific date.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedDateComponents: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified parameter.

## Declaration

```objectivec
+ (instancetype) successWithResolvedDateComponents:(NSDateComponents *) resolvedDateComponents;
```

## Parameters

- `resolvedDateComponents`: The object that resolves the requested parameter of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve a parameter successfully to a specific date.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithDateComponentsToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithDateComponentsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
