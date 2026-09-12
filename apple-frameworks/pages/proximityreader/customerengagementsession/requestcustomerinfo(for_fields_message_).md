> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/requestcustomerinfo(for:fields:message:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/requestcustomerinfo(for:fields:message:))

# requestCustomerInfo(for:fields:message:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Opens a form so that the customer can share the contact information.

## Declaration

```swift
final func requestCustomerInfo(for purpose: CustomerEngagementSession.Purpose? = nil, fields: [CustomerEngagementSession.Field], message: String? = nil) async throws -> CustomerEngagement.CustomerInfo
```

## Parameters

- `purpose`: An optional enum of pre-defined purpose of the form, for example `.checkIn`. The ```purpose`` parameter supports ```.checkIn`and`.receipt\`.
- `fields`: An array of contact field types on the form.
- `message`: A multi-line message text below the title.

<a id="return-value"></a>

## Return Value

[CustomerEngagement.CustomerInfo](../customerengagement/customerinfo.md) contact information shared by the customer.

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="Discussion"></a>

## Discussion

If the `fields` array contains `pass` and a matching `passTypeIdentifier` , it displays the Wallet pass in full screen for the customer to confirm.

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails. Note: The merchant is responsible for obtaining appropriate consent and maintaining compliant privacy notices for personal information collected through this session.

## See Also

### Requesting and getting customer information

- [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md): Opens a form so that the customer can share the contact information for the purpose of sign-up activity.
- [requestAddress(for:fields:message:)](requestaddress%28for_fields_message_%29.md): Opens a form so that the customer can share the postal address and additionally collect email address and phone number.
- [requestPayment(for:using:delegate:)](requestpayment%28for_using_delegate_%29.md): Opens a form so a customer can select a payment option.
- [CustomerEngagementSession.Purpose](purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
