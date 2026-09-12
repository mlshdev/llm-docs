> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaycontactfield](https://developer.apple.com/documentation/applepayontheweb/applepaycontactfield)

# ApplePayContactField

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Enumeration  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Field names for requesting contact information in a payment request.

## Declaration

```
enum ApplePayContactField
```

## Mentioned In

- [Apple Pay on the Web Version 3 Release Notes](apple-pay-on-the-web-version-3-release-notes.md)

<a id="overview"></a>

## Overview

Contact field values (available in all versions of the API):

`"email"`

`"name"`

`"phone"`

`"postalAddress"`

Contact field values available starting in API version 3:\`\`

`"phoneticName"`

## Topics

### Enumeration Cases

- [email](applepaycontactfield/email.md)
- [name](applepaycontactfield/name.md)
- [phone](applepaycontactfield/phone.md)
- [phoneticName](applepaycontactfield/phoneticname.md)
- [postalAddress](applepaycontactfield/postaladdress.md)

## See Also

### Requesting billing and shipping contact information

- [requiredBillingContactFields](applepaypaymentrequest/requiredbillingcontactfields.md): The fields of billing information the user must provide to process the transaction.
- [requiredShippingContactFields](applepaypaymentrequest/requiredshippingcontactfields.md): The fields of shipping information the user must provide to fulfill the order.
- [shippingContactEditingMode](applepaypaymentrequest/shippingcontacteditingmode.md): A value that indicates whether the shipping mode prevents the user from editing the shipping address.
- [ApplePayShippingContactEditingMode](applepayshippingcontacteditingmode.md): Values that indicate whether the shipping mode prevents the user from editing fields of the shipping address.
