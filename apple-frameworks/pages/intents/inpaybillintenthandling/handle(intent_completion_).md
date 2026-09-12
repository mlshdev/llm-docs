> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inpaybillintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles scheduling payment of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
func handle(intent: INPayBillIntent, completion: @escaping @Sendable (INPayBillIntentResponse) -> Void)
```

```swift
func handle(intent: INPayBillIntent) async -> INPayBillIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INPayBillIntentResponse](../inpaybillintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must schedule payment of the specified bill using the information in the intent object. The response object you provide should include the transaction details and indicate whether or not scheduling of the transaction was successful.

When configuring your response object, you specify the bill details and the user account to transfer the money from. You also specify the scheduled transaction date for the payment. The successful scheduling of a payment means that your service has recorded the transaction details and scheduled the payment for the specified date.

# handlePayBill:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Handles scheduling payment of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) handlePayBill:(INPayBillIntent *) intent completion:(void (^)(INPayBillIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Your handler object has already resolved and confirmed the information in this object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INPayBillIntentResponse](../inpaybillintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must schedule payment of the specified bill using the information in the intent object. The response object you provide should include the transaction details and indicate whether or not scheduling of the transaction was successful.

When configuring your response object, you specify the bill details and the user account to transfer the money from. You also specify the scheduled transaction date for the payment. The successful scheduling of a payment means that your service has recorded the transaction details and scheduled the payment for the specified date.
