> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/resolvenote(for:with:)](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/resolvenote(for:with:))

# resolveNote(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the notes associated with the transaction.

## Declaration

```swift
optional func resolveNote(for intent: INSendPaymentIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveNote(for intent: INSendPaymentIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is an [NSString](../../foundation/nsstring.md) object containing the note to send with the payment. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any notes associated with the transaction.

## See Also

### Resolving the Intent Parameters

- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

# resolveNoteForSendPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the notes associated with the transaction.

## Declaration

```objectivec
- (void) resolveNoteForSendPayment:(INSendPaymentIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is an [NSString](../../foundation/nsstring.md) object containing the note to send with the payment. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any notes associated with the transaction.

## See Also

### Resolving the Intent Parameters

- [resolvePayeeForSendPayment:completion:](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmountForSendPayment:completion:](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolvePayeeForSendPayment:withCompletion:](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmountForSendPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.
