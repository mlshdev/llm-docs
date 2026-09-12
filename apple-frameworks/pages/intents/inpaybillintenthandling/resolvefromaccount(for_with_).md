> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvefromaccount(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvefromaccount(for:with:))

# resolveFromAccount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the user account that provides the funds for paying the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveFromAccount(for intent: INPayBillIntent, with completion: @escaping @Sendable (INPaymentAccountResolutionResult) -> Void)
```

```swift
optional func resolveFromAccount(for intent: INPayBillIntent) async -> INPaymentAccountResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAccount](../inpaymentaccount.md) object that contains the user’s funds. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Before paying bills with Siri, the user must set up a payment account in your app to provide the funds for those bills. Implement this method to identify the user account to use. The [fromAccount](../inpaybillintent/fromaccount.md) property of the intent object contains any information provided by the user about which account to use. Verify only that the account exists and the app can use it to pay the bill. Don’t try to verify that the account has sufficient funds to pay the bill here; verify that the account has sufficient funds in the [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method.

Return a successful resolution if you’re able to verify the existence of the account. Similarly, if the user has only one payment account, return a successful resolution with that account. If the user doesn’t have any accounts to facilitate payment, return a successful resolution or indicate that the account isn’t required and then use the [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method to report an appropriate error. If the user has multiple accounts, either pick one and ask for confirmation or use the [disambiguation(with:)](../inpaymentaccountresolutionresult/disambiguation%28with_%29.md) method to create a resolution that prompts the user to select an account.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveFromAccountForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the user account that provides the funds for paying the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveFromAccountForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INPaymentAccountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAccount](../inpaymentaccount.md) object that contains the user’s funds. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Before paying bills with Siri, the user must set up a payment account in your app to provide the funds for those bills. Implement this method to identify the user account to use. The [fromAccount](../inpaybillintent/fromaccount.md) property of the intent object contains any information provided by the user about which account to use. Verify only that the account exists and the app can use it to pay the bill. Don’t try to verify that the account has sufficient funds to pay the bill here; verify that the account has sufficient funds in the [confirmPayBill:completion:](confirm%28intent_completion_%29.md) method.

Return a successful resolution if you’re able to verify the existence of the account. Similarly, if the user has only one payment account, return a successful resolution with that account. If the user doesn’t have any accounts to facilitate payment, return a successful resolution or indicate that the account isn’t required and then use the [confirmPayBill:completion:](confirm%28intent_completion_%29.md) method to report an appropriate error. If the user has multiple accounts, either pick one and ask for confirmation or use the [disambiguationWithPaymentAccountsToDisambiguate:](../inpaymentaccountresolutionresult/disambiguation%28with_%29.md) method to create a resolution that prompts the user to select an account.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
