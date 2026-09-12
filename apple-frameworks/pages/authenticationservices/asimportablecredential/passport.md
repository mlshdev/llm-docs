> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/passport](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/passport)

# ASImportableCredential.Passport

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of Passport as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a passport document.

## Declaration

```swift
struct Passport
```

## Topics

### Initializers

- [init(issuingCountry:passportType:passportNumber:nationalIdentificationNumber:nationality:fullName:birthDate:birthPlace:sex:issueDate:expiryDate:issuingAuthority:)](passport/init%28issuingcountry_passporttype_passportnumber_nationalidentificationnumber_nationality_fullname_birthdate_birthplace_sex_issuedate_expirydate_issuingauthority_%29.md)

### Instance Properties

- [birthDate](passport/birthdate.md)
- [birthPlace](passport/birthplace.md)
- [expiryDate](passport/expirydate.md)
- [fullName](passport/fullname.md)
- [issueDate](passport/issuedate.md)
- [issuingAuthority](passport/issuingauthority.md)
- [issuingCountry](passport/issuingcountry.md)
- [nationalIdentificationNumber](passport/nationalidentificationnumber.md)
- [nationality](passport/nationality.md)
- [passportNumber](passport/passportnumber.md)
- [passportType](passport/passporttype.md)
- [sex](passport/sex.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
