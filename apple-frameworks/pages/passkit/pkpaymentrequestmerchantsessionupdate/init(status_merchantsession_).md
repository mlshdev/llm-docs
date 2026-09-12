> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestmerchantsessionupdate/init(status:merchantsession:)](https://developer.apple.com/documentation/passkit/pkpaymentrequestmerchantsessionupdate/init(status:merchantsession:))

# init(status:merchantSession:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a payment method update with the specified status and merchant session.

## Declaration

```swift
init(status: PKPaymentAuthorizationStatus, merchantSession session: PKPaymentMerchantSession?)
```

## Parameters

- `status`: The current authorization status for the payment.
- `session`: An object that validates the identity of a merchant for a payment request.

# initWithStatus:merchantSession: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a payment method update with the specified status and merchant session.

## Declaration

```objectivec
- (instancetype) initWithStatus:(PKPaymentAuthorizationStatus) status merchantSession:(PKPaymentMerchantSession *) session;
```

## Parameters

- `status`: The current authorization status for the payment.
- `session`: An object that validates the identity of a merchant for a payment request.
