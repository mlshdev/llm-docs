> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/apple-pay](https://developer.apple.com/documentation/passkit/apple-pay)

# Apple Pay (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** API Collection

Request and process Apple Pay payments in your app.

## Topics

### Apple Pay setup

- [Setting up Apple Pay](setting-up-apple-pay.md): Fulfill the requirements to provide Apple Pay as a payment option on your website or in your app.
- [Offering Apple Pay in Your App](offering-apple-pay-in-your-app.md): Collect payments with iPhone and Apple Watch using Apple Pay.
- [Complying with regional regulations](complying-with-regional-regulations.md): Check regional regulations for possible requirements for your Apple Pay-based implementation.

### Apple Pay availability

Determine if the device supports Apple Pay and whether the user has added payment cards.

- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.

### Apple Pay buttons

- [PKPaymentButton](pkpaymentbutton.md): An object that displays a button either to trigger payments through Apple Pay or to prompt the user to set up a card.
- [PayWithApplePayButton](paywithapplepaybutton.md): A type that provides a button to pay with Apple pay.
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)
- [PayWithApplePayButtonStyle](paywithapplepaybuttonstyle.md)
- [PayWithApplePayButtonLabel](paywithapplepaybuttonlabel.md)

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

### Disbursement requests

- [PKDisbursementRequest](pkdisbursementrequest.md): An object that represents a request to disburse funds from a merchant to an individual.

### Payment sheet interactions and authorization

- [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md): An object that reports the status code and errors for a payment authorization request.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

### Payment sheet updates

Process the user’s changes and update the payment sheet.

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

### QR transaction information

- [PKPaymentInformationEventExtension](pkpaymentinformationeventextension.md): An abstract superclass for an extension to collect payment information and sign transaction data in a QR code purchase.
- [PKPaymentInformationRequestHandling](pkpaymentinformationrequesthandling.md)

### Entitlements

- [Merchant IDs Entitlement](../bundleresources/entitlements/com.apple.developer.in-app-payments.md): A list of merchant IDs your app uses for Apple Pay support.

### Payment token format

- [Payment token format reference](payment-token-format-reference.md): Verify an Apple Pay payment token and validate a transaction.

### Errors

Provide granular error information for contact and address data.

- [PKDisbursementError](pkdisbursementerror.md): A structure that describes errors that can occur while processing the disbursement.
- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentError](pkpaymenterror.md): An error type that you create to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentError.Code](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementError.Code](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKPaymentRequest.ApplePayLaterAvailability](pkpaymentrequest/applepaylateravailability-swift.enum.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [PKApplePayLaterAvailability](pkapplepaylateravailability.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.

## See Also

### Related Documentation

- [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764)
- [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/)

# Apple Pay (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** API Collection

Request and process Apple Pay payments in your app.

## Topics

### Apple Pay setup

- [Setting up Apple Pay](setting-up-apple-pay.md): Fulfill the requirements to provide Apple Pay as a payment option on your website or in your app.
- [Offering Apple Pay in Your App](offering-apple-pay-in-your-app.md): Collect payments with iPhone and Apple Watch using Apple Pay.
- [Complying with regional regulations](complying-with-regional-regulations.md): Check regional regulations for possible requirements for your Apple Pay-based implementation.

### Apple Pay availability

Determine if the device supports Apple Pay and whether the user has added payment cards.

- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.

### Apple Pay buttons

- [PKPaymentButton](pkpaymentbutton.md): An object that displays a button either to trigger payments through Apple Pay or to prompt the user to set up a card.

### Payment requests

- [PKPaymentRequest](pkpaymentrequest.md): An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

### Disbursement requests

- [PKDisbursementRequest](pkdisbursementrequest.md): An object that represents a request to disburse funds from a merchant to an individual.

### Payment sheet interactions and authorization

- [PKPaymentAuthorizationResult](pkpaymentauthorizationresult.md): An object that reports the status code and errors for a payment authorization request.
- [PKPaymentOrderDetails](pkpaymentorderdetails.md): Optional metadata with payment order details for the placed order.
- [PKPaymentAuthorizationController](pkpaymentauthorizationcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPaymentAuthorizationViewController](pkpaymentauthorizationviewcontroller.md): An object that presents a sheet that prompts the user to authorize a payment request.
- [PKPayment](pkpayment.md): Represents the result of authorizing a payment request and contains payment information, encrypted in the payment token.

### Payment sheet updates

Process the user’s changes and update the payment sheet.

- [PKPaymentRequestMerchantSessionUpdate](pkpaymentrequestmerchantsessionupdate.md): An object that updates a payment request with a merchant validation.
- [PKPaymentRequestPaymentMethodUpdate](pkpaymentrequestpaymentmethodupdate.md): An object that updates the payment request after the payment method changes.
- [PKPaymentRequestShippingContactUpdate](pkpaymentrequestshippingcontactupdate.md): An object that updates the payment request after the shipping contact information changes.
- [PKPaymentRequestShippingMethodUpdate](pkpaymentrequestshippingmethodupdate.md): An object that updates the payment request after the shipping method changed.
- [PKPaymentRequestCouponCodeUpdate](pkpaymentrequestcouponcodeupdate.md): An object that updates the payment request after the coupon code changes.
- [PKPaymentRequestUpdate](pkpaymentrequestupdate.md): The base class for updating the payment request after the user makes changes on the payment sheet.

### QR transaction information

- [PKPaymentInformationEventExtension](pkpaymentinformationeventextension.md): An abstract superclass for an extension to collect payment information and sign transaction data in a QR code purchase.
- [PKPaymentInformationRequestHandling](pkpaymentinformationrequesthandling.md)

### Entitlements

- [Merchant IDs Entitlement](../bundleresources/entitlements/com.apple.developer.in-app-payments.md): A list of merchant IDs your app uses for Apple Pay support.

### Payment token format

- [Payment token format reference](payment-token-format-reference.md): Verify an Apple Pay payment token and validate a transaction.

### Errors

Provide granular error information for contact and address data.

- [PKDisbursementErrorKey](pkdisbursementerrorkey.md): Values that describe errors that can occur when processing disbursements.
- [PKPaymentErrorCode](pkpaymenterror/code.md): An error code that you provide to indicate problems with address or contact information on an Apple Pay sheet.
- [PKPaymentErrorKey](pkpaymenterrorkey.md): Additional details about an error on the Apple Pay sheet.
- [PKDisbursementErrorCode](pkdisbursementerror/code.md): Values that describe errors that can occur while processing the disbursement.
- [PKPaymentErrorDomain](pkpaymenterrordomain.md): The error domain for specific errors associated with Apple Pay in-app or web payments.
- [PKDisbursementErrorDomain](pkdisbursementerrordomain.md): The error domain to use for errors with in-app disbursements.

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-inpf.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [PKApplePayLaterAvailability](pkapplepaylateravailability.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.

## See Also

### Related Documentation

- [Apple Pay Programming Guide](https://developer.apple.com/library/archive/ApplePay_Guide/index.html#//apple_ref/doc/uid/TP40014764)
- [iOS Human Interface Guidelines](https://developer.apple.com/ios/human-interface-guidelines/)
