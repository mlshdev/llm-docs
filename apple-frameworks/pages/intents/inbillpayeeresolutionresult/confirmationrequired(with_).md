> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayeeresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inbillpayeeresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class func confirmationRequired(with billPayeeToConfirm: INBillPayee?) -> Self
```

## Parameters

- `billPayeeToConfirm`: The value that resolves the request, for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguation(with:)](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithBillPayeeToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Creates an object whose resolution requires that the user must confirm the value before proceeding.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithBillPayeeToConfirm:(INBillPayee *) billPayeeToConfirm;
```

## Parameters

- `billPayeeToConfirm`: The value that resolves the request, for the user to confirm.

<a id="return-value"></a>

## Return Value

A new [INBillPayeeResolutionResult](../inbillpayeeresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedBillPayee:](success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguationWithBillPayeesToDisambiguate:](disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.
