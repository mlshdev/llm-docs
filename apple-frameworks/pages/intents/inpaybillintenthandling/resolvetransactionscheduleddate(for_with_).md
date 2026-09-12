> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvetransactionscheduleddate(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvetransactionscheduleddate(for:with:))

# resolveTransactionScheduledDate(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the date for the payment to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionScheduledDate(for intent: INPayBillIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveTransactionScheduledDate(for intent: INPayBillIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range of the payment’s schedule. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date on which to transfer money from the user’s account to the payee. The user can optionally specify a date on which to schedule payment. If the user doesn’t specify a date, assume that the user wants to pay the bill immediately. Don’t check to see if the scheduled date occurs before the bill’s due date. Instead, use this method only to identify the date on which you can perform the transaction.

Return a successful resolution if you’re able to schedule the transaction on the date requested by the user, or if you’re able to schedule the transaction immediately. If the user-specified date falls on a banking holiday or on a date when you’d be unable to schedule the transaction, suggest a different date and ask the user for confirmation or use a disambiguation resolution to ask the user to select from two or three alternative dates.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveTransactionScheduledDateForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the date for the payment to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionScheduledDateForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range of the payment’s schedule. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date on which to transfer money from the user’s account to the payee. The user can optionally specify a date on which to schedule payment. If the user doesn’t specify a date, assume that the user wants to pay the bill immediately. Don’t check to see if the scheduled date occurs before the bill’s due date. Instead, use this method only to identify the date on which you can perform the transaction.

Return a successful resolution if you’re able to schedule the transaction on the date requested by the user, or if you’re able to schedule the transaction immediately. If the user-specified date falls on a banking holiday or on a date when you’d be unable to schedule the transaction, suggest a different date and ask the user for confirmation or use a disambiguation resolution to ask the user to select from two or three alternative dates.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
