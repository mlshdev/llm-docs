> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicensedisplayrequest/element](https://developer.apple.com/documentation/proximityreader/mobiledriverslicensedisplayrequest/element)

# MobileDriversLicenseDisplayRequest.Element

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

- [age](element/age.md): The mobile driver’s license holder’s age in years.
- [familyName](element/familyname.md): The mobile driver’s license holder’s family name or last name.
- [givenName](element/givenname.md): The mobile driver’s license holder’s given name or first name.
- [name](element/name.md): The mobile driver’s license holder’s name.

### Type Methods

- [ageAtLeast(\_:)](element/ageatleast%28__%29.md): A Boolean value that indicates whether the mobile driver’s license holder’s age is at least the given age.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a display request

- [init(elements:options:)](init%28elements_options_%29.md): Creates a new mobile driver’s license display request.
- [elements](elements.md): The document elements you’re requesting.
