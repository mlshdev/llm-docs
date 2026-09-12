> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling/resolvenote(for:with:)](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling/resolvenote(for:with:))

# resolveNote(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the notes associated with the request.

## Declaration

```swift
optional func resolveNote(for intent: INRequestPaymentIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveNote(for intent: INRequestPaymentIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [NSString](../../foundation/nsstring.md) object with the note to send to the request recipient. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any problems with the notes for the request.

## See Also

### Resolving the Intent Parameters

- [resolvePayer(for:with:)](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolvePayer(for:with:)](resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.
- [resolveCurrencyAmount(for:with:)](resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.

# resolveNoteForRequestPayment:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Resolves the notes associated with the request.

## Declaration

```objectivec
- (void) resolveNoteForRequestPayment:(INRequestPaymentIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The resolution result object containing your proposed resolution. For successful resolutions, create a resolution object whose value is the [NSString](../../foundation/nsstring.md) object with the note to send to the request recipient. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve any problems with the notes for the request.

## See Also

### Resolving the Intent Parameters

- [resolvePayerForRequestPayment:completion:](resolvepayer%28for_with_%29-4xu87.md): Resolves the person to receive the payment request.
- [resolveCurrencyAmountForRequestPayment:completion:](resolvecurrencyamount%28for_with_%29-1it85.md): Resolves the amount of money requested.
- [resolvePayerForRequestPayment:withCompletion:](resolvepayer%28for_with_%29-qp42.md): Deprecated. Called when you need to resolve the person who will receive the payment request.
- [resolveCurrencyAmountForRequestPayment:withCompletion:](resolvecurrencyamount%28for_with_%29-78c2m.md): Deprecated. Called when you need to resolve the amount of money being requested.
