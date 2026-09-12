> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/indatecomponentsresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with dateComponentsToConfirm: DateComponents?) -> Self
```

## Parameters

- `dateComponentsToConfirm`: The date for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single object but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified object is what the user intended. For example, when booking a restaurant reservation, you might ask the user to confirm a date that is close, but not exactly the same, to the one that was requested.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithDateComponentsToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithDateComponentsToConfirm:(NSDateComponents *) dateComponentsToConfirm;
```

## Parameters

- `dateComponentsToConfirm`: The date for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INDateComponentsResolutionResult](../indatecomponentsresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single object but you want the user to confirm that value before proceeding. You might ask for confirmation when there is some doubt that the specified object is what the user intended. For example, when booking a restaurant reservation, you might ask the user to confirm a date that is close, but not exactly the same, to the one that was requested.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedDateComponents:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [disambiguationWithDateComponentsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
