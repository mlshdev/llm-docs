> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling/resolvecurrencyamount(for:with:)-78c2m](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling/resolvecurrencyamount(for:with:)-78c2m)

# resolveCurrencyAmount(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the amount of money being requested.

> Use [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-1it85.md) instead.

## Declaration

```swift
optional func resolveCurrencyAmount(for intent: INRequestPaymentIntent, with completion: @escaping @Sendable (INCurrencyAmountResolutionResult) -> Void)
```

```swift
optional func resolveCurrencyAmount(for intent: INRequestPaymentIntent) async -> INCurrencyAmountResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the requested amount. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify that the request can be made in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the payer’s account contains the necessary funds to complete the transaction.

## See Also

### Resolving the Intent Parameters

- [resolvePayer(for:with:)](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolvePayer(for:with:)](resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.

# resolveCurrencyAmountForRequestPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the amount of money being requested.

> Use [resolveCurrencyAmountForRequestPayment:completion:](resolvecurrencyamount%28for_with_%29-1it85.md) instead.

## Declaration

```objectivec
- (void) resolveCurrencyAmountForRequestPayment:(INRequestPaymentIntent *) intent withCompletion:(void (^)(INCurrencyAmountResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INCurrencyAmount](../incurrencyamount.md) object containing the requested amount. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to verify that the request can be made in the intended currency. If the amount is outside of the minimum or maximum transaction amount supported by your app, return a successful result and use your response object to communicate that the amount is below the minimum or above the maximum amount. Do not use this method to validate that the payer’s account contains the necessary funds to complete the transaction.

## See Also

### Resolving the Intent Parameters

- [resolvePayerForRequestPayment:completion:](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmountForRequestPayment:completion:](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNoteForRequestPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolvePayerForRequestPayment:withCompletion:](resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.
