> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/signup](https://developer.apple.com/documentation/proximityreader/customerengagement/signup)

# CustomerEngagement.SignUp

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Contact information and marketing consent selections a customer provides during a sign-up request.

## Declaration

```swift
struct SignUp
```

<a id="overview"></a>

## Overview

You receive a `SignUp` value when [requestSignup(for:fields:message:emailConsent:smsConsent:termsAndConditions:)](../customerengagementsession/requestsignup%28for_fields_message_emailconsent_smsconsent_termsandconditions_%29.md) completes successfully. The [name](signup/name.md), [phoneNumber](signup/phonenumber.md), and [emailAddress](signup/emailaddress.md) properties are non`nil` only if you included the corresponding [CustomerEngagementSession.Field](../customerengagementsession/field.md) in the request and the customer chose to share it.

## Topics

### Getting sign-up details

- [emailAddress](signup/emailaddress.md): The customer’s email address
- [emailOptInSelection](signup/emailoptinselection.md): A Boolean value that indicates if the customer opted-in to email marketing.
- [name](signup/name.md): The customer’s full name.
- [phoneNumber](signup/phonenumber.md): The customer’s phone number.
- [smsOptInSelection](signup/smsoptinselection.md): A Boolean value that indicates if the customer opted-in to SMS marketing.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting customer information

- [CustomerEngagement.Address](address.md): A customer’s address collected during a customer engagement session.
- [CustomerEngagement.CustomerInfo](customerinfo.md): A response structure that describes customer information.
- [CustomerEngagement.ShoppingCart](shoppingcart.md): A structure that describes the shopping cart content.
