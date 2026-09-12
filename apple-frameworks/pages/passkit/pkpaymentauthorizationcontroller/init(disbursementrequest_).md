> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentauthorizationcontroller/init(disbursementrequest:)](https://developer.apple.com/documentation/passkit/pkpaymentauthorizationcontroller/init(disbursementrequest:))

# init(disbursementRequest:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates a new payment authorization controller with the disbursement request you provide.

## Declaration

```swift
convenience init(disbursementRequest request: PKDisbursementRequest)
```

## Parameters

- `request`: A [PKDisbursementRequest](../pkdisbursementrequest.md) that contains the details of the request.

## See Also

### Creating a payment authorization controller

- [init(paymentRequest:)](init%28paymentrequest_%29.md): Initializes and returns a payment authorization controller.

# initWithDisbursementRequest: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

Creates a new payment authorization controller with the disbursement request you provide.

## Declaration

```objectivec
- (instancetype) initWithDisbursementRequest:(PKDisbursementRequest *) request;
```

## Parameters

- `request`: A [PKDisbursementRequest](../pkdisbursementrequest.md) that contains the details of the request.

## See Also

### Creating a payment authorization controller

- [initWithPaymentRequest:](init%28paymentrequest_%29.md): Initializes and returns a payment authorization controller.
