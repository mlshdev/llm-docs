> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoiddatarequest/response/documentelements-swift.struct](https://developer.apple.com/documentation/proximityreader/mobilephotoiddatarequest/response/documentelements-swift.struct)

# MobilePhotoIDDataRequest.Response.DocumentElements

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that contains the document elements from a successful photo ID data request.

## Declaration

```swift
struct DocumentElements
```

## Topics

### Structures

- [MobilePhotoIDDataRequest.Response.DocumentElements.IssuingAuthority](documentelements-swift.struct/issuingauthority-swift.struct.md): A type that represents the state or government that issued the identity document.

### Instance Properties

- [address](documentelements-swift.struct/address.md): The photo ID holder’s address on record with the issuer.
- [age](documentelements-swift.struct/age.md): The photo ID holder’s age in years.
- [ageAtLeastElements](documentelements-swift.struct/ageatleastelements.md): A dictionary of values that indicate whether the document holder is at least the specified age.
- [dateOfBirth](documentelements-swift.struct/dateofbirth.md): The date of birth of the photo ID holder.
- [documentExpirationDate](documentelements-swift.struct/documentexpirationdate.md): The document’s expiration date.
- [documentIssueDate](documentelements-swift.struct/documentissuedate.md): The document’s issue date.
- [documentNumber](documentelements-swift.struct/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [issuingAuthority](documentelements-swift.struct/issuingauthority-swift.property.md): The state or government that issued the identity document.
- [name](documentelements-swift.struct/name.md): The photo ID holder’s name.
- [nameComponents](documentelements-swift.struct/namecomponents.md): Deprecated. The photo ID holder’s name components.
- [portraitData](documentelements-swift.struct/portraitdata.md): The portrait data of the photo ID holder on record with the issuer.
- [sex](documentelements-swift.struct/sex-swift.property.md): The photo ID holder’s sex.

### Enumerations

- [MobilePhotoIDDataRequest.Response.DocumentElements.Sex](documentelements-swift.struct/sex-swift.enum.md): A type that represents the photo ID holder’s sex.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
