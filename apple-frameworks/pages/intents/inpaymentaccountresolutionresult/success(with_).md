> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentaccountresolutionresult/success(with:)](https://developer.apple.com/documentation/intents/inpaymentaccountresolutionresult/success(with:))

# success(with:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```swift
class func success(with resolvedPaymentAccount: INPaymentAccount) -> Self
```

## Parameters

- `resolvedPaymentAccount`: The value that resolves the requested value of the intent. The account you specify may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the parameter successfully to a recognizable user account in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequired(with:)](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguation(with:)](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

# successWithResolvedPaymentAccount: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Creates an object whose resolution involves the successful matching of the specified value.

## Declaration

```objectivec
+ (instancetype) successWithResolvedPaymentAccount:(INPaymentAccount *) resolvedPaymentAccount;
```

## Parameters

- `resolvedPaymentAccount`: The value that resolves the requested value of the intent. The account you specify may be different than the one specified in the intent object.

<a id="return-value"></a>

## Return Value

A new [INPaymentAccountResolutionResult](../inpaymentaccountresolutionresult.md) object.

<a id="Discussion"></a>

## Discussion

Use this method to create a result object when you are able to resolve the parameter successfully to a recognizable user account in your app.

## See Also

### Creating a Resolution Result Object

- [confirmationRequiredWithPaymentAccountToConfirm:](confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user confirm the value before proceeding.
- [disambiguationWithPaymentAccountsToDisambiguate:](disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.
