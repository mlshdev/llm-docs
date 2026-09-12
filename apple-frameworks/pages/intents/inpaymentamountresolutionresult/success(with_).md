> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentamountresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inpaymentamountresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```swift
class func success(with resolvedPaymentAmount: INPaymentAmount) -> Self
```

## Parameters

- `resolvedPaymentAmount`: The value that resolves the requested value of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the payment amount for a bill. For payment amounts representing the account’s current balance, amount due, or minimum amount due, a successful resolution signifies that you know the amount of money to transfer from the user’s account to the bill payee.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedPaymentAmount: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPaymentAmount:(INPaymentAmount *) resolvedPaymentAmount;
```

## Parameters

- `resolvedPaymentAmount`: The value that resolves the requested value of the intent. This value may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPaymentAmountResolutionResult](../inpaymentamountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the payment amount for a bill. For payment amounts representing the account’s current balance, amount due, or minimum amount due, a successful resolution signifies that you know the amount of money to transfer from the user’s account to the bill payee.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithPaymentAmountToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguationWithPaymentAmountsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
