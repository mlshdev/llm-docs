> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestmerchantsessionupdate/status](https://developer.apple.com/documentation/passkit/pkpaymentrequestmerchantsessionupdate/status)

# status (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The current authorization status for the payment.

## Declaration

```swift
var status: PKPaymentAuthorizationStatus { get set }
```

## See Also

### Getting information for the merchant session update

- [session](session.md): An object that validates the identity of a merchant for the payment request.
- [PKPaymentMerchantSession](../pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.

# status (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The current authorization status for the payment.

## Declaration

```objectivec
@property (nonatomic, assign) PKPaymentAuthorizationStatus status;
```

## See Also

### Getting information for the merchant session update

- [session](session.md): An object that validates the identity of a merchant for the payment request.
- [PKPaymentMerchantSession](../pkpaymentmerchantsession.md): An object that validates the identity of a merchant for a payment request.
