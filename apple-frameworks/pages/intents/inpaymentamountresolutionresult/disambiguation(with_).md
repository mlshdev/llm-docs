> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamountresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inpaymentamountresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with paymentAmountsToDisambiguate: [INPaymentAmount]) -> Self
```

## Parameters

- `paymentAmountsToDisambiguate`: An array of [INPaymentAmount](../inpaymentamount.md) objects from which to select. Specify as few objects as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the user request uniquely and want the user to select from a limited set of possible options. For example, you might use this method if the user’s initial request did not specify a payment amount and you want to specify options to pay the minimum amount due or the total amount.

> **Note**

>  In watchOS, it is preferable to choose an appropriate amount and ask for confirmation rather than to ask the user to disambiguate from among several values.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.

# disambiguationWithPaymentAmountsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithPaymentAmountsToDisambiguate:(NSArray<INPaymentAmount *> *) paymentAmountsToDisambiguate;
```

## Parameters

- `paymentAmountsToDisambiguate`: An array of [INPaymentAmount](../inpaymentamount.md) objects from which to select. Specify as few objects as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the user request uniquely and want the user to select from a limited set of possible options. For example, you might use this method if the user’s initial request did not specify a payment amount and you want to specify options to pay the minimum amount due or the total amount.

> **Note**

>  In watchOS, it is preferable to choose an appropriate amount and ask for confirmation rather than to ask the user to disambiguate from among several values.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPaymentAmount:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithPaymentAmountToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
