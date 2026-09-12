> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/resolvepayee(for:with:)-1kh1g](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/resolvepayee(for:with:)-1kh1g)

# resolvePayee(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the recipient of the funds.

> Use [resolvePayee(for:with:)](resolvepayee%28for_with_%29-3otmy.md) instead.

## Declaration

```swift
optional func resolvePayee(for intent: INSendPaymentIntent, with completion: @escaping @Sendable (INPersonResolutionResult) -> Void)
```

```swift
optional func resolvePayee(for intent: INSendPaymentIntent) async -> INPersonResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify the identity of the intended recipient. Use the provided payee information in the `intent` object to locate the corresponding user in your app. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payee information, you might ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolvePayee(for:with:)](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.

# resolvePayeeForSendPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the recipient of the funds.

> Use [resolvePayeeForSendPayment:completion:](resolvepayee%28for_with_%29-3otmy.md) instead.

## Declaration

```objectivec
- (void) resolvePayeeForSendPayment:(INSendPaymentIntent *) intent withCompletion:(void (^)(INPersonResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify the identity of the intended recipient. Use the provided payee information in the `intent` object to locate the corresponding user in your app. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payee information, you might ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users, consider a different resolution.

## See Also

### Resolving the Intent Parameters

- [resolvePayeeForSendPayment:completion:](resolvepayee%28for_with_%29-3otmy.md): Resolves the recipient for a payment.
- [resolveCurrencyAmountForSendPayment:completion:](resolvecurrencyamount%28for_with_%29-75c7o.md): Resolves the amount of currency to transfer.
- [resolveNoteForSendPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the transaction.
- [resolveCurrencyAmountForSendPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-9vd94.md): Deprecated. Called when you need to resolve the currency amount to be transferred.
