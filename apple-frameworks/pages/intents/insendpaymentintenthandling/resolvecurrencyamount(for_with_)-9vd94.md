> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/resolvecurrencyamount(for:with:)-9vd94](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/resolvecurrencyamount(for:with:)-9vd94)

# resolveCurrencyAmount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the currency amount to be transferred.

> Use [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-75c7o.md) instead.

## Declaration

```swift
optional func resolveCurrencyAmount(for intent: INSendPaymentIntent, with completion: @escaping @Sendable (INCurrencyAmountResolutionResult) -> Void)
```

```swift
optional func resolveCurrencyAmount(for intent: INSendPaymentIntent) async -> INCurrencyAmountResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the amount you plan to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify that you can transfer money in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the user’s account contains the specified amount.

## See Also

### Resolving the Intent Parameters

- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.

# resolveCurrencyAmountForSendPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the currency amount to be transferred.

> Use [resolveCurrencyAmountForSendPayment:completion:](resolvecurrencyamount%28for_with_%29-75c7o.md) instead.

## Declaration

```objectivec
- (void) resolveCurrencyAmountForSendPayment:(INSendPaymentIntent *) intent withCompletion:(void (^)(INCurrencyAmountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the amount you plan to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify that you can transfer money in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the user’s account contains the specified amount.

## See Also

### Resolving the Intent Parameters

- [resolvePayeeForSendPayment:completion:](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmountForSendPayment:completion:](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNoteForSendPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayeeForSendPayment:withCompletion:](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
