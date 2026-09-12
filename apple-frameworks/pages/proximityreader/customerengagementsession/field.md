> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/field](https://developer.apple.com/documentation/proximityreader/customerengagementsession/field)

# CustomerEngagementSession.Field

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The contact information field in a customer request form.

## Declaration

```swift
enum Field
```

## Topics

### Enumeration Cases

- [CustomerEngagementSession.Field.emailAddress](field/emailaddress.md): A field for the customer’s email address.
- [CustomerEngagementSession.Field.pass](field/pass.md): A field for the customer’s Wallet pass.
- [CustomerEngagementSession.Field.phoneNumber](field/phonenumber.md): A field for the customer’s phone number.

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
- [CustomerEngagementSession.Purpose](purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
