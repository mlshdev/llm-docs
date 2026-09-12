> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintenthandling/resolvetransactionscheduleddate(for:with:)](https://developer.apple.com/documentation/intents/intransfermoneyintenthandling/resolvetransactionscheduleddate(for:with:))

# resolveTransactionScheduledDate(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the date on which the transfer is to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveTransactionScheduledDate(for intent: INTransferMoneyIntent, with completion: @escaping @Sendable (INDateComponentsRangeResolutionResult) -> Void)
```

```swift
optional func resolveTransactionScheduledDate(for intent: INTransferMoneyIntent) async -> INDateComponentsRangeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range for the transfer to occur. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date on which to transfer money between the user’s accounts. Adjust the date, as needed, to ensure that you can perform the transfer. If the user doesn’t specify a date, assume that the user wants to transfer the money immediately.

Return a successful resolution if you’re able to schedule the transfer on the requested date, or if there’s no date and you can perform the transaction immediately. If the user-specified date falls on a banking holiday or on a date when you’d be unable to schedule the transaction, suggest a different date and ask the user for confirmation or use a disambiguation resolution to ask the user to select from two or three alternative dates.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccount(for:with:)](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveTransactionScheduledDateForTransferMoney:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Resolves the date on which the transfer is to occur.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveTransactionScheduledDateForTransferMoney:(INTransferMoneyIntent *) intent withCompletion:(void (^)(INDateComponentsRangeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the date range for the transfer to occur. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the date on which to transfer money between the user’s accounts. Adjust the date, as needed, to ensure that you can perform the transfer. If the user doesn’t specify a date, assume that the user wants to transfer the money immediately.

Return a successful resolution if you’re able to schedule the transfer on the requested date, or if there’s no date and you can perform the transaction immediately. If the user-specified date falls on a banking holiday or on a date when you’d be unable to schedule the transaction, suggest a different date and ask the user for confirmation or use a disambiguation resolution to ask the user to select from two or three alternative dates.

## See Also

### Resolving the Intent Parameters

- [resolveFromAccountForTransferMoney:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the source of the funds.
- [resolveToAccountForTransferMoney:withCompletion:](resolvetoaccount%28for_with_%29.md): Deprecated. Resolves the user account that’s the destination of the funds.
- [resolveTransactionAmountForTransferMoney:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount that the user wants to transfer.
- [resolveTransactionNoteForTransferMoney:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
