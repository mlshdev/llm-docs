> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/resolvepayee(for:with:)-3otmy](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/resolvepayee(for:with:)-3otmy)

# resolvePayee(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the recipient for a payment.

## Declaration

```swift
optional func resolvePayee(for intent: INSendPaymentIntent, with completion: @escaping @Sendable (INSendPaymentPayeeResolutionResult) -> Void)
```

```swift
optional func resolvePayee(for intent: INSendPaymentIntent) async -> INSendPaymentPayeeResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to determine whether you can send funds to the designated recipient. Use the provided payee information in the intent object to locate the corresponding user in your app. Always strive toward a successful resolution to a specific user, but always ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payee information, you might ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

If you identify a user but there is a problem in sending funds to that user, use the [unsupported(forReason:)](../insendpaymentpayeeresolutionresult/unsupported%28forreason_%29.md) method to create a [INSendPaymentPayeeResolutionResult](../insendpaymentpayeeresolutionresult.md) object that indicates you can’t the payee.

## See Also

### Resolving the Intent Parameters

- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

# resolvePayeeForSendPayment:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Resolves the recipient for a payment.

## Declaration

```objectivec
- (void) resolvePayeeForSendPayment:(INSendPaymentIntent *) intent completion:(void (^)(INSendPaymentPayeeResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to determine whether you can send funds to the designated recipient. Use the provided payee information in the intent object to locate the corresponding user in your app. Always strive toward a successful resolution to a specific user, but always ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payee information, you might ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

If you identify a user but there is a problem in sending funds to that user, use the [unsupportedForReason:](../insendpaymentpayeeresolutionresult/unsupported%28forreason_%29.md) method to create a [INSendPaymentPayeeResolutionResult](../insendpaymentpayeeresolutionresult.md) object that indicates you can’t the payee.

## See Also

### Resolving the Intent Parameters

- [resolveCurrencyAmountForSendPayment:completion:](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNoteForSendPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolvePayeeForSendPayment:withCompletion:](resolvepayee%28for_with_%29-1kh1g.md): Deprecated. Called when you need to resolve the recipient of the funds.
- [resolveCurrencyAmountForSendPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.
