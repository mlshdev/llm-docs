> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext)

# PKPaymentTokenContext (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that defines the context for a single payment token in a payment request for multimerchant payments.

## Declaration

```swift
class PKPaymentTokenContext
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [multiTokenContexts](pkpaymentrequest/multitokencontexts.md) property on the [PKPaymentRequest](pkpaymentrequest.md) object to use this class to request multimerchant payments.

Use [PKPaymentTokenContext](pkpaymenttokencontext.md) to authorize a payment amount for each payment token in a multimerchant payment request. To enable multiple merchants for a transaction, use one [PKPaymentTokenContext](pkpaymenttokencontext.md) object for each merchant.

You can optionally associate each payment token with the merchant’s top-level domain.

## Topics

### Creating a payment token context

- [init(merchantIdentifier:externalIdentifier:merchantName:merchantDomain:amount:)](pkpaymenttokencontext/init%28merchantidentifier_externalidentifier_merchantname_merchantdomain_amount_%29.md): Create a payment token context for a single merchant.

### Specifying the merchant

- [merchantIdentifier](pkpaymenttokencontext/merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantDomain](pkpaymenttokencontext/merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](pkpaymenttokencontext/merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](pkpaymenttokencontext/externalidentifier.md): An external identifier for the merchant.

### Indicating a payment amount

- [amount](pkpaymenttokencontext/amount.md): The amount to authorize for the payment token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

# PKPaymentTokenContext (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A class that defines the context for a single payment token in a payment request for multimerchant payments.

## Declaration

```objectivec
@interface PKPaymentTokenContext : NSObject
```

<a id="overview"></a>

## Overview

> **Important**

>  You must set the [multiTokenContexts](pkpaymentrequest/multitokencontexts.md) property on the [PKPaymentRequest](pkpaymentrequest.md) object to use this class to request multimerchant payments.

Use [PKPaymentTokenContext](pkpaymenttokencontext.md) to authorize a payment amount for each payment token in a multimerchant payment request. To enable multiple merchants for a transaction, use one [PKPaymentTokenContext](pkpaymenttokencontext.md) object for each merchant.

You can optionally associate each payment token with the merchant’s top-level domain.

## Topics

### Creating a payment token context

- [initWithMerchantIdentifier:externalIdentifier:merchantName:merchantDomain:amount:](pkpaymenttokencontext/init%28merchantidentifier_externalidentifier_merchantname_merchantdomain_amount_%29.md): Create a payment token context for a single merchant.

### Specifying the merchant

- [merchantIdentifier](pkpaymenttokencontext/merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantDomain](pkpaymenttokencontext/merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](pkpaymenttokencontext/merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](pkpaymenttokencontext/externalidentifier.md): An external identifier for the merchant.

### Indicating a payment amount

- [amount](pkpaymenttokencontext/amount.md): The amount to authorize for the payment token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
