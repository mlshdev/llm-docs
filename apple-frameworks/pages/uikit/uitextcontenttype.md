> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextcontenttype](https://developer.apple.com/documentation/uikit/uitextcontenttype)

# UITextContentType (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that identify the semantic meaning for a text-entry area.

## Declaration

```swift
struct UITextContentType
```

<a id="overview"></a>

## Overview

Use these constants with the [textContentType](uitextinputtraits/textcontenttype.md) property.

## Topics

### Defining web addresses

- [URL](uitextcontenttype/url.md): A property that defines the content in a text input area as a URL.

### Identifying contacts

- [namePrefix](uitextcontenttype/nameprefix.md): A property that defines the content in a text input area as a prefix or title, such as *Dr*.
- [name](uitextcontenttype/name.md): A property that defines the content in a text input area as a name.
- [nameSuffix](uitextcontenttype/namesuffix.md): A property that defines the content in a text input area as a suffix, such as *Jr*.
- [givenName](uitextcontenttype/givenname.md): A property that defines the content in a text input area as a first name.
- [middleName](uitextcontenttype/middlename.md): A property that defines the content in a text input area as a middle name.
- [familyName](uitextcontenttype/familyname.md): A property that defines the content in a text input area as a family name, or last name.
- [nickname](uitextcontenttype/nickname.md): A property that defines the content in a text input area as a nickname.
- [organizationName](uitextcontenttype/organizationname.md): A property that defines the content in a text input area as an organization name.
- [jobTitle](uitextcontenttype/jobtitle.md): A property that defines the content in a text input area as a job title.

### Setting location data

- [location](uitextcontenttype/location.md): A property that defines the content in a text input area as a location, such as a point of interest, an address, or another identifier for a location.
- [fullStreetAddress](uitextcontenttype/fullstreetaddress.md): A property that defines the content in a text input area as a street address that fully identifies a location.
- [streetAddressLine1](uitextcontenttype/streetaddressline1.md): A property that defines the content in a text input area as the first line of a street address.
- [streetAddressLine2](uitextcontenttype/streetaddressline2.md): A property that defines the content in a text input area as the second line of a street address.
- [addressCity](uitextcontenttype/addresscity.md): A property that defines the content in a text input area as a city name.
- [addressCityAndState](uitextcontenttype/addresscityandstate.md): A property that defines the content in a text input area as a city name with a state name.
- [addressState](uitextcontenttype/addressstate.md): A property that defines the content in a text input area as a state name.
- [postalCode](uitextcontenttype/postalcode.md): A property that defines the content in a text input area as a postal code.
- [sublocality](uitextcontenttype/sublocality.md): A property that defines the content in a text input area as a sublocality.
- [countryName](uitextcontenttype/countryname.md): A property that defines the content in a text input area as a country or region name.

### Managing accounts

- [username](uitextcontenttype/username.md): A property that defines the content in a text input area as an account or login name.
- [password](uitextcontenttype/password.md): A property that defines the content in a text input area as a password.
- [newPassword](uitextcontenttype/newpassword.md): A property that defines the content in a text input area as a new password.

### Securing accounts

- [oneTimeCode](uitextcontenttype/onetimecode.md): A property that defines the content in a text input area as a one-time code.

### Setting communication details

- [emailAddress](uitextcontenttype/emailaddress.md): A property that defines the content in a text input area as an email address.
- [telephoneNumber](uitextcontenttype/telephonenumber.md): A property that defines the content in a text input area as a telephone number.
- [cellularEID](uitextcontenttype/cellulareid.md): A property that defines the content in a text input area to contain an embedded identity document number for an eSIM.
- [cellularIMEI](uitextcontenttype/cellularimei.md): A property that defines the content in a text input area to contain the device’s primary International Mobile Equipment Identity (IMEI) number for an eSIM.
- [cellularIMEI1](uitextcontenttype/cellularimei1.md): A property that defines the content in a text input area to contain the International Mobile Equipment Identity (IMEI) for an eSIM.
- [cellularIMEI2](uitextcontenttype/cellularimei2.md): A property that defines the content in a text input area to contain the second International Mobile Equipment Identity (IMEI) for an eSIM.
- [cellularNAL](uitextcontenttype/cellularnal.md): A property that defines the content in a text input area for use when activating a SIM, and applies only to China.

### Accepting payment

- [creditCardNumber](uitextcontenttype/creditcardnumber.md): A property that defines the content in a text input area as a credit card number.
- [creditCardExpiration](uitextcontenttype/creditcardexpiration.md): A property that defines the content in a text input area as an expiration date on a credit card.
- [creditCardExpirationMonth](uitextcontenttype/creditcardexpirationmonth.md): A property that defines the content in a text input area as the month component of an expiration date on a credit card.
- [creditCardExpirationYear](uitextcontenttype/creditcardexpirationyear.md): A property that defines the content in a text input area as the year component of an expiration date on a credit card.
- [creditCardSecurityCode](uitextcontenttype/creditcardsecuritycode.md): A property that defines the content in a text input area as a credit card security code.
- [creditCardType](uitextcontenttype/creditcardtype.md): A property that defines the content in a text input area as a credit card type.
- [creditCardName](uitextcontenttype/creditcardname.md): A property that defines the content in a text input area as a name on a credit card.
- [creditCardGivenName](uitextcontenttype/creditcardgivenname.md): A property that defines the content in a text input area as a first name on a credit card.
- [creditCardMiddleName](uitextcontenttype/creditcardmiddlename.md): A property that defines the content in a text input area as a middle name on a credit card.
- [creditCardFamilyName](uitextcontenttype/creditcardfamilyname.md): A property that defines the content in a text input area as a family name, or last name, on a credit card.

### Getting birthday information

- [birthdate](uitextcontenttype/birthdate.md): A property that defines the content in a text input area as a date of birth.
- [birthdateDay](uitextcontenttype/birthdateday.md): A property that defines the content in a text input area as the day component of a birthdate.
- [birthdateMonth](uitextcontenttype/birthdatemonth.md): A property that defines the content in a text input area as the month component of a birthdate.
- [birthdateYear](uitextcontenttype/birthdateyear.md): A property that defines the content in a text input area as the year component of a birthdate.

### Scheduling events

- [dateTime](uitextcontenttype/datetime.md): A property that defines the content in a text input area as a date, time, or duration.

### Tracking events

- [flightNumber](uitextcontenttype/flightnumber.md): A property that defines the content in a text input area as an airline flight number.
- [shipmentTrackingNumber](uitextcontenttype/shipmenttrackingnumber.md): A property that defines the content in a text input area as a parcel tracking number.

### Creating a text content type

- [init(rawValue:)](uitextcontenttype/init%28rawvalue_%29.md): Creates a text content type with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.

# UITextContentType (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that identify the semantic meaning for a text-entry area.

## Declaration

```objectivec
typedef NSString * UITextContentType;
```

<a id="overview"></a>

## Overview

Use these constants with the [textContentType](uitextinputtraits/textcontenttype.md) property.

## Topics

### Defining web addresses

- [UITextContentTypeURL](uitextcontenttype/url.md): A property that defines the content in a text input area as a URL.

### Identifying contacts

- [UITextContentTypeNamePrefix](uitextcontenttype/nameprefix.md): A property that defines the content in a text input area as a prefix or title, such as *Dr*.
- [UITextContentTypeName](uitextcontenttype/name.md): A property that defines the content in a text input area as a name.
- [UITextContentTypeNameSuffix](uitextcontenttype/namesuffix.md): A property that defines the content in a text input area as a suffix, such as *Jr*.
- [UITextContentTypeGivenName](uitextcontenttype/givenname.md): A property that defines the content in a text input area as a first name.
- [UITextContentTypeMiddleName](uitextcontenttype/middlename.md): A property that defines the content in a text input area as a middle name.
- [UITextContentTypeFamilyName](uitextcontenttype/familyname.md): A property that defines the content in a text input area as a family name, or last name.
- [UITextContentTypeNickname](uitextcontenttype/nickname.md): A property that defines the content in a text input area as a nickname.
- [UITextContentTypeOrganizationName](uitextcontenttype/organizationname.md): A property that defines the content in a text input area as an organization name.
- [UITextContentTypeJobTitle](uitextcontenttype/jobtitle.md): A property that defines the content in a text input area as a job title.

### Setting location data

- [UITextContentTypeLocation](uitextcontenttype/location.md): A property that defines the content in a text input area as a location, such as a point of interest, an address, or another identifier for a location.
- [UITextContentTypeFullStreetAddress](uitextcontenttype/fullstreetaddress.md): A property that defines the content in a text input area as a street address that fully identifies a location.
- [UITextContentTypeStreetAddressLine1](uitextcontenttype/streetaddressline1.md): A property that defines the content in a text input area as the first line of a street address.
- [UITextContentTypeStreetAddressLine2](uitextcontenttype/streetaddressline2.md): A property that defines the content in a text input area as the second line of a street address.
- [UITextContentTypeAddressCity](uitextcontenttype/addresscity.md): A property that defines the content in a text input area as a city name.
- [UITextContentTypeAddressCityAndState](uitextcontenttype/addresscityandstate.md): A property that defines the content in a text input area as a city name with a state name.
- [UITextContentTypeAddressState](uitextcontenttype/addressstate.md): A property that defines the content in a text input area as a state name.
- [UITextContentTypePostalCode](uitextcontenttype/postalcode.md): A property that defines the content in a text input area as a postal code.
- [UITextContentTypeSublocality](uitextcontenttype/sublocality.md): A property that defines the content in a text input area as a sublocality.
- [UITextContentTypeCountryName](uitextcontenttype/countryname.md): A property that defines the content in a text input area as a country or region name.

### Managing accounts

- [UITextContentTypeUsername](uitextcontenttype/username.md): A property that defines the content in a text input area as an account or login name.
- [UITextContentTypePassword](uitextcontenttype/password.md): A property that defines the content in a text input area as a password.
- [UITextContentTypeNewPassword](uitextcontenttype/newpassword.md): A property that defines the content in a text input area as a new password.

### Securing accounts

- [UITextContentTypeOneTimeCode](uitextcontenttype/onetimecode.md): A property that defines the content in a text input area as a one-time code.

### Setting communication details

- [UITextContentTypeEmailAddress](uitextcontenttype/emailaddress.md): A property that defines the content in a text input area as an email address.
- [UITextContentTypeTelephoneNumber](uitextcontenttype/telephonenumber.md): A property that defines the content in a text input area as a telephone number.
- [UITextContentTypeCellularEID](uitextcontenttype/cellulareid.md): A property that defines the content in a text input area to contain an embedded identity document number for an eSIM.
- [UITextContentTypeCellularIMEI](uitextcontenttype/cellularimei.md): A property that defines the content in a text input area to contain the device’s primary International Mobile Equipment Identity (IMEI) number for an eSIM.
- [UITextContentTypeCellularIMEI1](uitextcontenttype/cellularimei1.md): A property that defines the content in a text input area to contain the International Mobile Equipment Identity (IMEI) for an eSIM.
- [UITextContentTypeCellularIMEI2](uitextcontenttype/cellularimei2.md): A property that defines the content in a text input area to contain the second International Mobile Equipment Identity (IMEI) for an eSIM.
- [UITextContentTypeCellularNAL](uitextcontenttype/cellularnal.md): A property that defines the content in a text input area for use when activating a SIM, and applies only to China.

### Accepting payment

- [UITextContentTypeCreditCardNumber](uitextcontenttype/creditcardnumber.md): A property that defines the content in a text input area as a credit card number.
- [UITextContentTypeCreditCardExpiration](uitextcontenttype/creditcardexpiration.md): A property that defines the content in a text input area as an expiration date on a credit card.
- [UITextContentTypeCreditCardExpirationMonth](uitextcontenttype/creditcardexpirationmonth.md): A property that defines the content in a text input area as the month component of an expiration date on a credit card.
- [UITextContentTypeCreditCardExpirationYear](uitextcontenttype/creditcardexpirationyear.md): A property that defines the content in a text input area as the year component of an expiration date on a credit card.
- [UITextContentTypeCreditCardSecurityCode](uitextcontenttype/creditcardsecuritycode.md): A property that defines the content in a text input area as a credit card security code.
- [UITextContentTypeCreditCardType](uitextcontenttype/creditcardtype.md): A property that defines the content in a text input area as a credit card type.
- [UITextContentTypeCreditCardName](uitextcontenttype/creditcardname.md): A property that defines the content in a text input area as a name on a credit card.
- [UITextContentTypeCreditCardGivenName](uitextcontenttype/creditcardgivenname.md): A property that defines the content in a text input area as a first name on a credit card.
- [UITextContentTypeCreditCardMiddleName](uitextcontenttype/creditcardmiddlename.md): A property that defines the content in a text input area as a middle name on a credit card.
- [UITextContentTypeCreditCardFamilyName](uitextcontenttype/creditcardfamilyname.md): A property that defines the content in a text input area as a family name, or last name, on a credit card.

### Getting birthday information

- [UITextContentTypeBirthdate](uitextcontenttype/birthdate.md): A property that defines the content in a text input area as a date of birth.
- [UITextContentTypeBirthdateDay](uitextcontenttype/birthdateday.md): A property that defines the content in a text input area as the day component of a birthdate.
- [UITextContentTypeBirthdateMonth](uitextcontenttype/birthdatemonth.md): A property that defines the content in a text input area as the month component of a birthdate.
- [UITextContentTypeBirthdateYear](uitextcontenttype/birthdateyear.md): A property that defines the content in a text input area as the year component of a birthdate.

### Scheduling events

- [UITextContentTypeDateTime](uitextcontenttype/datetime.md): A property that defines the content in a text input area as a date, time, or duration.

### Tracking events

- [UITextContentTypeFlightNumber](uitextcontenttype/flightnumber.md): A property that defines the content in a text input area as an airline flight number.
- [UITextContentTypeShipmentTrackingNumber](uitextcontenttype/shipmenttrackingnumber.md): A property that defines the content in a text input area as a parcel tracking number.

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.
