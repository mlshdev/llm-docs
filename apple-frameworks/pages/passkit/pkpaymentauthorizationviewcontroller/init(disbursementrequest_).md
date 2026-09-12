> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationviewcontroller/init(disbursementrequest:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationviewcontroller/init(disbursementrequest:))

# init(disbursementRequest:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Initializes and returns a new payment authorization view controller with the provided disbursement request.

## Declaration

```swift
convenience init(disbursementRequest request: PKDisbursementRequest)
```

## Parameters

- `request`: A [PKDisbursementRequest](../pkdisbursementrequest.md).

## See Also

### Creating a payment authorization view controller

- [init(paymentRequest:)](init%28paymentrequest_%29.md): Initializes and returns a payment authorization view controller.

# initWithDisbursementRequest: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Initializes and returns a new payment authorization view controller with the provided disbursement request.

## Declaration

```objectivec
- (instancetype) initWithDisbursementRequest:(PKDisbursementRequest *) request;
```

## Parameters

- `request`: A [PKDisbursementRequest](../pkdisbursementrequest.md).

## See Also

### Creating a payment authorization view controller

- [initWithPaymentRequest:](init%28paymentrequest_%29.md): Initializes and returns a payment authorization view controller.
