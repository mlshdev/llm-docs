> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest/element](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/element)

# MobileDocumentDisplayRequest.Element

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that represents an element you can request from a mobile document.

## Declaration

```swift
struct Element
```

## Topics

### Type Properties

- [age](element/age.md): The mobile document holder’s age in years.
- [familyName](element/familyname.md): The mobile document holder’s family name or last name.
- [givenName](element/givenname.md): The mobile document holder’s given name or first name.
- [name](element/name.md): The mobile document holder’s name.

### Type Methods

- [ageAtLeast(\_:)](element/ageatleast%28__%29.md): A Boolean value that indicates whether the mobile document holder’s age is at least the given age.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a display request

- [init(elements:options:)](init%28elements_options_%29.md): Creates a new mobile document display request.
