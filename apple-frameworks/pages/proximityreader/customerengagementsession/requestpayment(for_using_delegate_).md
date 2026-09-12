> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/requestpayment(for:using:delegate:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/requestpayment(for:using:delegate:))

# requestPayment(for:using:delegate:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Opens a form so a customer can select a payment option.

## Declaration

```swift
final func requestPayment(for shoppingCartToken: CustomerEngagement.ShoppingCartToken, using paymentRequest: PKPaymentRequest, delegate: any PKPaymentAuthorizationControllerDelegate) async throws -> Bool
```

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

## See Also

### Requesting and getting customer information

- [requestCustomerInfo(for:fields:message:)](requestcustomerinfo%28for_fields_message_%29.md): Opens a form so that the customer can share the contact information.
- [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md): Opens a form so that the customer can share the contact information for the purpose of sign-up activity.
- [requestAddress(for:fields:message:)](requestaddress%28for_fields_message_%29.md): Opens a form so that the customer can share the postal address and additionally collect email address and phone number.
- [CustomerEngagementSession.Purpose](purpose.md): The purpose of a customer information request.
- [CustomerEngagementSession.Field](field.md): The contact information field in a customer request form.
- [CustomerEngagementSession.ConsentOption](consentoption.md): An option on the sign-up form to receive promotional emails and text messages.
