> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintenthandling/resolvetoaccount(for:with:)](https://developer.apple.com/documentation/intents/intransfermoneyintenthandling/resolvetoaccount(for:with:))

# resolveToAccount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the user account that’s the destination of the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveToAccount(for intent: INTransferMoneyIntent, with completion: @escaping @Sendable (INPaymentAccountResolutionResult) -> Void)
```

```swift
optional func resolveToAccount(for intent: INTransferMoneyIntent) async -> INPaymentAccountResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAccount](../inpaymentaccount.md) object that identifies the user’s account. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user account that’s the destination for the funds. Use this method to verify that the specified account exists and is able to receive the transferred funds. The [toAccount](../intransfermoneyintent/toaccount.md) property of the intent object contains any information provided by the user about which account to use.

Return a successful resolution if you’re able to verify the existence of the account. If the user doesn’t have any accounts to facilitate a transfer, return a successful resolution or indicate that the account isn’t required and then use the [confirm(intent:completion:)](confirm%28intent_completion_%29.md) method to report an appropriate error. If the user has multiple accounts that match the provided information, either pick one and ask for confirmation or use the [disambiguation(with:)](../inpaymentamountresolutionresult/disambiguation%28with_%29.md) method to create a resolution that prompts the user to select an account.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveToAccountForTransferMoney:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the user account that’s the destination of the funds.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveToAccountForTransferMoney:(INTransferMoneyIntent *) intent withCompletion:(void (^)(INPaymentAccountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAccount](../inpaymentaccount.md) object that identifies the user’s account. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user account that’s the destination for the funds. Use this method to verify that the specified account exists and is able to receive the transferred funds. The [toAccount](../intransfermoneyintent/toaccount.md) property of the intent object contains any information provided by the user about which account to use.

Return a successful resolution if you’re able to verify the existence of the account. If the user doesn’t have any accounts to facilitate a transfer, return a successful resolution or indicate that the account isn’t required and then use the [confirmTransferMoney:completion:](confirm%28intent_completion_%29.md) method to report an appropriate error. If the user has multiple accounts that match the provided information, either pick one and ask for confirmation or use the [disambiguationWithPaymentAmountsToDisambiguate:](../inpaymentamountresolutionresult/disambiguation%28with_%29.md) method to create a resolution that prompts the user to select an account.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccountForTransferMoney:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveTransactionAmountForTransferMoney:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDateForTransferMoney:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNoteForTransferMoney:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
