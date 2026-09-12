> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontroller/init(paymentrequest:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontroller/init(paymentrequest:))

# init(paymentRequest:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Initializes and returns a payment authorization view controller.

## Declaration

```swift
init?(paymentRequest request: PKPaymentRequest)
```

## Parameters

- `request`: The payment request to be authorized.

<a id="return-value"></a>

## Return Value

The newly initialized view controller.

<a id="Discussion"></a>

## Discussion

If the user can’t make payments on any of the payment request’s supported networks, initialization fails and this method returns `nil`.

Present and dismiss the view controller using the appropriate mechanism and style for the current device idiom.

## See Also

### Creating a payment authorization view controller

- [init(disbursementRequest:)](init%28disbursementrequest_%29.md): Initializes and returns a new payment authorization view controller with the provided disbursement request.

# initWithPaymentRequest: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+

Initializes and returns a payment authorization view controller.

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

Present and dismiss the view controller using the appropriate mechanism and style for the current device idiom.

## See Also

### Creating a payment authorization view controller

- [initWithDisbursementRequest:](init%28disbursementrequest_%29.md): Initializes and returns a new payment authorization view controller with the provided disbursement request.
