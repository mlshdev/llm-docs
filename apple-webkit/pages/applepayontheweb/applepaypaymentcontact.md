> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applepayontheweb/applepaypaymentcontact](https://developer.apple.com/documentation/applepayontheweb/applepaypaymentcontact)

# ApplePayPaymentContact

**Interface language:** Data

**Framework:** Apple Pay on the Web  
**Kind:** Structure  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

Contact information fields to use for billing and shipping contact information.

## Declaration

```
dictionary ApplePayPaymentContact {
	DOMString phoneNumber;
	DOMString emailAddress;
	DOMString givenName;
	DOMString familyName;
	DOMString phoneticGivenName;
	DOMString phoneticFamilyName;
	sequence <DOMString> addressLines;
	DOMString subLocality;
	DOMString locality;
	DOMString postalCode;
	DOMString subAdministrativeArea;
	DOMString administrativeArea;
	DOMString country;
	DOMString countryCode;
};
```

## Mentioned In

- [Apple Pay on the Web Version 3 Release Notes](apple-pay-on-the-web-version-3-release-notes.md)

<a id="overview"></a>

## Overview

The [phoneticGivenName](applepaypaymentcontact/phoneticgivenname.md) and [phoneticFamilyName](applepaypaymentcontact/phoneticfamilyname.md) fields are available starting in Apple Pay version 3.

## Topics

### Contact properties

- [phoneNumber](applepaypaymentcontact/phonenumber.md): A phone number for the contact.
- [emailAddress](applepaypaymentcontact/emailaddress.md): An email address for the contact.
- [givenName](applepaypaymentcontact/givenname.md): The contact’s given name.
- [familyName](applepaypaymentcontact/familyname.md): The contact’s family name.
- [phoneticGivenName](applepaypaymentcontact/phoneticgivenname.md): The phonetic spelling of the contact’s given name.
- [phoneticFamilyName](applepaypaymentcontact/phoneticfamilyname.md): The phonetic spelling of the contact’s family name.

### Address properties

- [addressLines](applepaypaymentcontact/addresslines.md): The street portion of the address for the contact.
- [subLocality](applepaypaymentcontact/sublocality.md): Additional information associated with the location, typically defined at the city or town level (such as district or neighborhood), in a postal address.
- [locality](applepaypaymentcontact/locality.md): The city for the contact.
- [postalCode](applepaypaymentcontact/postalcode.md): The zip code or postal code, where applicable, for the contact.
- [subAdministrativeArea](applepaypaymentcontact/subadministrativearea.md): The subadministrative area (such as a county or other region) in a postal address.
- [administrativeArea](applepaypaymentcontact/administrativearea.md): The state for the contact.
- [country](applepaypaymentcontact/country.md): The name of the country or region for the contact.
- [countryCode](applepaypaymentcontact/countrycode.md): The contact’s two-letter ISO 3166 country code.

## See Also

### Providing known contact information

- [billingContact](applepaypaymentrequest/billingcontact.md): Billing contact information for the user.
- [shippingContact](applepaypaymentrequest/shippingcontact.md): Shipping contact information for the user.
