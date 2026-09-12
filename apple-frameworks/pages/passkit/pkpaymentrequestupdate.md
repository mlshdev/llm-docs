> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate)

# PKPaymentRequestUpdate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class for updating the payment request after the user makes changes on the payment sheet.

## Declaration

```swift
class PKPaymentRequestUpdate
```

## Topics

### Creating a payment request update

- [init(paymentSummaryItems:)](pkpaymentrequestupdate/init%28paymentsummaryitems_%29.md): Creates a payment request update with the specified payment summary items.

### Updating authorization status

- [status](pkpaymentrequestupdate/status.md): The status of the payment request that indicates whether authorization succeeds or fails.
- [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

### Updating summary items

- [paymentSummaryItems](pkpaymentrequestupdate/paymentsummaryitems.md): The list of payment summary items for the instance.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

### Updating shipping methods

- [shippingMethods](pkpaymentrequestupdate/shippingmethods.md): The list of shipping methods available for a payment request.

### Updating automatic reload payments

- [automaticReloadPaymentRequest](pkpaymentrequestupdate/automaticreloadpaymentrequest.md): The automatic reload payment request to update the payment request with.

### Updating multitoken or multimerchant payments

- [multiTokenContexts](pkpaymentrequestupdate/multitokencontexts.md): An optional array of payment token contexts to request multiple payment tokens with one payment token per context.

### Updating recurring payments

- [recurringPaymentRequest](pkpaymentrequestupdate/recurringpaymentrequest.md): The recurring payment request to update the payment request with.

### Setting up a deferred payment request

- [deferredPaymentRequest](pkpaymentrequestupdate/deferredpaymentrequest.md): The deferred payment request to update the payment request with.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md)
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md)
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md)
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.

# PKPaymentRequestUpdate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The base class for updating the payment request after the user makes changes on the payment sheet.

## Declaration

```objectivec
@interface PKPaymentRequestUpdate : NSObject
```

## Topics

### Creating a payment request update

- [initWithPaymentSummaryItems:](pkpaymentrequestupdate/init%28paymentsummaryitems_%29.md): Creates a payment request update with the specified payment summary items.

### Updating authorization status

- [status](pkpaymentrequestupdate/status.md): The status of the payment request that indicates whether authorization succeeds or fails.
- [PKPaymentAuthorizationStatus](pkpaymentauthorizationstatus.md): General success and failure status for payment authorization.

### Updating summary items

- [paymentSummaryItems](pkpaymentrequestupdate/paymentsummaryitems.md): The list of payment summary items for the instance.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

### Updating shipping methods

- [shippingMethods](pkpaymentrequestupdate/shippingmethods.md): The list of shipping methods available for a payment request.

### Updating automatic reload payments

- [automaticReloadPaymentRequest](pkpaymentrequestupdate/automaticreloadpaymentrequest.md): The automatic reload payment request to update the payment request with.

### Updating multitoken or multimerchant payments

- [multiTokenContexts](pkpaymentrequestupdate/multitokencontexts.md): An optional array of payment token contexts to request multiple payment tokens with one payment token per context.

### Updating recurring payments

- [recurringPaymentRequest](pkpaymentrequestupdate/recurringpaymentrequest.md): The recurring payment request to update the payment request with.

### Setting up a deferred payment request

- [deferredPaymentRequest](pkpaymentrequestupdate/deferredpaymentrequest.md): The deferred payment request to update the payment request with.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md)
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md)
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md)
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md)

## See Also

### Payment sheet updates

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
