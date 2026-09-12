> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicensedatarequest/element](https://developer.apple.com/documentation/proximityreader/mobiledriverslicensedatarequest/element)

# MobileDriversLicenseDataRequest.Element

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A type that represents an element you can request from a mobile driver’s license.

## Declaration

```swift
struct Element
```

## Topics

### Type Properties

- [address](element/address.md): The mobile driver’s license holder’s address on record with the issuer.
- [age](element/age.md): The mobile driver’s license holder’s age in years.
- [dateOfBirth](element/dateofbirth.md): The date of birth of the mobile driver’s license holder.
- [documentDHSComplianceStatus](element/documentdhscompliancestatus.md): The document’s DHS (U.S. Department of Homeland Security) compliance status.
- [documentExpirationDate](element/documentexpirationdate.md): The document’s expiration date.
- [documentIssueDate](element/documentissuedate.md): The document’s issue date.
- [documentNumber](element/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [drivingPrivileges](element/drivingprivileges.md): The mobile driver’s license holder’s driving privileges.
- [eyeColor](element/eyecolor.md): The mobile driver’s license holder’s eye color on record with the issuer.
- [familyName](element/familyname.md): The mobile driver’s license holder’s family name or last name.
- [givenName](element/givenname.md): The mobile driver’s license holder’s given name or first name.
- [hairColor](element/haircolor.md): The mobile driver’s license holder’s hair color on record with the issuer.
- [height](element/height.md): The mobile driver’s license holder’s height on record with the issuer.
- [issuingAuthority](element/issuingauthority.md): The state or government that issued the identity document.
- [name](element/name.md): The mobile driver’s license holder’s name.
- [nationality](element/nationality.md): The mobile driver’s license holder’s nationality on record with the issuer.
- [organDonorStatus](element/organdonorstatus.md): The mobile driver’s license holder’s organ donor status on record with the issuer.
- [placeOfBirth](element/placeofbirth.md): The mobile driver’s license holder’s birth place on record with the issuer.
- [portrait](element/portrait.md): The picture of the mobile driver’s license holder on record with the issuer.
- [sex](element/sex.md): The mobile driver’s license holder’s sex.
- [signatureUsualMark](element/signatureusualmark.md): The mobile driver’s license holder’s signature or usual mark on record with the issuer.
- [veteranStatus](element/veteranstatus.md): The mobile driver’s license holder’s veteran status on record with the issuer.
- [weight](element/weight.md): The mobile driver’s license holder’s weight on record with the issuer.

### Type Methods

- [ageAtLeast(\_:)](element/ageatleast%28__%29.md): A Boolean value that indicates whether the mobile driver’s license holder’s age is at least the given age.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a mobile driver’s license data request.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
