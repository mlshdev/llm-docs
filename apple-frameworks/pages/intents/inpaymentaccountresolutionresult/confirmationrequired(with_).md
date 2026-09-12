> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccountresolutionresult/confirmationrequired(with:)](https://developer.apple.com/documentation/intents/inpaymentaccountresolutionresult/confirmationrequired(with:))

# confirmationRequired(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```swift
class func confirmationRequired(with paymentAccountToConfirm: INPaymentAccount?) -> Self
```

## Parameters

- `paymentAccountToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [success(with:)](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# confirmationRequiredWithPaymentAccountToConfirm: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution requires that the user confirm the value before proceeding.

## Declaration

```objectivec
+ (instancetype) confirmationRequiredWithPaymentAccountToConfirm:(INPaymentAccount *) paymentAccountToConfirm;
```

## Parameters

- `paymentAccountToConfirm`: The value that resolves the request but that must be confirmed by the user.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method when you can resolve the parameter to a single value but want the user to confirm that value.

## See Also

### Creating a Resolution Result Object

- [successWithResolvedPaymentAccount:](success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [disambiguationWithPaymentAccountsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
