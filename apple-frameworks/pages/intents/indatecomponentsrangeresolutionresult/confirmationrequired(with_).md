> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrangeresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/indatecomponentsrangeresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with dateComponentsRangeToConfirm: INDateComponentsRange?) -> Self
```

## Parameters

- `dateComponentsRangeToConfirm`: The range of dates for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsRangeResolutionResult](../indatecomponentsrangeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single object but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified object is what the user intended.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithDateComponentsRangeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithDateComponentsRangeToConfirm:(INDateComponentsRange *) dateComponentsRangeToConfirm;
```

## Parameters

- `dateComponentsRangeToConfirm`: The range of dates for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsRangeResolutionResult](../indatecomponentsrangeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single object but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified object is what the user intended.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedDateComponentsRange:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithDateComponentsRangesToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
