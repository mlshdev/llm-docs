> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest](https://developer.apple.com/documentation/passkit/pkdisbursementrequest)

# PKDisbursementRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An object that represents a request to disburse funds from a merchant to an individual.

## Declaration

```swift
class PKDisbursementRequest
```

<a id="overview"></a>

## Overview

Use this object to create a disbursement (payment) request from a merchant to a user account — for example, a withdrawal from an online account.

## Topics

### Initializers

- [init(merchantIdentifier:currency:region:supportedNetworks:merchantCapabilities:summaryItems:)](pkdisbursementrequest/init%28merchantidentifier_currency_region_supportednetworks_merchantcapabilities_summaryitems_%29.md): Creates a disbursement request with the parameters you specify.

### Setting currency and region information

- [currency](pkdisbursementrequest/currency.md): The currency to use for this disbursement.
- [region](pkdisbursementrequest/region.md): The geographic region that describes the location for this disbursement.
- [supportedRegions](pkdisbursementrequest/supportedregions-1cl0f.md): An array of regions that describe the locations to support.

### Setting the summary items

- [summaryItems](pkdisbursementrequest/summaryitems.md): An array of payment summary item objects that the framework presents to people.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.

### Setting custom application data

- [applicationData](pkdisbursementrequest/applicationdata.md): Optional merchant-supplied information about the disbursement request.

### Setting the merchant information

- [merchantIdentifier](pkdisbursementrequest/merchantidentifier.md): A string that identifies the merchant.
- [merchantCapabilities](pkdisbursementrequest/merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.
- [supportedNetworks](pkdisbursementrequest/supportednetworks.md): An array of payment networks the merchant supports.

### Requesting recipient contact fields

- [recipientContact](pkdisbursementrequest/recipientcontact.md): A contact object that describes the recipient.
- [requiredRecipientContactFields](pkdisbursementrequest/requiredrecipientcontactfields.md): An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

### Excluding cards from the payment sheet

- [unsupportedPrimaryAccountIdentifiers](pkdisbursementrequest/unsupportedprimaryaccountidentifiers.md): An array of Apple Pay cards to exclude from payment.

### Handling errors

- [disbursementCardUnsupportedError()](pkdisbursementrequest/disbursementcardunsupportederror%28%29.md): Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.
- [disbursementContactInvalidError(withContactField:localizedDescription:)](pkdisbursementrequest/disbursementcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a recipient contact error with the supplied field.

### Instance Properties

- [isDelegatedRequest](pkdisbursementrequest/isdelegatedrequest.md): A Boolean value that indicates whether this disbursement request is being made by a delegated entity on behalf of a merchant.

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

# PKDisbursementRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An object that represents a request to disburse funds from a merchant to an individual.

## Declaration

```objectivec
@interface PKDisbursementRequest : NSObject
```

<a id="overview"></a>

## Overview

Use this object to create a disbursement (payment) request from a merchant to a user account — for example, a withdrawal from an online account.

## Topics

### Initializers

- [initWithMerchantIdentifier:currencyCode:regionCode:supportedNetworks:merchantCapabilities:summaryItems:](pkdisbursementrequest/initwithmerchantidentifier_currencycode_regioncode_supportednetworks_merchantcapabilities_summaryitems_.md): Creates a new instance of a disbursement request with the merchant identifier, currency and region codes, and other parameters you specify.

### Setting currency and region information

- [currencyCode](pkdisbursementrequest/currencycode.md): The currency code string for this disbursement.
- [regionCode](pkdisbursementrequest/regioncode.md): The merchant’s country code string.
- [supportedRegions](pkdisbursementrequest/supportedregions-j9ug.md): An array of two-letter region codes that describes the regions to support.

### Setting the summary items

- [summaryItems](pkdisbursementrequest/summaryitems.md): An array of payment summary item objects that the framework presents to people.
- [PKPaymentSummaryItem](pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.
- [PKDisbursementSummaryItem](pkdisbursementsummaryitem.md): A summary item that represents a disbursement.
- [PKInstantFundsOutFeeSummaryItem](pkinstantfundsoutfeesummaryitem.md): A summary item that represents a fee for an instant funds out transfer.

### Setting custom application data

- [applicationData](pkdisbursementrequest/applicationdata.md): Optional merchant-supplied information about the disbursement request.

### Setting the merchant information

- [merchantIdentifier](pkdisbursementrequest/merchantidentifier.md): A string that identifies the merchant.
- [merchantCapabilities](pkdisbursementrequest/merchantcapabilities.md): A value that represents the payment-processing capabilities of the merchant.
- [supportedNetworks](pkdisbursementrequest/supportednetworks.md): An array of payment networks the merchant supports.

### Requesting recipient contact fields

- [recipientContact](pkdisbursementrequest/recipientcontact.md): A contact object that describes the recipient.
- [requiredRecipientContactFields](pkdisbursementrequest/requiredrecipientcontactfields.md): An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

### Excluding cards from the payment sheet

- [unsupportedPrimaryAccountIdentifiers](pkdisbursementrequest/unsupportedprimaryaccountidentifiers.md): An array of Apple Pay cards to exclude from payment.

### Handling errors

- [disbursementCardUnsupportedError](pkdisbursementrequest/disbursementcardunsupportederror%28%29.md): Creates an error that indicates that the selected payment pass doesn’t support receiving funds through disbursements.
- [disbursementContactInvalidErrorWithContactField:localizedDescription:](pkdisbursementrequest/disbursementcontactinvaliderror%28withcontactfield_localizeddescription_%29.md): Creates a recipient contact error with the supplied field.

### Instance Properties

- [isDelegatedRequest](pkdisbursementrequest/isdelegatedrequest.md): A Boolean value that indicates whether this disbursement request is being made by a delegated entity on behalf of a merchant.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
