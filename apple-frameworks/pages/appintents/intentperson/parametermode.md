> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/parametermode](https://developer.apple.com/documentation/appintents/intentperson/parametermode)

# IntentPerson.ParameterMode

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The type of interface to show when someone chooses a parameter that contains information about a person.

## Declaration

```swift
enum ParameterMode
```

## Topics

### Getting the interface type

- [IntentPerson.ParameterMode.contact](parametermode/contact.md): The parameter shows an interface allowing the user to pick a contact
- [IntentPerson.ParameterMode.email](parametermode/email.md): The parameter shows an interface allowing the user to pick an email
- [IntentPerson.ParameterMode.emailOrPhone](parametermode/emailorphone.md): The parameter shows an interface allowing the user to pick an email or phone number
- [IntentPerson.ParameterMode.phone](parametermode/phone.md): The parameter shows an interface allowing the user to pick a phone number

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting identifying information

- [handle](handle-swift.property.md): The primary `Handle` used to contact this `IntentPerson`
- [aliases](aliases.md): Other secondary `Handle`s used to contact this `IntentPerson`, if any
- [isMe](isme.md): Whether this `IntentPerson` represents the owner of the device
- [image](image.md): An image representing this `IntentPerson`
- [IntentPerson.Handle](handle-swift.struct.md): A type that describes a single way to contact a person.
