> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolveduedate(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolveduedate(for:with:))

# resolveDueDate(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the due date of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveDueDate(for intent: INPayBillIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveDueDate(for intent: INPayBillIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range that identifies when the bill is due. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the due date of the bill. The due date is usually provided by the bill payee and reflects the date after which the institution may apply late fees. If the intent doesn’t contain the due date, retrieve the due date from your own internal records and return it as part of your successful resolution. Providing the due date is always encouraged because it helps the user determine the date on which to schedule payment.

If the payee didn’t provide you with a due date, you can return a resolution indicating it the value isn’t required. However, you might want to verify that the user supplied a date on which to schedule the payment and that the provided date isn’t too far in the future.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveDueDateForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the due date of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveDueDateForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range that identifies when the bill is due. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the due date of the bill. The due date is usually provided by the bill payee and reflects the date after which the institution may apply late fees. If the intent doesn’t contain the due date, retrieve the due date from your own internal records and return it as part of your successful resolution. Providing the due date is always encouraged because it helps the user determine the date on which to schedule payment.

If the payee didn’t provide you with a due date, you can return a resolution indicating it the value isn’t required. However, you might want to verify that the user supplied a date on which to schedule the payment and that the provided date isn’t too far in the future.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
