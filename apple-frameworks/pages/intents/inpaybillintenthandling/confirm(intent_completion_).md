> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Confirms the transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func confirm(intent: INPayBillIntent, completion: @escaping @Sendable (INPayBillIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INPayBillIntent) async -> INPayBillIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the properties of this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INPayBillIntentResponse](../inpaybillintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to validate that scheduling payment for the specified bill is possible. You might use this method to validate the following information:

- The user has logged in to your app, and is therefore authorized to make payments.
- The payee is valid and provided a bill that requires payment.
- The user’s payment account is valid and contains sufficient funds to pay the bill.
- The amount paid by the user is greater than the minimum amount associated with the bill.
- The date for making the payment occurs before the bill’s due date.

At some point in your implementation, execute the provided completion block with a response object containing the transaction details. Siri displays this information to the user during the confirmation process.

When configuring your response object, specify the bill details and the user account to transfer the money from. You also specify the scheduled transaction date. For more information about creating the response object, see [INPayBillIntentResponse](../inpaybillintentresponse.md).

# confirmPayBill:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Confirms the transaction details.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) confirmPayBill:(INPayBillIntent *) intent completion:(void (^)(INPayBillIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved the properties of this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. The handler has no return value and takes the following parameter:

  - **response**: The [INPayBillIntentResponse](../inpaybillintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to validate that scheduling payment for the specified bill is possible. You might use this method to validate the following information:

- The user has logged in to your app, and is therefore authorized to make payments.
- The payee is valid and provided a bill that requires payment.
- The user’s payment account is valid and contains sufficient funds to pay the bill.
- The amount paid by the user is greater than the minimum amount associated with the bill.
- The date for making the payment occurs before the bill’s due date.

At some point in your implementation, execute the provided completion block with a response object containing the transaction details. Siri displays this information to the user during the confirmation process.

When configuring your response object, specify the bill details and the user account to transfer the money from. You also specify the scheduled transaction date. For more information about creating the response object, see [INPayBillIntentResponse](../inpaybillintentresponse.md).
