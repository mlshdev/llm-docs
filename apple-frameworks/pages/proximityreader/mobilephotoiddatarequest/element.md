> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoiddatarequest/element](https://developer.apple.com/documentation/proximityreader/mobilephotoiddatarequest/element)

# MobilePhotoIDDataRequest.Element

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that represents an element you can request from a photo ID.

## Declaration

```swift
struct Element
```

## Topics

### Type Properties

- [address](element/address.md): The photo ID holder’s address on record with the issuer.
- [age](element/age.md): The photo ID holder’s age in years.
- [dateOfBirth](element/dateofbirth.md): The date of birth of the photo ID holder.
- [documentExpirationDate](element/documentexpirationdate.md): The document’s expiration date.
- [documentIssueDate](element/documentissuedate.md): The document’s issue date.
- [documentNumber](element/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [familyName](element/familyname.md): The photo ID holder’s family name or last name.
- [givenName](element/givenname.md): The photo ID holder’s given name or first name.
- [issuingAuthority](element/issuingauthority.md): The state or government that issued the identity document.
- [name](element/name.md): The photo ID holder’s name.
- [portrait](element/portrait.md): The picture of the photo ID holder on record with the issuer.
- [sex](element/sex.md): The photo ID holder’s sex.

### Type Methods

- [ageAtLeast(\_:)](element/ageatleast%28__%29.md): A Boolean value that indicates whether the photo ID holder’s age is at least the given age.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a data request

- [init(retainedElements:nonRetainedElements:)](init%28retainedelements_nonretainedelements_%29.md): Returns a photo ID data request.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
