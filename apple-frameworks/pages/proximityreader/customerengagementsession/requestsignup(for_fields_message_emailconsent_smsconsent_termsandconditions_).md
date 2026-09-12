> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/requestsignup(for:fields:message:emailconsent:smsconsent:termsandconditions:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/requestsignup(for:fields:message:emailconsent:smsconsent:termsandconditions:))

# requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Opens a form so that the customer can share the contact information for the purpose of sign-up activity.

## Declaration

```swift
final func requestSignup(for purpose: CustomerEngagementSession.Purpose = .membership, fields: [CustomerEngagementSession.Field], message: String? = nil, emailConsent: CustomerEngagementSession.ConsentOption = .hidden, smsConsent: CustomerEngagementSession.ConsentOption = .hidden, termsAndConditions: String? = nil) async throws -> CustomerEngagement.SignUp
```

## Parameters

- `purpose`: An enum of pre-defined purpose of the form for `.membership`, `.accountCreation`, and `.accountUpdate`. The default is `.membership`.
- `fields`: An array of contact field types on the form. Only `.emailAddress` and `.phoneNumber` types are supported.
- `message`: A multi-line message text below the title.
- `emailConsent`: A consent option to allow or decline promotions and offers over email channel.
- `smsConsent`: A consent option to allow or decline promotions and offers over SMS channel.
- `termsAndConditions`: An optional markdown string to display during the sign-up flow.

<a id="return-value"></a>

## Return Value

[CustomerEngagement.SignUp](../customerengagement/signup.md) contact information shared by the customer.

<a id="discussion"></a>

## Discussion

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails.

## See Also

### Requesting and getting customer information

- [requestCustomerInfo(for:fields:message:)](requestcustomerinfo%28for_fields_message_%29.md): Opens a form so that the customer can share the contact information.
- [requestAddress(for:fields:message:)](requestaddress%28for_fields_message_%29.md): Opens a form so that the customer can share the postal address and additionally collect email address and phone number.
- [requestPayment(for:using:delegate:)](requestpayment%28for_using_delegate_%29.md): Opens a form so a customer can select a payment option.
- [CustomerEngagementSession.Purpose](purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
