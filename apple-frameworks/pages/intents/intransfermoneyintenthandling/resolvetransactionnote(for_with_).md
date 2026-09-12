> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintenthandling/resolvetransactionnote(for:with:)](https://developer.apple.com/documentation/intents/intransfermoneyintenthandling/resolvetransactionnote(for:with:))

# resolveTransactionNote(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves any custom notes associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionNote(for intent: INTransferMoneyIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveTransactionNote(for intent: INTransferMoneyIntent) async -> INStringResolutionResult
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

- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccount(for:with:)](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.

# resolveTransactionNoteForTransferMoney:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves any custom notes associated with the transaction.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionNoteForTransferMoney:(INTransferMoneyIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
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

- [resolveFromAccountForTransferMoney:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccountForTransferMoney:withCompletion:](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmountForTransferMoney:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionScheduledDateForTransferMoney:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date on which the transfer is to occur.
