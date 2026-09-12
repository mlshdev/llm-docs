> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling/resolvepayer(for:with:)-qp42](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling/resolvepayer(for:with:)-qp42)

# resolvePayer(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the person who will receive the payment request.

> Use [resolvePayer(for:with:)](resolvepayer%28for_with_%29-4xu87.md) instead.

## Declaration

```swift
optional func resolvePayer(for intent: INRequestPaymentIntent, with completion: @escaping @Sendable (INPersonResolutionResult) -> Void)
```

```swift
optional func resolvePayer(for intent: INRequestPaymentIntent) async -> INPersonResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use the `intent` object to identify intended recipient of the request. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payer information, you can ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users that match the payer information, consider another resolution.

## See Also

### Resolving the Intent Parameters

- [resolvePayer(for:with:)](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNote(for:with:)](resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.

# resolvePayerForRequestPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Called when you need to resolve the person who will receive the payment request.

> Use [resolvePayerForRequestPayment:completion:](resolvepayer%28for_with_%29-4xu87.md) instead.

## Declaration

```objectivec
- (void) resolvePayerForRequestPayment:(INRequestPaymentIntent *) intent withCompletion:(void (^)(INPersonResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [INPerson](../inperson.md) object containing detailed information about the user you identified. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use the `intent` object to identify intended recipient of the request. Always strive toward a successful resolution to a specific user, but feel free to ask for confirmation of the selected user if there is some uncertainty.

If multiple users match the provided payer information, you can ask for disambiguation of the most likely candidates. When disambiguating users, provide as few choices as possible. If you find more than five possible users that match the payer information, consider another resolution.

## See Also

### Resolving the Intent Parameters

- [resolvePayerForRequestPayment:completion:](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmountForRequestPayment:completion:](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolveNoteForRequestPayment:withCompletion:](resolvenote%28for_with_%29.md): Resolves the notes associated with the request.
- [resolveCurrencyAmountForRequestPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.
