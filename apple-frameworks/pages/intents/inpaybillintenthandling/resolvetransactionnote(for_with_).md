> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvetransactionnote(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvetransactionnote(for:with:))

# resolveTransactionNote(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves any custom notes associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionNote(for intent: INPayBillIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveTransactionNote(for intent: INPayBillIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the string containing any notes to include with the transaction. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether you can record notes with the transaction. Return a successful resolution if you can record the note with the transaction. If your app doesn’t store notes with transactions, return a resolution indicating that the value isn’t required.

You’re strongly encouraged to record notes with your app’s financial transactions. Notes are optional but are helpful for users to organize their transactions.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.

# resolveTransactionNoteForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves any custom notes associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionNoteForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the string containing any notes to include with the transaction. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether you can record notes with the transaction. Return a successful resolution if you can record the note with the transaction. If your app doesn’t store notes with transactions, return a resolution indicating that the value isn’t required.

You’re strongly encouraged to record notes with your app’s financial transactions. Notes are optional but are helpful for users to organize their transactions.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
