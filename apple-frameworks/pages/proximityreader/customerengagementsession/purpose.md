> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/purpose](https://developer.apple.com/documentation/proximityreader/customerengagementsession/purpose)

# CustomerEngagementSession.Purpose

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The purpose of a customer information request.

## Declaration

```swift
enum Purpose
```

## Topics

### Enumeration Cases

- [CustomerEngagementSession.Purpose.accountCreation](purpose/accountcreation.md): A value indicating the merchant is requesting information for the customer to create an account.
- [CustomerEngagementSession.Purpose.accountUpdate](purpose/accountupdate.md): A value indicating the merchant is requesting information for the customer to update the account.
- [CustomerEngagementSession.Purpose.billing](purpose/billing.md): A value indicating the merchant is requesting billing information.
- [CustomerEngagementSession.Purpose.checkIn](purpose/checkin.md): A value indicating the merchant is requesting contact information for account lookup.
- [CustomerEngagementSession.Purpose.membership](purpose/membership.md): A value indicating the merchant is requesting information for the customer to sign-up for a membership.
- [CustomerEngagementSession.Purpose.receipt](purpose/receipt.md): A value indicating the merchant is requesting contact information for sending the receipt.
- [CustomerEngagementSession.Purpose.shipping](purpose/shipping.md): A value indicating the merchant is requesting shipping information.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting and getting customer information

- [requestCustomerInfo(for:fields:message:)](requestcustomerinfo%28for_fields_message_%29.md): Opens a form so that the customer can share the contact information.
- [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md): Opens a form so that the customer can share the contact information for the purpose of sign-up activity.
- [requestAddress(for:fields:message:)](requestaddress%28for_fields_message_%29.md): Opens a form so that the customer can share the postal address and additionally collect email address and phone number.
- [requestPayment(for:using:delegate:)](requestpayment%28for_using_delegate_%29.md): Opens a form so a customer can select a payment option.
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
