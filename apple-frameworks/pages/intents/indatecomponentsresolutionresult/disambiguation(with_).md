> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/indatecomponentsresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with dateComponentsToDisambiguate: [DateComponents]) -> Self
```

## Parameters

- `dateComponentsToDisambiguate`: An array of dates from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the object uniquely and need the user to select from a limited set of alternative dates.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithDateComponentsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithDateComponentsToDisambiguate:(NSArray<NSDateComponents *> *) dateComponentsToDisambiguate;
```

## Parameters

- `dateComponentsToDisambiguate`: An array of dates from which to select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the object uniquely and need the user to select from a limited set of alternative dates.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedDateComponents:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithDateComponentsToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
