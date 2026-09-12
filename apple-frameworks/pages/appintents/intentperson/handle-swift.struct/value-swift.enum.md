> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/handle-swift.struct/value-swift.enum](https://developer.apple.com/documentation/appintents/intentperson/handle-swift.struct/value-swift.enum)

# IntentPerson.Handle.Value

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that describes the type of contact information in the handle, such as whether it is an email address, or a phone number.

## Declaration

```swift
enum Value
```

## Topics

### Enumeration Cases

- [IntentPerson.Handle.Value.applicationDefined(\_:)](value-swift.enum/applicationdefined%28__%29.md): An application-defined point of contact, such as a username of an a social networking service
- [IntentPerson.Handle.Value.emailAddress(\_:)](value-swift.enum/emailaddress%28__%29.md)
- [IntentPerson.Handle.Value.phoneNumber(\_:)](value-swift.enum/phonenumber%28__%29.md)

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

### Getting the handle’s value

- [value](value-swift.property.md): The string value for this `Handle`, such as the specific phone number or email address
