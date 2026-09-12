> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/name-swift.enum](https://developer.apple.com/documentation/appintents/intentperson/name-swift.enum)

# IntentPerson.Name

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that stores name-related information for a person.

## Declaration

```swift
enum Name
```

## Topics

### Getting a displayable name

- [IntentPerson.Name.displayName(\_:)](name-swift.enum/displayname%28__%29.md): The user-visible display name of this `IntentPerson`.

### Getting the name components

- [IntentPerson.Name.components(\_:)](name-swift.enum/components%28__%29.md): Structured components of this `IntentPerson`’s name

### Enumeration Cases

- [IntentPerson.Name.unknown](name-swift.enum/unknown.md): Unknown name, as in the case where the `IntentPerson` simply wraps a `Handle`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the person’s name

- [name](name-swift.property.md): The name of this `IntentPerson`
