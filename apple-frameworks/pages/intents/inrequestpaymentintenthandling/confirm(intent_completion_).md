> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms the payment request and confirm the details.

## Declaration

```swift
optional func confirm(intent: INRequestPaymentIntent, completion: @escaping @Sendable (INRequestPaymentIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INRequestPaymentIntent) async -> INRequestPaymentIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that the transaction is possible. You might use this method to validate that the user’s logged in status and can request funds from other users. At some point in your implementation, execute the provided completion block with a response object containing the request details. Siri displays the provided information to the user during the confirmation process.

You specify the transaction details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. Siri displays the transaction details when asking the user to confirm the payment request.

# confirmRequestPayment:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms the payment request and confirm the details.

## Declaration

```objectivec
- (void) confirmRequestPayment:(INRequestPaymentIntent *) intent completion:(void (^)(INRequestPaymentIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implement this method to validate that the transaction is possible. You might use this method to validate that the user’s logged in status and can request funds from other users. At some point in your implementation, execute the provided completion block with a response object containing the request details. Siri displays the provided information to the user during the confirmation process.

You specify the transaction details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. Siri displays the transaction details when asking the user to confirm the payment request.
