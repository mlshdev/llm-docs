> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson/aliases](https://developer.apple.com/documentation/appintents/intentperson/aliases)

# aliases

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Other secondary `Handle`s used to contact this `IntentPerson`, if any

## Declaration

```swift
var aliases: [IntentPerson.Handle]
```

## See Also

### Getting identifying information

- [handle](handle-swift.property.md): The primary `Handle` used to contact this `IntentPerson`
- [isMe](isme.md): Whether this `IntentPerson` represents the owner of the device
- [image](image.md): An image representing this `IntentPerson`
- [IntentPerson.Handle](handle-swift.struct.md): A type that describes a single way to contact a person.
- [IntentPerson.ParameterMode](parametermode.md): The type of interface to show when someone chooses a parameter that contains information about a person.
