> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintenthandling/confirm(intent:completion:)](https://developer.apple.com/documentation/intents/insendpaymentintenthandling/confirm(intent:completion:))

# confirm(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms the transaction and details.

## Declaration

```swift
optional func confirm(intent: INSendPaymentIntent, completion: @escaping @Sendable (INSendPaymentIntentResponse) -> Void)
```

```swift
optional func confirm(intent: INSendPaymentIntent) async -> INSendPaymentIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendPaymentIntentResponse](../insendpaymentintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implemenbt this method to validate that the transaction is possible. You might use this method to validate a user’s logged in status, has sufficient funds for the payment, and can perform the transaction. At some point in your implementation, execute the provided completion block with a response object containing the transaction details. Siri displays the provided information to the user during the confirmation process.

You specify the payment details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. For more information about creating the response object, see [INSendPaymentIntentResponse](../insendpaymentintentresponse.md).

# confirmSendPayment:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Confirms the transaction and details.

## Declaration

```objectivec
- (void) confirmSendPayment:(INSendPaymentIntent *) intent completion:(void (^)(INSendPaymentIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INSendPaymentIntentResponse](../insendpaymentintentresponse.md) object containing the details to confirm with the user. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Implemenbt this method to validate that the transaction is possible. You might use this method to validate a user’s logged in status, has sufficient funds for the payment, and can perform the transaction. At some point in your implementation, execute the provided completion block with a response object containing the transaction details. Siri displays the provided information to the user during the confirmation process.

You specify the payment details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. For more information about creating the response object, see [INSendPaymentIntentResponse](../insendpaymentintentresponse.md).
