> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintenthandling/handle(intent:completion:)](https://developer.apple.com/documentation/intents/inrequestpaymentintenthandling/handle(intent:completion:))

# handle(intent:completion:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles sending the payment request to the designated user.

## Declaration

```swift
func handle(intent: INRequestPaymentIntent, completion: @escaping @Sendable (INRequestPaymentIntentResponse) -> Void)
```

```swift
func handle(intent: INRequestPaymentIntent) async -> INRequestPaymentIntentResponse
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must send the request to the designated user. The response object you provide should indicate the success or failure of delivering the request.

You specify the request details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. For more information about configuring the response object, see [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md).

# handleRequestPayment:completion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Handles sending the payment request to the designated user.

## Declaration

```objectivec
- (void) handleRequestPayment:(INRequestPaymentIntent *) intent completion:(void (^)(INRequestPaymentIntentResponse *response)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. The information in this object has already been resolved and confirmed by your handler object.
- `completion`: The handler block to execute with your response. You must execute this handler at some point during your implementation of this method. This handler has no return value and takes the following parameter:

  - **response**: The [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md) object containing the status of the request. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Your implementation of this method must send the request to the designated user. The response object you provide should indicate the success or failure of delivering the request.

You specify the request details using an [INPaymentRecord](../inpaymentrecord.md) object, which you then include in your response object. For more information about configuring the response object, see [INRequestPaymentIntentResponse](../inrequestpaymentintentresponse.md).
