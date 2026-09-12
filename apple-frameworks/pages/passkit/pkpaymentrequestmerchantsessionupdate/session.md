> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestmerchantsessionupdate/session](https://developer.apple.com/documentation/passkit/pkpaymentrequestmerchantsessionupdate/session)

# session (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

An object that validates the identity of a merchant for the payment request.

## Declaration

```swift
var session: PKPaymentMerchantSession? { get set }
```

## See Also

### Getting information for the merchant session update

- [status](status.md): The current authorization status for the payment.
- [PKPaymentMerchantSession](../pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.

# session (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

An object that validates the identity of a merchant for the payment request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKPaymentMerchantSession * session;
```

## See Also

### Getting information for the merchant session update

- [status](status.md): The current authorization status for the payment.
- [PKPaymentMerchantSession](../pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.
