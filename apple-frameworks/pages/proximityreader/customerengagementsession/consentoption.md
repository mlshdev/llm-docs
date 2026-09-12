> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/consentoption](https://developer.apple.com/documentation/proximityreader/customerengagementsession/consentoption)

# CustomerEngagementSession.ConsentOption

**Framework:** ProximityReader  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An option on the sign-up form to receive promotional emails and text messages.

## Declaration

```swift
enum ConsentOption
```

## Topics

### Enumeration Cases

- [CustomerEngagementSession.ConsentOption.hidden](consentoption/hidden.md): Hides the option.
- [CustomerEngagementSession.ConsentOption.preSelected](consentoption/preselected.md): Shows the customer the receive promotions option with a default preference.
- [CustomerEngagementSession.ConsentOption.visible](consentoption/visible.md): Shows the option with no default selected.

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
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
