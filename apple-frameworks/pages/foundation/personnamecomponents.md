> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents](https://developer.apple.com/documentation/foundation/personnamecomponents)

# PersonNameComponents

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The separate parts of a person’s name, allowing locale-aware formatting.

## Declaration

```swift
struct PersonNameComponents
```

## Topics

### Creating Person Name Components

- [init()](personnamecomponents/init%28%29.md): Initializes a new person name components structure.

### Accessing Person Name Components

- [namePrefix](personnamecomponents/nameprefix.md): The portion of a name’s full form of address that precedes the name itself.
- [givenName](personnamecomponents/givenname.md): Name bestowed upon an individual to differentiate them from other members of a group that share a family name.
- [middleName](personnamecomponents/middlename.md): Secondary name bestowed upon an individual to differentiate them from others that have the same given name.
- [familyName](personnamecomponents/familyname.md): Name bestowed upon an individual to denote membership in a group or family.
- [nameSuffix](personnamecomponents/namesuffix.md): The portion of a name’s full form of address that follows the name itself.
- [nickname](personnamecomponents/nickname.md): Name substituted for the purposes of familiarity.
- [phoneticRepresentation](personnamecomponents/phoneticrepresentation.md): The phonetic representation name components of the receiver.

### Formatting Person Name Components

- [formatted()](personnamecomponents/formatted%28%29.md): Generates a locale-aware string representation of an instance of person name components using the default format style.
- [formatted(\_:)](personnamecomponents/formatted%28__%29.md): Generates a locale-aware string representation of an instance of person name components using the provided format style.
- [PersonNameComponents.FormatStyle](personnamecomponents/formatstyle.md): A type used to format a person’s name with a style appropriate for the given locale.

### Using Reference Types

- [NSPersonNameComponents](nspersonnamecomponents.md): An object that manages the separate parts of a person’s name to allow locale-aware formatting.

### Structures

- [PersonNameComponents.AttributedStyle](personnamecomponents/attributedstyle.md)
- [PersonNameComponents.ParseStrategy](personnamecomponents/parsestrategy.md)

### Initializers

- [init(\_:)](personnamecomponents/init%28__%29.md): Creates a person name components object from a given string.
- [init(\_:strategy:)](personnamecomponents/init%28__strategy_%29.md): Creates a person name components object from a given string by applying the provided parsing strategy.
- [init(namePrefix:givenName:middleName:familyName:nameSuffix:nickname:phoneticRepresentation:)](personnamecomponents/init%28nameprefix_givenname_middlename_familyname_namesuffix_nickname_phoneticrepresentation_%29.md)

### Type Aliases

- [PersonNameComponents.Specification](personnamecomponents/specification.md)
- [PersonNameComponents.UnwrappedType](personnamecomponents/unwrappedtype.md)
- [PersonNameComponents.ValueType](personnamecomponents/valuetype.md)

### Type Properties

- [defaultResolverSpecification](personnamecomponents/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomLocalizedStringResourceConvertible](customlocalizedstringresourceconvertible.md)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DisplayRepresentable](../appintents/displayrepresentable.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstanceDisplayRepresentable](../appintents/instancedisplayrepresentable.md)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [ReferenceConvertible](referenceconvertible.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](../appintents/typedisplayrepresentable.md)

## See Also

### Names

- [PersonNameComponentsFormatter](personnamecomponentsformatter.md): A formatter that provides localized representations of the components of a person’s name.
