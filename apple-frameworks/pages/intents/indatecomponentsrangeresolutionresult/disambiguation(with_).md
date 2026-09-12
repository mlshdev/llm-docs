> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrangeresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/indatecomponentsrangeresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with dateComponentsRangesToDisambiguate: [INDateComponentsRange]) -> Self
```

## Parameters

- `dateComponentsRangesToDisambiguate`: An array of date ranges from which the user should select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsRangeResolutionResult](../indatecomponentsrangeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the object uniquely and need the user to select from a limited set of possible values.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

# disambiguationWithDateComponentsRangesToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithDateComponentsRangesToDisambiguate:(NSArray<INDateComponentsRange *> *) dateComponentsRangesToDisambiguate;
```

## Parameters

- `dateComponentsRangesToDisambiguate`: An array of date ranges from which the user should select. Specify as few items as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsRangeResolutionResult](../indatecomponentsrangeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the object uniquely and need the user to select from a limited set of possible values.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedDateComponentsRange:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithDateComponentsRangeToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
