> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wktextcontenttype](https://developer.apple.com/documentation/watchkit/wktextcontenttype)

# WKTextContentType (Swift)

**Framework:** WatchKit  
**Kind:** Structure  
**Availability:** watchOS

Constants that specify a text field’s semantic meaning.

## Declaration

```swift
struct WKTextContentType
```

## Topics

### Name

- [name](wktextcontenttype/name.md): A full name.
- [namePrefix](wktextcontenttype/nameprefix.md): A title or prefix for a name.
- [givenName](wktextcontenttype/givenname.md): A given name.
- [middleName](wktextcontenttype/middlename.md): A middle name.
- [familyName](wktextcontenttype/familyname.md): A last name.
- [nameSuffix](wktextcontenttype/namesuffix.md): A suffix for a name.
- [nickname](wktextcontenttype/nickname.md): A nickname.

### Employment

- [jobTitle](wktextcontenttype/jobtitle.md): A job title.
- [organizationName](wktextcontenttype/organizationname.md): An organization’s name.

### Address

- [location](wktextcontenttype/location.md): A point of interest, address, or other identifiable location.
- [fullStreetAddress](wktextcontenttype/fullstreetaddress.md): The full street address for a location, including the unit or suite number.
- [streetAddressLine1](wktextcontenttype/streetaddressline1.md): The first line of a street address.
- [streetAddressLine2](wktextcontenttype/streetaddressline2.md): The second line of a street address.
- [addressCity](wktextcontenttype/addresscity.md): The name of a city.
- [addressState](wktextcontenttype/addressstate.md): The name of a state.
- [addressCityAndState](wktextcontenttype/addresscityandstate.md): The name of a city and state.
- [sublocality](wktextcontenttype/sublocality.md): The sublocality.
- [countryName](wktextcontenttype/countryname.md): The name of a country or region.
- [postalCode](wktextcontenttype/postalcode.md): A postal code.

### Contact Information

- [telephoneNumber](wktextcontenttype/telephonenumber.md): A telephone number.
- [emailAddress](wktextcontenttype/emailaddress.md): An email address.

### Other

- [URL](wktextcontenttype/url.md): A URL.
- [creditCardNumber](wktextcontenttype/creditcardnumber.md): A credit card number.

### Login Credentials

- [username](wktextcontenttype/username.md): An account or login name.
- [password](wktextcontenttype/password.md): An existing password.
- [newPassword](wktextcontenttype/newpassword.md): A new password.
- [oneTimeCode](wktextcontenttype/onetimecode.md): A one-time code.

### Initializers

- [init(rawValue:)](wktextcontenttype/init%28rawvalue_%29.md): Returns a newly instantiated content type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the Content Type

- [setTextContentType(\_:)](wkinterfacetextfield/settextcontenttype%28__%29.md): Sets the text field’s semantic meaning.

# WKTextContentType (Objective-C)

**Framework:** WatchKit  
**Kind:** Type Alias  
**Availability:** watchOS

Constants that specify a text field’s semantic meaning.

## Declaration

```objectivec
typedef NSString * WKTextContentType;
```

## Topics

### Name

- [WKTextContentTypeName](wktextcontenttype/name.md): A full name.
- [WKTextContentTypeNamePrefix](wktextcontenttype/nameprefix.md): A title or prefix for a name.
- [WKTextContentTypeGivenName](wktextcontenttype/givenname.md): A given name.
- [WKTextContentTypeMiddleName](wktextcontenttype/middlename.md): A middle name.
- [WKTextContentTypeFamilyName](wktextcontenttype/familyname.md): A last name.
- [WKTextContentTypeNameSuffix](wktextcontenttype/namesuffix.md): A suffix for a name.
- [WKTextContentTypeNickname](wktextcontenttype/nickname.md): A nickname.

### Employment

- [WKTextContentTypeJobTitle](wktextcontenttype/jobtitle.md): A job title.
- [WKTextContentTypeOrganizationName](wktextcontenttype/organizationname.md): An organization’s name.

### Address

- [WKTextContentTypeLocation](wktextcontenttype/location.md): A point of interest, address, or other identifiable location.
- [WKTextContentTypeFullStreetAddress](wktextcontenttype/fullstreetaddress.md): The full street address for a location, including the unit or suite number.
- [WKTextContentTypeStreetAddressLine1](wktextcontenttype/streetaddressline1.md): The first line of a street address.
- [WKTextContentTypeStreetAddressLine2](wktextcontenttype/streetaddressline2.md): The second line of a street address.
- [WKTextContentTypeAddressCity](wktextcontenttype/addresscity.md): The name of a city.
- [WKTextContentTypeAddressState](wktextcontenttype/addressstate.md): The name of a state.
- [WKTextContentTypeAddressCityAndState](wktextcontenttype/addresscityandstate.md): The name of a city and state.
- [WKTextContentTypeSublocality](wktextcontenttype/sublocality.md): The sublocality.
- [WKTextContentTypeCountryName](wktextcontenttype/countryname.md): The name of a country or region.
- [WKTextContentTypePostalCode](wktextcontenttype/postalcode.md): A postal code.

### Contact Information

- [WKTextContentTypeTelephoneNumber](wktextcontenttype/telephonenumber.md): A telephone number.
- [WKTextContentTypeEmailAddress](wktextcontenttype/emailaddress.md): An email address.

### Other

- [WKTextContentTypeURL](wktextcontenttype/url.md): A URL.
- [WKTextContentTypeCreditCardNumber](wktextcontenttype/creditcardnumber.md): A credit card number.

### Login Credentials

- [WKTextContentTypeUsername](wktextcontenttype/username.md): An account or login name.
- [WKTextContentTypePassword](wktextcontenttype/password.md): An existing password.
- [WKTextContentTypeNewPassword](wktextcontenttype/newpassword.md): A new password.
- [WKTextContentTypeOneTimeCode](wktextcontenttype/onetimecode.md): A one-time code.

## See Also

### Specifying the Content Type

- [setTextContentType:](wkinterfacetextfield/settextcontenttype%28__%29.md): Sets the text field’s semantic meaning.
