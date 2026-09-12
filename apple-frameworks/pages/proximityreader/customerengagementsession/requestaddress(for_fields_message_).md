> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/requestaddress(for:fields:message:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/requestaddress(for:fields:message:))

# requestAddress(for:fields:message:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Opens a form so that the customer can share the postal address and additionally collect email address and phone number.

## Declaration

```swift
final func requestAddress(for purpose: CustomerEngagementSession.Purpose? = nil, fields: [CustomerEngagementSession.Field], message: String? = nil) async throws -> CustomerEngagement.Address
```

## Parameters

- `purpose`: An optional enum of pre-defined purpose of the form, for example `.shipping`.
- `fields`: An array of optional contact field types on the form. Only `.emailAddress` and `.phoneNumber` types are supported.
- `message`: A multi-line message text below the title.

<a id="return-value"></a>

## Return Value

[CustomerEngagement.Address](../customerengagement/address.md) with postal address and contact information shared by the customer.

<a id="discussion"></a>

## Discussion

For example, email and phone number can be used for delivery notification.

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails.

## See Also

### Requesting and getting customer information

- [requestCustomerInfo(for:fields:message:)](requestcustomerinfo%28for_fields_message_%29.md): Opens a form so that the customer can share the contact information.
- [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md): Opens a form so that the customer can share the contact information for the purpose of sign-up activity.
- [requestPayment(for:using:delegate:)](requestpayment%28for_using_delegate_%29.md): Opens a form so a customer can select a payment option.
- [CustomerEngagementSession.Purpose](purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
