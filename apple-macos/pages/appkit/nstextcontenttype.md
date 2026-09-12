> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontenttype](https://developer.apple.com/documentation/appkit/nstextcontenttype)

# NSTextContentType (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that identify the semantic meaning for a text-entry area.

## Declaration

```swift
struct NSTextContentType
```

<a id="Discussion"></a>

## Discussion

Use these constants with the [contentType](nstextcontent/contenttype.md) property.

## Topics

### Creating a content type

- [init(rawValue:)](nstextcontenttype/init%28rawvalue_%29.md): Creates a new content type with the raw value you provide.

### Defining web addresses

- [URL](nstextcontenttype/url.md): A property that defines the content in a text input area as a URL.

### Identifying contacts

- [namePrefix](nstextcontenttype/nameprefix.md): A property that defines the content in a text input area as a prefix or title, such as *Dr*.
- [name](nstextcontenttype/name.md): A property that defines the content in a text input area as a name.
- [nameSuffix](nstextcontenttype/namesuffix.md): A property that defines the content in a text input area as a suffix, such as *Jr*.
- [givenName](nstextcontenttype/givenname.md): A property that defines the content in a text input area as a first name.
- [middleName](nstextcontenttype/middlename.md): A property that defines the content in a text input area as a middle name.
- [familyName](nstextcontenttype/familyname.md): A property that defines the content in a text input area as a family name, or last name.
- [nickname](nstextcontenttype/nickname.md): A property that defines the content in a text input area as a nickname.
- [organizationName](nstextcontenttype/organizationname.md): A property that defines the content in a text input area as an organization name.
- [jobTitle](nstextcontenttype/jobtitle.md): A property that defines the content in a text input area as a job title.

### Setting location data

- [location](nstextcontenttype/location.md): A property that defines the content in a text input area as a location, such as a point of interest, an address, or another identifier for a location.
- [fullStreetAddress](nstextcontenttype/fullstreetaddress.md): A property that defines the content in a text input area as a street address that fully identifies a location.
- [streetAddressLine1](nstextcontenttype/streetaddressline1.md): A property that defines the content in a text input area as the first line of a street address.
- [streetAddressLine2](nstextcontenttype/streetaddressline2.md): A property that defines the content in a text input area as the second line of a street address.
- [addressCity](nstextcontenttype/addresscity.md): A property that defines the content in a text input area as a city name.
- [addressCityAndState](nstextcontenttype/addresscityandstate.md): A property that defines the content in a text input area as a city name with a state name.
- [addressState](nstextcontenttype/addressstate.md): A property that defines the content in a text input area as a state name.
- [postalCode](nstextcontenttype/postalcode.md): A property that defines the content in a text input area as a postal code.
- [sublocality](nstextcontenttype/sublocality.md): A property that defines the content in a text input area as a sublocality.
- [countryName](nstextcontenttype/countryname.md): A property that defines the content in a text input area as a country or region name.

### Managing accounts

- [username](nstextcontenttype/username.md): A property that defines the content in a text input area as an account or login name.
- [password](nstextcontenttype/password.md): A property that defines the content in a text input area as a password.
- [newPassword](nstextcontenttype/newpassword.md): A property that defines the content in a text input area as a new password.

### Securing accounts

- [oneTimeCode](nstextcontenttype/onetimecode.md): A property that defines the content in a text input area as a one-time code.

### Setting communication details

- [emailAddress](nstextcontenttype/emailaddress.md): A property that defines the content in a text input area as an email address.
- [telephoneNumber](nstextcontenttype/telephonenumber.md): A property that defines the content in a text input area as a telephone number.

### Accepting payment

- [creditCardNumber](nstextcontenttype/creditcardnumber.md): A property that defines the content in a text input area as a credit card number.
- [creditCardExpiration](nstextcontenttype/creditcardexpiration.md): A property that defines the content in a text input area as an expiration date on a credit card.
- [creditCardExpirationMonth](nstextcontenttype/creditcardexpirationmonth.md): A property that defines the content in a text input area as the month component of an expiration date on a credit card.
- [creditCardExpirationYear](nstextcontenttype/creditcardexpirationyear.md): A property that defines the content in a text input area as the year component of an expiration date on a credit card.
- [creditCardSecurityCode](nstextcontenttype/creditcardsecuritycode.md): A property that defines the content in a text input area as a credit card security code.
- [creditCardType](nstextcontenttype/creditcardtype.md): A property that defines the content in a text input area as a credit card type.
- [creditCardName](nstextcontenttype/creditcardname.md): A property that defines the content in a text input area as a name on a credit card.
- [creditCardGivenName](nstextcontenttype/creditcardgivenname.md): A property that defines the content in a text input area as a first name on a credit card.
- [creditCardMiddleName](nstextcontenttype/creditcardmiddlename.md): A property that defines the content in a text input area as a middle name on a credit card.
- [creditCardFamilyName](nstextcontenttype/creditcardfamilyname.md): A property that defines the content in a text input area as a family name, or last name, on a credit card.

### Getting birthday information

- [birthdate](nstextcontenttype/birthdate.md): A property that defines the content in a text input area as a date of birth.
- [birthdateDay](nstextcontenttype/birthdateday.md): A property that defines the content in a text input area as the day component of a birthdate.
- [birthdateMonth](nstextcontenttype/birthdatemonth.md): A property that defines the content in a text input area as the month component of a birthdate.
- [birthdateYear](nstextcontenttype/birthdateyear.md): A property that defines the content in a text input area as the year component of a birthdate.

### Scheduling events

- [dateTime](nstextcontenttype/datetime.md): A property that defines the content in a text input area as a date, time, or duration.

### Tracking events

- [flightNumber](nstextcontenttype/flightnumber.md): A property that defines the content in a text input area as an airline flight number.
- [shipmentTrackingNumber](nstextcontenttype/shipmenttrackingnumber.md): A property that defines the content in a text input area as a parcel tracking number.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying content type

- [contentType](nstextcontent/contenttype.md): The semantic meaning for a text input area.

# NSTextContentType (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants that identify the semantic meaning for a text-entry area.

## Declaration

```objectivec
typedef NSString * NSTextContentType;
```

<a id="Discussion"></a>

## Discussion

Use these constants with the [contentType](nstextcontent/contenttype.md) property.

## Topics

### Defining web addresses

- [NSTextContentTypeURL](nstextcontenttype/url.md): A property that defines the content in a text input area as a URL.

### Identifying contacts

- [NSTextContentTypeNamePrefix](nstextcontenttype/nameprefix.md): A property that defines the content in a text input area as a prefix or title, such as *Dr*.
- [NSTextContentTypeName](nstextcontenttype/name.md): A property that defines the content in a text input area as a name.
- [NSTextContentTypeNameSuffix](nstextcontenttype/namesuffix.md): A property that defines the content in a text input area as a suffix, such as *Jr*.
- [NSTextContentTypeGivenName](nstextcontenttype/givenname.md): A property that defines the content in a text input area as a first name.
- [NSTextContentTypeMiddleName](nstextcontenttype/middlename.md): A property that defines the content in a text input area as a middle name.
- [NSTextContentTypeFamilyName](nstextcontenttype/familyname.md): A property that defines the content in a text input area as a family name, or last name.
- [NSTextContentTypeNickname](nstextcontenttype/nickname.md): A property that defines the content in a text input area as a nickname.
- [NSTextContentTypeOrganizationName](nstextcontenttype/organizationname.md): A property that defines the content in a text input area as an organization name.
- [NSTextContentTypeJobTitle](nstextcontenttype/jobtitle.md): A property that defines the content in a text input area as a job title.

### Setting location data

- [NSTextContentTypeLocation](nstextcontenttype/location.md): A property that defines the content in a text input area as a location, such as a point of interest, an address, or another identifier for a location.
- [NSTextContentTypeFullStreetAddress](nstextcontenttype/fullstreetaddress.md): A property that defines the content in a text input area as a street address that fully identifies a location.
- [NSTextContentTypeStreetAddressLine1](nstextcontenttype/streetaddressline1.md): A property that defines the content in a text input area as the first line of a street address.
- [NSTextContentTypeStreetAddressLine2](nstextcontenttype/streetaddressline2.md): A property that defines the content in a text input area as the second line of a street address.
- [NSTextContentTypeAddressCity](nstextcontenttype/addresscity.md): A property that defines the content in a text input area as a city name.
- [NSTextContentTypeAddressCityAndState](nstextcontenttype/addresscityandstate.md): A property that defines the content in a text input area as a city name with a state name.
- [NSTextContentTypeAddressState](nstextcontenttype/addressstate.md): A property that defines the content in a text input area as a state name.
- [NSTextContentTypePostalCode](nstextcontenttype/postalcode.md): A property that defines the content in a text input area as a postal code.
- [NSTextContentTypeSublocality](nstextcontenttype/sublocality.md): A property that defines the content in a text input area as a sublocality.
- [NSTextContentTypeCountryName](nstextcontenttype/countryname.md): A property that defines the content in a text input area as a country or region name.

### Managing accounts

- [NSTextContentTypeUsername](nstextcontenttype/username.md): A property that defines the content in a text input area as an account or login name.
- [NSTextContentTypePassword](nstextcontenttype/password.md): A property that defines the content in a text input area as a password.
- [NSTextContentTypeNewPassword](nstextcontenttype/newpassword.md): A property that defines the content in a text input area as a new password.

### Securing accounts

- [NSTextContentTypeOneTimeCode](nstextcontenttype/onetimecode.md): A property that defines the content in a text input area as a one-time code.

### Setting communication details

- [NSTextContentTypeEmailAddress](nstextcontenttype/emailaddress.md): A property that defines the content in a text input area as an email address.
- [NSTextContentTypeTelephoneNumber](nstextcontenttype/telephonenumber.md): A property that defines the content in a text input area as a telephone number.

### Accepting payment

- [NSTextContentTypeCreditCardNumber](nstextcontenttype/creditcardnumber.md): A property that defines the content in a text input area as a credit card number.
- [NSTextContentTypeCreditCardExpiration](nstextcontenttype/creditcardexpiration.md): A property that defines the content in a text input area as an expiration date on a credit card.
- [NSTextContentTypeCreditCardExpirationMonth](nstextcontenttype/creditcardexpirationmonth.md): A property that defines the content in a text input area as the month component of an expiration date on a credit card.
- [NSTextContentTypeCreditCardExpirationYear](nstextcontenttype/creditcardexpirationyear.md): A property that defines the content in a text input area as the year component of an expiration date on a credit card.
- [NSTextContentTypeCreditCardSecurityCode](nstextcontenttype/creditcardsecuritycode.md): A property that defines the content in a text input area as a credit card security code.
- [NSTextContentTypeCreditCardType](nstextcontenttype/creditcardtype.md): A property that defines the content in a text input area as a credit card type.
- [NSTextContentTypeCreditCardName](nstextcontenttype/creditcardname.md): A property that defines the content in a text input area as a name on a credit card.
- [NSTextContentTypeCreditCardGivenName](nstextcontenttype/creditcardgivenname.md): A property that defines the content in a text input area as a first name on a credit card.
- [NSTextContentTypeCreditCardMiddleName](nstextcontenttype/creditcardmiddlename.md): A property that defines the content in a text input area as a middle name on a credit card.
- [NSTextContentTypeCreditCardFamilyName](nstextcontenttype/creditcardfamilyname.md): A property that defines the content in a text input area as a family name, or last name, on a credit card.

### Getting birthday information

- [NSTextContentTypeBirthdate](nstextcontenttype/birthdate.md): A property that defines the content in a text input area as a date of birth.
- [NSTextContentTypeBirthdateDay](nstextcontenttype/birthdateday.md): A property that defines the content in a text input area as the day component of a birthdate.
- [NSTextContentTypeBirthdateMonth](nstextcontenttype/birthdatemonth.md): A property that defines the content in a text input area as the month component of a birthdate.
- [NSTextContentTypeBirthdateYear](nstextcontenttype/birthdateyear.md): A property that defines the content in a text input area as the year component of a birthdate.

### Scheduling events

- [NSTextContentTypeDateTime](nstextcontenttype/datetime.md): A property that defines the content in a text input area as a date, time, or duration.

### Tracking events

- [NSTextContentTypeFlightNumber](nstextcontenttype/flightnumber.md): A property that defines the content in a text input area as an airline flight number.
- [NSTextContentTypeShipmentTrackingNumber](nstextcontenttype/shipmenttrackingnumber.md): A property that defines the content in a text input area as a parcel tracking number.

## See Also

### Specifying content type

- [contentType](nstextcontent/contenttype.md): The semantic meaning for a text input area.
