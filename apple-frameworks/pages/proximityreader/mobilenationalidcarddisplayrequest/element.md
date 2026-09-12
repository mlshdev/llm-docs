> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddisplayrequest/element](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddisplayrequest/element)

# MobileNationalIDCardDisplayRequest.Element

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
- [familyName](element/familyname.md): The mobile national ID card holder’s family name or last name.
- [givenName](element/givenname.md): The mobile national ID card holder’s given name or first name.
- [name](element/name.md): The mobile national ID card holder’s name.

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
- [elements](elements.md): The document elements you’re requesting.
- [options](options-swift.property.md): An object that customizes how to perform a display request.
- [MobileNationalIDCardDisplayRequest.Options](options-swift.struct.md): An object that customizes how to perform a display request.
