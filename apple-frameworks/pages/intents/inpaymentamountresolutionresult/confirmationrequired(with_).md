> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamountresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inpaymentamountresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with paymentAmountToConfirm: INPaymentAmount?) -> Self
```

## Parameters

- `paymentAmountToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value. For example, you might use this method if the user’s initial request did not specify a payment amount and you provide a suggested amount.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithPaymentAmountToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPaymentAmountToConfirm:(INPaymentAmount *) paymentAmountToConfirm;
```

## Parameters

- `paymentAmountToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value. For example, you might use this method if the user’s initial request did not specify a payment amount and you provide a suggested amount.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPaymentAmount:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguationWithPaymentAmountsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
