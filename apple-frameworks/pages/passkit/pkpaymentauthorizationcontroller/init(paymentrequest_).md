> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/init(paymentrequest:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/init(paymentrequest:))

# init(paymentRequest:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a payment authorization controller.

## Declaration

```swift
init(paymentRequest request: PKPaymentRequest)
```

## Parameters

- `request`: The payment request to be authorized.

<a id="return-value"></a>

## Return Value

The newly initialized view controller.

<a id="Discussion"></a>

## Discussion

If the user can’t make payments on any of the payment request’s supported networks, initialization fails and this method returns `nil`.

Present and dismiss the controller by calling its [present(completion:)](present%28completion_%29.md) and [dismiss(completion:)](dismiss%28completion_%29.md) methods.

## See Also

### Creating a payment authorization controller

- [init(disbursementRequest:)](init%28disbursementrequest_%29.md): Creates a new payment authorization controller with the disbursement request you provide.

# initWithPaymentRequest: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a payment authorization controller.

## Declaration

```objectivec
- (instancetype) initWithPaymentRequest:(PKPaymentRequest *) request;
```

## Parameters

- `request`: The payment request to be authorized.

<a id="return-value"></a>

## Return Value

The newly initialized view controller.

<a id="Discussion"></a>

## Discussion

If the user can’t make payments on any of the payment request’s supported networks, initialization fails and this method returns `nil`.

Present and dismiss the controller by calling its [presentWithCompletion:](present%28completion_%29.md) and [dismissWithCompletion:](dismiss%28completion_%29.md) methods.

## See Also

### Creating a payment authorization controller

- [initWithDisbursementRequest:](init%28disbursementrequest_%29.md): Creates a new payment authorization controller with the disbursement request you provide.
