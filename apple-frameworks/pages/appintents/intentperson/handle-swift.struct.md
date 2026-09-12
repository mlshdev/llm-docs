> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/handle-swift.struct](https://developer.apple.com/documentation/appintents/intentperson/handle-swift.struct)

# IntentPerson.Handle

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that describes a single way to contact a person.

## Declaration

```swift
struct Handle
```

## Topics

### Creating a handle

- [init(emailAddress:label:)](handle-swift.struct/init%28emailaddress_label_%29.md)
- [init(phoneNumber:label:)](handle-swift.struct/init%28phonenumber_label_%29.md)
- [init(identifier:name:handle:aliases:isMe:image:)](init%28identifier_name_handle_aliases_isme_image_%29.md)
- [init(handle:)](init%28handle_%29.md): Initializes an `IntentPerson` from a raw handle, like a phone number or an email address. Use this initializer when the value is not linked to a known contact.
- [init(\_:label:)](handle-swift.struct/init%28__label_%29.md)
- [init(applicationDefined:label:)](handle-swift.struct/init%28applicationdefined_label_%29.md)

### Getting the handle’s label

- [label](handle-swift.struct/label-swift.property.md)
- [IntentPerson.Handle.Label](handle-swift.struct/label-swift.enum.md): A location description that applies to the handle’s content, for example a work or home phone number.

### Getting the handle’s value

- [value](handle-swift.struct/value-swift.property.md): The string value for this `Handle`, such as the specific phone number or email address
- [IntentPerson.Handle.Value](handle-swift.struct/value-swift.enum.md): A type that describes the type of contact information in the handle, such as whether it is an email address, or a phone number.

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

### Getting identifying information

- [handle](handle-swift.property.md): The primary `Handle` used to contact this `IntentPerson`
- [aliases](aliases.md): Other secondary `Handle`s used to contact this `IntentPerson`, if any
- [isMe](isme.md): Whether this `IntentPerson` represents the owner of the device
- [image](image.md): An image representing this `IntentPerson`
- [IntentPerson.ParameterMode](parametermode.md): The type of interface to show when someone chooses a parameter that contains information about a person.
