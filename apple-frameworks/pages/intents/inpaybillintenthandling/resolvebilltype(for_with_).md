> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/resolvebilltype(for:with:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/resolvebilltype(for:with:))

# resolveBillType(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveBillType(for intent: INPayBillIntent, with completion: @escaping @Sendable (INBillTypeResolutionResult) -> Void)
```

```swift
optional func resolveBillType(for intent: INPayBillIntent) async -> INBillTypeResolutionResult
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INBillType](../inbilltype.md) value that classifies the bill’s purpose. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that the type of the bill matches one associated with the specified payee in the user’s account. Typically, you use the [billType](../inpaybillintent/billtype.md) and [billPayee](../insearchforbillsintent/billpayee.md) properties of the intent to identify where to apply any payments. When the user can pay multiple bills from the same payee, use the bill type to determine where to apply the payment. For example, if the user has a car loan and mortgage with the same payee, use the bill type to determine which loan receives the payment. Return a successful resolution if the user’s account contains a bill of the specified type. If the payee has only one bill type and that bill type isn’t the same one specified in the intent, you might return a resolution with the bill type you expected and ask the user for confirmation. If the payee and bill type don’t correlate at all to each other, you might ask the user to disambiguate from a set of possible options.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayee(for:with:)](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveFromAccount(for:with:)](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmount(for:with:)](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDate(for:with:)](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDate(for:with:)](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNote(for:with:)](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.

# resolveBillTypeForPayBill:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Resolves the type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveBillTypeForPayBill:(INPayBillIntent *) intent withCompletion:(void (^)(INBillTypeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details of the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The handler block to execute with the resolution. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **resolutionResult**: The resolution object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INBillType](../inbilltype.md) value that classifies the bill’s purpose. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that the type of the bill matches one associated with the specified payee in the user’s account. Typically, you use the [billType](../inpaybillintent/billtype.md) and [billPayee](../insearchforbillsintent/billpayee.md) properties of the intent to identify where to apply any payments. When the user can pay multiple bills from the same payee, use the bill type to determine where to apply the payment. For example, if the user has a car loan and mortgage with the same payee, use the bill type to determine which loan receives the payment. Return a successful resolution if the user’s account contains a bill of the specified type. If the payee has only one bill type and that bill type isn’t the same one specified in the intent, you might return a resolution with the bill type you expected and ask the user for confirmation. If the payee and bill type don’t correlate at all to each other, you might ask the user to disambiguate from a set of possible options.

## See Also

### Resolving the Intent Parameters

- [resolveBillPayeeForPayBill:withCompletion:](resolvebillpayee%28for_with_%29.md): Deprecated. Resolves the entity that originated the bill.
- [resolveFromAccountForPayBill:withCompletion:](resolvefromaccount%28for_with_%29.md): Deprecated. Resolves the user account that provides the funds for paying the bill.
- [resolveTransactionAmountForPayBill:withCompletion:](resolvetransactionamount%28for_with_%29.md): Deprecated. Resolves the amount to pay toward the bill.
- [resolveDueDateForPayBill:withCompletion:](resolveduedate%28for_with_%29.md): Deprecated. Resolves the due date of the bill.
- [resolveTransactionScheduledDateForPayBill:withCompletion:](resolvetransactionscheduleddate%28for_with_%29.md): Deprecated. Resolves the date for the payment to occur.
- [resolveTransactionNoteForPayBill:withCompletion:](resolvetransactionnote%28for_with_%29.md): Deprecated. Resolves any custom notes associated with the transaction.
