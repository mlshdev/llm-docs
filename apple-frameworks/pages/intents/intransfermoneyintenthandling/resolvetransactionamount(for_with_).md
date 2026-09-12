> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintenthandling/resolvetransactionamount(for:with:)](https://developer.apple.com/documentation/intents/intransfermoneyintenthandling/resolvetransactionamount(for:with:))

# resolveTransactionAmount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the amount that the user wants to transfer.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionAmount(for intent: INTransferMoneyIntent, with completion: @escaping @Sendable (INPaymentAmountResolutionResult) -> Void)
```

```swift
optional func resolveTransactionAmount(for intent: INTransferMoneyIntent) async -> INPaymentAmountResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAmount](../inpaymentamount.md) object containing the amount to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the amount of money the user wants to transfer. The [transactionAmount](../intransfermoneyintent/transactionamount.md) property of the intent contains information about how much the user wants to transfer. Return a successful resolution if you’re able to transfer the specified amount. If the amount exceeds the maximum or minimum amount allowed by your app, return an adjusted amount and ask for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccount(for:with:)](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveTransactionAmountForTransferMoney:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the amount that the user wants to transfer.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionAmountForTransferMoney:(INTransferMoneyIntent *) intent withCompletion:(void (^)(INPaymentAmountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAmount](../inpaymentamount.md) object containing the amount to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the amount of money the user wants to transfer. The [transactionAmount](../intransfermoneyintent/transactionamount.md) property of the intent contains information about how much the user wants to transfer. Return a successful resolution if you’re able to transfer the specified amount. If the amount exceeds the maximum or minimum amount allowed by your app, return an adjusted amount and ask for confirmation.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccountForTransferMoney:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccountForTransferMoney:withCompletion:](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionScheduledDateForTransferMoney:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
- [resolveTransactionNoteForTransferMoney:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
