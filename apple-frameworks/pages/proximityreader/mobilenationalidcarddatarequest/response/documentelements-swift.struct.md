> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddatarequest/response/documentelements-swift.struct](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddatarequest/response/documentelements-swift.struct)

# MobileNationalIDCardDataRequest.Response.DocumentElements

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A type that contains the document elements from a successful mobile national ID card data request.

## Declaration

```swift
struct DocumentElements
```

## Topics

### Instance Properties

- [age](documentelements-swift.struct/age.md): The mobile national ID card holder’s age in years.
- [ageAtLeastElements](documentelements-swift.struct/ageatleastelements.md): A dictionary of values that indicate whether the document holder is at least the specified age.
- [dateOfBirth](documentelements-swift.struct/dateofbirth.md): The date of birth of the mobile national ID card holder.
- [documentNumber](documentelements-swift.struct/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [name](documentelements-swift.struct/name.md): The mobile national ID card holder’s name.
- [nameComponents](documentelements-swift.struct/namecomponents.md): Deprecated. The mobile national ID card holder’s name components.
- [portraitData](documentelements-swift.struct/portraitdata.md): The portrait data of the mobile national ID card holder on record with the issuer.
- [sex](documentelements-swift.struct/sex-swift.property.md): The mobile national ID card holder’s sex.

### Enumerations

- [MobileNationalIDCardDataRequest.Response.DocumentElements.Sex](documentelements-swift.struct/sex-swift.enum.md): A type that represents the mobile national ID card holder’s sex.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
