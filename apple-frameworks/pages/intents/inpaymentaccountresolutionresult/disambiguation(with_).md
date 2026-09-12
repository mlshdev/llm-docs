> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccountresolutionresult/disambiguation(with:)](https://developer.apple.com/documentation/intents/inpaymentaccountresolutionresult/disambiguation(with:))

# disambiguation(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```swift
class func disambiguation(with paymentAccountsToDisambiguate: [INPaymentAccount]) -> Self
```

## Parameters

- `paymentAccountsToDisambiguate`: An array of [INPaymentAccount](../inpaymentaccount.md) objects from which to select. Specify as few objects as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the user account uniquely and need the user to select from a limited set of possible options.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.

# disambiguationWithPaymentAccountsToDisambiguate: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires the user to select from among the specified objects.

## Declaration

```objectivec
+ (instancetype) disambiguationWithPaymentAccountsToDisambiguate:(NSArray<INPaymentAccount *> *) paymentAccountsToDisambiguate;
```

## Parameters

- `paymentAccountsToDisambiguate`: An array of [INPaymentAccount](../inpaymentaccount.md) objects from which to select. Specify as few objects as possible, and preferably no more than five.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you cannot resolve the user account uniquely and need the user to select from a limited set of possible options.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPaymentAccount:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithPaymentAccountToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
