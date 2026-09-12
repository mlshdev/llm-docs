> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvebillpayee(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvebillpayee(for:with:))

# resolveBillPayee(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the entity that originated the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveBillPayee(for intent: INPayBillIntent, with completion: @escaping @Sendable (INBillPayeeResolutionResult) -> Void)
```

```swift
optional func resolveBillPayee(for intent: INPayBillIntent) async -> INBillPayeeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INBillPayee](../inbillpayee.md) object that identifies the entity to receive the funds. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the identify of the payee in your app. The payee represents the entity that provided the bill to the user. Siri puts any payee-related information into the [billPayee](../inpaybillintent/billpayee.md) property of the intent object. Use that information to match the payee’s nickname or organization to one of the entities that the user registered with your app. (You should also use the information in the [billType](../inpaybillintent/billtype.md) property to verify that you’re scheduling payment for the correct bill). Always strive toward a successful resolution of the payee, but feel free to return a different resolution if you can’t locate the payee or you aren’t sure which bill the user intended to pay.

## See Also

### Resolving the Intent Parameters

- [resolveBillType(for:with:)](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveBillPayeeForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the entity that originated the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveBillPayeeForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INBillPayeeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INBillPayee](../inbillpayee.md) object that identifies the entity to receive the funds. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify the identify of the payee in your app. The payee represents the entity that provided the bill to the user. Siri puts any payee-related information into the [billPayee](../inpaybillintent/billpayee.md) property of the intent object. Use that information to match the payee’s nickname or organization to one of the entities that the user registered with your app. (You should also use the information in the [billType](../inpaybillintent/billtype.md) property to verify that you’re scheduling payment for the correct bill). Always strive toward a successful resolution of the payee, but feel free to return a different resolution if you can’t locate the payee or you aren’t sure which bill the user intended to pay.

## See Also

### Resolving the Intent Parameters

- [resolveBillTypeForPayBill:withCompletion:](resolvebilltype%28for_with_%29.md): Deprecated. Resolves the type of the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
