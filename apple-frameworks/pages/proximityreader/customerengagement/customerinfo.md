> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagement/customerinfo](https://developer.apple.com/documentation/proximityreader/customerengagement/customerinfo)

# CustomerEngagement.CustomerInfo

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A response structure that describes customer information.

## Declaration

```swift
struct CustomerInfo
```

<a id="overview"></a>

## Overview

If none of the customer information is available, this structure can return with all the values being nil

Contact information and Wallet pass data shared by a customer during an engagement session.

You receive a `CustomerInfo` value when                    [requestCustomerInfo(for:fields:message:)](../customerengagementsession/requestcustomerinfo%28for_fields_message_%29.md) successfully completes. Each property is non`nil` only if you included the corresponding [CustomerEngagementSession.Field](../customerengagementsession/field.md) in the request and the customer chose to share it.

## Topics

### Getting customer information details

- [barcodeMessage](customerinfo/barcodemessage.md): A message for the barcode.
- [customerVASData](customerinfo/customervasdata.md): The encrypted VAS content of a selected Wallet pass.
- [emailAddress](customerinfo/emailaddress.md): The customer’s email address or Hide My Email address if supported.
- [phoneNumber](customerinfo/phonenumber.md): The customer’s phone number, if provided.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting customer information

- [CustomerEngagement.Address](address.md): A customer’s address collected during a customer engagement session.
- [CustomerEngagement.SignUp](signup.md): Contact information and marketing consent selections a customer provides during a sign-up request.
- [CustomerEngagement.ShoppingCart](shoppingcart.md): A structure that describes the shopping cart content.
