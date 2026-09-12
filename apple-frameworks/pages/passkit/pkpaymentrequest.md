> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequest)

# PKPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.

## Declaration

```swift
class PKPaymentRequest
```

<a id="overview"></a>

## Overview

Use a [PKPaymentRequest](pkpaymentrequest.md) object to represent a merchant request for payment for goods or services. Your app creates a payment request as soon as a person taps the Apple Pay button to make a purchase. Tapping the Apple Pay button in your app initiates the payment request process. If your customers need to enter a discount code, choose a shipping method, or any other task, your app needs to ask for that information *before* they tap the Apple Pay button.

A payment request object contains information that describes the purchase, including information about the merchant, available payment networks, the payment summary, billing and shipping details, coupon codes, custom data, error messages, and more.

A typical payment request is for a one-time payment. To support different types of payment requests, include one of the following options in the payment request object:

| Payment type request | Property to set |
| --- | --- |
| Recurring payments | [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) |
| Automatic reload payments | [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) |
| Deferred payments | [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) |
| Indicating eligibility for Apple Pay Later | [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md) |
| Multiple payment tokens to support for multimerchant payments | [multiTokenContexts](pkpaymentrequest/multitokencontexts.md) |
| Exclude an Apple Pay card from the payment sheet | [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md) |

> **Note**

>  You can set only one optional payment request type on a payment request object.

<a id="Request-a-recurring-payment"></a>

### Request a recurring payment

Use the [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) property to set up a recurring payment request using the [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md) and [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md) classes. Recurring payments, such as subscriptions, can feature different payment intervals (for example, annually or monthly) and billing cycles, such as regular or trial.

<a id="Request-an-automatic-reload-payment"></a>

### Request an automatic reload payment

Use the [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) property to set up an automatic reload payment request using the [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) and [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md) classes. You can set up automatic reload payments, such as store card top-ups, that feature a balance threshold and a reload amount. The card automatically reloads with the reload amount when the account drops below the balance threshold.

<a id="Request-a-deferred-payment"></a>

### Request a deferred payment

Use the [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) property to set up a deferred payment request using the [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md) class. Deferred payments include purchases, such as hotel bookings or pre-orders, where the card renders payment at a later date upon the receipt of goods or delivery of services.

<a id="Set-the-Apple-Pay-Later-mode"></a>

### Set the Apple Pay Later mode

Use the [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md) property to indicate whether this payment request is eligible for Apple Pay Later. You can indicate that Apple Pay Later is unavailable for certain kinds of transactions, including subscriptions, items that require recurring payments or prohibited items, such as gift cards.

<a id="Request-multitoken-or-multimerchant-payments"></a>

### Request multitoken or multimerchant payments

Use the [multiTokenContexts](pkpaymentrequestupdate/multitokencontexts.md) property to request payment data for multimerchant payments with the [PKPaymentTokenContext](pkpaymenttokencontext.md) class. You can set up multitoken transactions to process and display payment requests with multiple merchants on one payment sheet, for example, a booking site where someone pays for a hotel, flight, and car rental from different merchants.

<a id="Exclude-an-Apple-Pay-from-the-payment-sheet"></a>

### Exclude an Apple Pay from the payment sheet

Use the [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md) property to exclude specific Apple Pay cards that you’ve issued from appearing in the payment sheet as a pay option. For example, if a person is topping up a stored value card, you can exclude the card being topped up from the payment options.

## Topics

### Selecting the payment networks

- [availableNetworks()](pkpaymentrequest/availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [supportedNetworks](pkpaymentrequest/supportednetworks.md): The payment methods that you support.
- [PKPaymentNetwork](pkpaymentnetwork.md): A type that represents a payment method.

### Setting merchant information

- [PKPaymentRequest.MerchantCategoryCode](pkpaymentrequest/merchantcategorycode-swift.struct.md): An optional four-digit struct, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantIdentifier](pkpaymentrequest/merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](pkpaymentrequest/merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](pkmerchantcapability.md): Capabilities for processing payment.

### Setting currency and region information

- [currencyCode](pkpaymentrequest/currencycode.md): The three-letter ISO 4217 currency code that determines the currency the payment request uses.
- [supportedCountries](pkpaymentrequest/supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.
- [countryCode](pkpaymentrequest/countrycode.md): The merchant’s two-letter ISO 3166 country code.

### Setting the payment summary items

- [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md): An array of payment summary item objects that summarize the amount of the payment.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

### Excluding cards from the payment sheet

- [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md): An array of Apple Pay cards to exclude from payment.

### Requesting multitoken or multimerchant payments

- [multiTokenContexts](pkpaymentrequest/multitokencontexts.md): An array of payment token contexts to request multiple payment tokens with one payment token per context.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

### Requesting billing and shipping contact fields

- [requiredBillingContactFields](pkpaymentrequest/requiredbillingcontactfields.md): A list of fields that you need for a billing contact to process the transaction.
- [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.
- [PKContactField](pkcontactfield.md): The fields that describe a contact.

### Providing known contact information

- [billingContact](pkpaymentrequest/billingcontact.md): A prepopulated billing address.
- [shippingContact](pkpaymentrequest/shippingcontact.md): A prepopulated shipping address.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

### Working with coupon codes

- [couponCode](pkpaymentrequest/couponcode.md): The initial coupon code for the payment request.
- [supportsCouponCode](pkpaymentrequest/supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.

### Adding custom data

- [applicationData](pkpaymentrequest/applicationdata.md): Application-specific data or state.

### Providing error information

Create common payment errors using these simple convenience functions.

- [paymentBillingAddressInvalidError(withKey:localizedDescription:)](pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentContactInvalidError(withContactField:localizedDescription:)](pkpaymentrequest/paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a contact error with the supplied field and user-facing error message.
- [paymentShippingAddressInvalidError(withKey:localizedDescription:)](pkpaymentrequest/paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a shipping address error with the supplied key and user-facing error message.
- [paymentShippingAddressUnserviceableError(withLocalizedDescription:)](pkpaymentrequest/paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidError(localizedDescription:)](pkpaymentrequest/paymentcouponcodeinvaliderror%28localizeddescription_%29.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredError(localizedDescription:)](pkpaymentrequest/paymentcouponcodeexpirederror%28localizeddescription_%29.md): Returns an error object that indicates an expired coupon.

### Deprecated

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [enabled](pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](pkpaymentrequest/requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](pkpaymentrequest/requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](pkpaymentrequest/billingaddress.md): Deprecated. A prepopulated billing address.
- [shippingAddress](pkpaymentrequest/shippingaddress.md): Deprecated. A prepopulated shipping address.

### Enumerations

- [PKPaymentRequest.ApplePayLaterAvailability](pkpaymentrequest/applepaylateravailability-swift.enum.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.

### Instance Properties

- [attributionIdentifier](pkpaymentrequest/attributionidentifier.md)
- [isDelegatedRequest](pkpaymentrequest/isdelegatedrequest.md): A Boolean value that indicates whether this payment request is being made by a delegated entity on behalf of a merchant.
- [merchantCategoryCode](pkpaymentrequest/merchantcategorycode-9kcn6.md)

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

- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

# PKPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a request for payment, including details about payment-processing capabilities, the payment amount, and shipping information.

## Declaration

```objectivec
@interface PKPaymentRequest : NSObject
```

<a id="overview"></a>

## Overview

Use a [PKPaymentRequest](pkpaymentrequest.md) object to represent a merchant request for payment for goods or services. Your app creates a payment request as soon as a person taps the Apple Pay button to make a purchase. Tapping the Apple Pay button in your app initiates the payment request process. If your customers need to enter a discount code, choose a shipping method, or any other task, your app needs to ask for that information *before* they tap the Apple Pay button.

A payment request object contains information that describes the purchase, including information about the merchant, available payment networks, the payment summary, billing and shipping details, coupon codes, custom data, error messages, and more.

A typical payment request is for a one-time payment. To support different types of payment requests, include one of the following options in the payment request object:

| Payment type request | Property to set |
| --- | --- |
| Recurring payments | [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) |
| Automatic reload payments | [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) |
| Deferred payments | [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) |
| Indicating eligibility for Apple Pay Later | [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md) |
| Multiple payment tokens to support for multimerchant payments | [multiTokenContexts](pkpaymentrequest/multitokencontexts.md) |
| Exclude an Apple Pay card from the payment sheet | [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md) |

> **Note**

>  You can set only one optional payment request type on a payment request object.

<a id="Request-a-recurring-payment"></a>

### Request a recurring payment

Use the [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md) property to set up a recurring payment request using the [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md) and [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md) classes. Recurring payments, such as subscriptions, can feature different payment intervals (for example, annually or monthly) and billing cycles, such as regular or trial.

<a id="Request-an-automatic-reload-payment"></a>

### Request an automatic reload payment

Use the [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md) property to set up an automatic reload payment request using the [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md) and [PKAutomaticReloadPaymentSummaryItem](pkautomaticreloadpaymentsummaryitem.md) classes. You can set up automatic reload payments, such as store card top-ups, that feature a balance threshold and a reload amount. The card automatically reloads with the reload amount when the account drops below the balance threshold.

<a id="Request-a-deferred-payment"></a>

### Request a deferred payment

Use the [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md) property to set up a deferred payment request using the [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md) class. Deferred payments include purchases, such as hotel bookings or pre-orders, where the card renders payment at a later date upon the receipt of goods or delivery of services.

<a id="Set-the-Apple-Pay-Later-mode"></a>

### Set the Apple Pay Later mode

Use the [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-3dxrt.md) property to indicate whether this payment request is eligible for Apple Pay Later. You can indicate that Apple Pay Later is unavailable for certain kinds of transactions, including subscriptions, items that require recurring payments or prohibited items, such as gift cards.

<a id="Request-multitoken-or-multimerchant-payments"></a>

### Request multitoken or multimerchant payments

Use the [multiTokenContexts](pkpaymentrequestupdate/multitokencontexts.md) property to request payment data for multimerchant payments with the [PKPaymentTokenContext](pkpaymenttokencontext.md) class. You can set up multitoken transactions to process and display payment requests with multiple merchants on one payment sheet, for example, a booking site where someone pays for a hotel, flight, and car rental from different merchants.

<a id="Exclude-an-Apple-Pay-from-the-payment-sheet"></a>

### Exclude an Apple Pay from the payment sheet

Use the [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md) property to exclude specific Apple Pay cards that you’ve issued from appearing in the payment sheet as a pay option. For example, if a person is topping up a stored value card, you can exclude the card being topped up from the payment options.

## Topics

### Selecting the payment networks

- [availableNetworks](pkpaymentrequest/availablenetworks%28%29.md): Returns the list of available payment methods that Apple Pay supports.
- [supportedNetworks](pkpaymentrequest/supportednetworks.md): The payment methods that you support.
- [PKPaymentNetwork](pkpaymentnetwork.md): A type that represents a payment method.

### Setting merchant information

- [PKMerchantCategoryCode](pkmerchantcategorycode.md): The optional four-digit type, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [merchantCategoryCode](pkpaymentrequest/merchantcategorycode-7vg6z.md): An optional four-digit property, in ISO 18245 format, that represents the type of goods or service the merchant provides for the transaction.
- [PKMerchantCategoryCodeNone](pkmerchantcategorycodenone.md)
- [merchantIdentifier](pkpaymentrequest/merchantidentifier.md): Your merchant identifier.
- [merchantCapabilities](pkpaymentrequest/merchantcapabilities.md): A bit field of the payment-processing protocols and card types that you support.
- [PKMerchantCapability](pkmerchantcapability.md): Capabilities for processing payment.

### Setting currency and region information

- [currencyCode](pkpaymentrequest/currencycode.md): The three-letter ISO 4217 currency code that determines the currency the payment request uses.
- [supportedCountries](pkpaymentrequest/supportedcountries.md): A list of ISO 3166 country codes to limit payments to cards from specific countries or regions.
- [countryCode](pkpaymentrequest/countrycode.md): The merchant’s two-letter ISO 3166 country code.

### Setting the payment summary items

- [paymentSummaryItems](pkpaymentrequest/paymentsummaryitems.md): An array of payment summary item objects that summarize the amount of the payment.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKRecurringPaymentSummaryItem](pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.
- [PKDeferredPaymentSummaryItem](pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

### Requesting recurring, automatic, and deferred payments

- [recurringPaymentRequest](pkpaymentrequest/recurringpaymentrequest.md): An optional request to set up a recurring payment, typically a subscription.
- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [automaticReloadPaymentRequest](pkpaymentrequest/automaticreloadpaymentrequest.md): An optional request to set up an automatic reload payment, such as a store card top-up.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [deferredPaymentRequest](pkpaymentrequest/deferredpaymentrequest.md): A request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.

### Excluding cards from the payment sheet

- [unsupportedPrimaryAccountIdentifiers](pkpaymentrequest/unsupportedprimaryaccountidentifiers.md): An array of Apple Pay cards to exclude from payment.

### Requesting multitoken or multimerchant payments

- [multiTokenContexts](pkpaymentrequest/multitokencontexts.md): An array of payment token contexts to request multiple payment tokens with one payment token per context.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.

### Requesting billing and shipping contact fields

- [requiredBillingContactFields](pkpaymentrequest/requiredbillingcontactfields.md): A list of fields that you need for a billing contact to process the transaction.
- [requiredShippingContactFields](pkpaymentrequest/requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.
- [PKContactField](pkcontactfield.md): The fields that describe a contact.

### Providing known contact information

- [billingContact](pkpaymentrequest/billingcontact.md): A prepopulated billing address.
- [shippingContact](pkpaymentrequest/shippingcontact.md): A prepopulated shipping address.
- [PKContact](pkcontact.md): An object that encapsulates contact information needed for billing and shipping.

### Setting the shipping methods and types

- [Displaying a Read-Only Pickup Address](displaying-a-read-only-pickup-address.md): Configure a payment request to display a read-only pickup address on the payment sheet.
- [shippingMethods](pkpaymentrequest/shippingmethods.md): An array of shipping method objects that describe the supported shipping methods.
- [PKShippingMethod](pkshippingmethod.md): An object that defines a shipping method for delivering physical goods.
- [shippingType](pkpaymentrequest/shippingtype.md): The type of shipping the request uses.
- [shippingContactEditingMode](pkpaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [PKShippingType](pkshippingtype.md): A complete list of valid shipping types.
- [PKShippingContactEditingMode](pkshippingcontacteditingmode.md): Constants that indicate whether the shipping mode prevents the user from editing fields of the shipping address.

### Working with coupon codes

- [couponCode](pkpaymentrequest/couponcode.md): The initial coupon code for the payment request.
- [supportsCouponCode](pkpaymentrequest/supportscouponcode.md): A Boolean value that determines whether the payment sheet displays the coupon code field.

### Adding custom data

- [applicationData](pkpaymentrequest/applicationdata.md): Application-specific data or state.

### Providing error information

Create common payment errors using these simple convenience functions.

- [paymentBillingAddressInvalidErrorWithKey:localizedDescription:](pkpaymentrequest/paymentbillingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a billing address error with the supplied key and user-facing error message.
- [paymentContactInvalidErrorWithContactField:localizedDescription:](pkpaymentrequest/paymentcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a contact error with the supplied field and user-facing error message.
- [paymentShippingAddressInvalidErrorWithKey:localizedDescription:](pkpaymentrequest/paymentshippingaddressinvaliderror%28withkey_localizeddescription_%29.md): Creates a shipping address error with the supplied key and user-facing error message.
- [paymentShippingAddressUnserviceableErrorWithLocalizedDescription:](pkpaymentrequest/paymentshippingaddressunserviceableerror%28withlocalizeddescription_%29.md): Creates an error for an unserviceable address, with the supplied user-facing error message.
- [paymentCouponCodeInvalidErrorWithLocalizedDescription:](pkpaymentrequest/paymentcouponcodeinvaliderrorwithlocalizeddescription_.md): Returns an error object that indicates an invalid coupon.
- [paymentCouponCodeExpiredErrorWithLocalizedDescription:](pkpaymentrequest/paymentcouponcodeexpirederrorwithlocalizeddescription_.md): Returns an error object that indicates an expired coupon.

### Deprecated

- [PKShippingContactEditingModeEnabled](pkshippingcontacteditingmode/enabled.md): Deprecated. All fields of the shipping contact on the payment sheet are editable by the user.
- [requiredBillingAddressFields](pkpaymentrequest/requiredbillingaddressfields.md): Deprecated. A bit field of billing address fields that you need in order to process the transaction.
- [requiredShippingAddressFields](pkpaymentrequest/requiredshippingaddressfields.md): Deprecated. A bit field of shipping address fields that you need in order to process the transaction.
- [PKAddressField](pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [billingAddress](pkpaymentrequest/billingaddress.md): Deprecated. A prepopulated billing address.
- [shippingAddress](pkpaymentrequest/shippingaddress.md): Deprecated. A prepopulated shipping address.

### Instance Properties

- [applePayLaterAvailability](pkpaymentrequest/applepaylateravailability-inpf.md): Deprecated. A value that indicates whether Apple Pay Later is available for a transaction.
- [attributionIdentifier](pkpaymentrequest/attributionidentifier.md)
- [isDelegatedRequest](pkpaymentrequest/isdelegatedrequest.md): A Boolean value that indicates whether this payment request is being made by a delegated entity on behalf of a merchant.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Payment requests

- [PKRecurringPaymentRequest](pkrecurringpaymentrequest.md): A class that represents a request to set up a recurring payment, typically a subscription.
- [PKAutomaticReloadPaymentRequest](pkautomaticreloadpaymentrequest.md): A class that represents a request to set up an automatic reload payment, such as a store card top-up or a prepaid account.
- [PKDeferredPaymentRequest](pkdeferredpaymentrequest.md): An object that represents a request to set up a deferred payment, such as a hotel booking or a pre-order.
- [PKPaymentTokenContext](pkpaymenttokencontext.md): A class that defines the context for a single payment token in a payment request for multimerchant payments.
