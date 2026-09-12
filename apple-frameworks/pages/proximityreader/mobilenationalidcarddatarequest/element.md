> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddatarequest/element](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddatarequest/element)

# MobileNationalIDCardDataRequest.Element

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A type that represents an element you can request from a mobile national ID card.

## Declaration

```swift
struct Element
```

## Topics

### Type Properties

- [age](element/age.md): The mobile national ID card holder’s age in years.
- [dateOfBirth](element/dateofbirth.md): The date of birth of the mobile national ID card holder.
- [documentNumber](element/documentnumber.md): The document’s number, as defined by the document’s issuing authority.
- [familyName](element/familyname.md): The mobile national ID card holder’s family name or last name.
- [givenName](element/givenname.md): The mobile national ID card holder’s given name or first name.
- [name](element/name.md): The mobile national ID card holder’s name.
- [portrait](element/portrait.md): The picture of the mobile national ID card holder on record with the issuer.
- [sex](element/sex.md): The mobile national ID card holder’s sex.

### Type Methods

- [ageAtLeast(\_:)](element/ageatleast%28__%29.md): A Boolean value that indicates whether the mobile national ID card holder’s age is at least the given age.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the request details

- [region](region.md): The region of the document you’re requesting.
- [retainedElements](retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than necessary to process the result in realtime.
