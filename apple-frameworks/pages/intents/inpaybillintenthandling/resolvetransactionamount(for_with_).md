> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvetransactionamount(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvetransactionamount(for:with:))

# resolveTransactionAmount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the amount to pay toward the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionAmount(for intent: INPayBillIntent, with completion: @escaping @Sendable (INPaymentAmountResolutionResult) -> Void)
```

```swift
optional func resolveTransactionAmount(for intent: INPayBillIntent) async -> INPaymentAmountResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAmount](../inpaymentamount.md) object containing the amount that the user intends to pay. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the precise amount of the bill. The [transactionAmount](../inpaybillintent/transactionamount.md) property of the intent contains information about how much the user wants to pay, which might be a precise amount or might be a relative amount such as the minimum due or the current balance. If a precise amount wasn’t specified, use the details provided by the payee to fill in the precise amount in the [INPaymentAmount](../inpaymentamount.md) object you create. For example, if the user asks to pay the minimum due and the payee indicates that the minimum due is $25, include both values in the resulting [INPaymentAmount](../inpaymentamount.md) object.

Return a successful resolution if you’re able to identify the payment amount. Use other resolutions to prompt the user for more information if you’re unable to determine the precise amount to apply to the bill.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveTransactionAmountForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the amount to pay toward the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionAmountForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INPaymentAmountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPaymentAmount](../inpaymentamount.md) object containing the amount that the user intends to pay. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the precise amount of the bill. The [transactionAmount](../inpaybillintent/transactionamount.md) property of the intent contains information about how much the user wants to pay, which might be a precise amount or might be a relative amount such as the minimum due or the current balance. If a precise amount wasn’t specified, use the details provided by the payee to fill in the precise amount in the [INPaymentAmount](../inpaymentamount.md) object you create. For example, if the user asks to pay the minimum due and the payee indicates that the minimum due is $25, include both values in the resulting [INPaymentAmount](../inpaymentamount.md) object.

Return a successful resolution if you’re able to identify the payment amount. Use other resolutions to prompt the user for more information if you’re unable to determine the precise amount to apply to the bill.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
