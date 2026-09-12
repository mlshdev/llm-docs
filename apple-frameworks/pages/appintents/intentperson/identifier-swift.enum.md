> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/identifier-swift.enum](https://developer.apple.com/documentation/appintents/intentperson/identifier-swift.enum)

# IntentPerson.Identifier

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that manages a unique identifier for a person.

## Declaration

```swift
enum Identifier
```

## Topics

### Getting the identifier types

- [IntentPerson.Identifier.contact(\_:)](identifier-swift.enum/contact%28__%29.md): An identifier from the Contacts framework (see `CNContact.identifier`)
- [IntentPerson.Identifier.applicationDefined(\_:)](identifier-swift.enum/applicationdefined%28__%29.md): An identifier specific to your app

### Enumeration Cases

- [IntentPerson.Identifier.unknown](identifier-swift.enum/unknown.md): Unknown identifier, as in the case where the `IntentPerson` simply wraps a `Handle`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting person-related identifiers

- [identifier](identifier-swift.property.md)
