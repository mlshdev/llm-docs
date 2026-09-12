> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentperson](https://developer.apple.com/documentation/appintents/intentperson)

# IntentPerson

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Information that identifies a person participating in an intents-based interaction.

## Declaration

```swift
struct IntentPerson
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)
- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md)
- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)

## Topics

### Creating a contact

- [init(identifier:name:handle:aliases:isMe:image:)](intentperson/init%28identifier_name_handle_aliases_isme_image_%29.md)

### Getting the person’s name

- [name](intentperson/name-swift.property.md): The name of this `IntentPerson`
- [IntentPerson.Name](intentperson/name-swift.enum.md): A type that stores name-related information for a person.

### Getting identifying information

- [handle](intentperson/handle-swift.property.md): The primary `Handle` used to contact this `IntentPerson`
- [aliases](intentperson/aliases.md): Other secondary `Handle`s used to contact this `IntentPerson`, if any
- [isMe](intentperson/isme.md): Whether this `IntentPerson` represents the owner of the device
- [image](intentperson/image.md): An image representing this `IntentPerson`
- [IntentPerson.Handle](intentperson/handle-swift.struct.md): A type that describes a single way to contact a person.
- [IntentPerson.ParameterMode](intentperson/parametermode.md): The type of interface to show when someone chooses a parameter that contains information about a person.

### Getting person-related identifiers

- [identifier](intentperson/identifier-swift.property.md)
- [IntentPerson.Identifier](intentperson/identifier-swift.enum.md): A type that manages a unique identifier for a person.

### Initializers

- [init(handle:)](intentperson/init%28handle_%29.md): Initializes an `IntentPerson` from a raw handle, like a phone number or an email address. Use this initializer when the value is not linked to a known contact.

### Type Aliases

- [IntentPerson.Specification](intentperson/specification.md)
- [IntentPerson.UnwrappedType](intentperson/unwrappedtype.md)
- [IntentPerson.ValueType](intentperson/valuetype.md)

### Type Properties

- [defaultResolverSpecification](intentperson/defaultresolverspecification.md)

### Default Implementations

- [Transferable Implementations](intentperson/transferable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)
