> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/resolvecurrencyamount(for:with:)-75c7o](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/resolvecurrencyamount(for:with:)-75c7o)

# resolveCurrencyAmount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the amount of currency to transfer.

## Declaration

```swift
optional func resolveCurrencyAmount(for intent: INSendPaymentIntent, with completion: @escaping @Sendable (INSendPaymentCurrencyAmountResolutionResult) -> Void)
```

```swift
optional func resolveCurrencyAmount(for intent: INSendPaymentIntent) async -> INSendPaymentCurrencyAmountResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the amount you plan to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can transfer money in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the user’s account contains the specified amount.

If you identify a currency amount but there is a problem in sending the funds, use the [unsupported(forReason:)](../insendpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md) method to create a [INSendPaymentCurrencyAmountResolutionResult](../insendpaymentcurrencyamountresolutionresult.md) object that indicates the reason you couldn’t send the amount.

## See Also

### Resolving the Intent Parameters

- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

# resolveCurrencyAmountForSendPayment:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the amount of currency to transfer.

## Declaration

```objectivec
- (void) resolveCurrencyAmountForSendPayment:(INSendPaymentIntent *) intent completion:(void (^)(INSendPaymentCurrencyAmountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the amount you plan to transfer. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to verify that you can transfer money in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the user’s account contains the specified amount.

If you identify a currency amount but there is a problem in sending the funds, use the [unsupportedForReason:](../insendpaymentcurrencyamountresolutionresult/unsupported%28forreason_%29.md) method to create a [INSendPaymentCurrencyAmountResolutionResult](../insendpaymentcurrencyamountresolutionresult.md) object that indicates the reason you couldn’t send the amount.

## See Also

### Resolving the Intent Parameters

- [resolvePayeeForSendPayment:completion:](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveNoteForSendPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayeeForSendPayment:withCompletion:](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmountForSendPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.
