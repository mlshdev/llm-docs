> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/staticdisplayrepresentable](https://developer.apple.com/documentation/appintents/staticdisplayrepresentable)

# StaticDisplayRepresentable

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for providing a static visual representation of a specific type.

## Declaration

```swift
protocol StaticDisplayRepresentable : CaseDisplayRepresentable, TypeDisplayRepresentable
```

## Relationships

### Inherits From

- [CaseDisplayRepresentable](casedisplayrepresentable.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

### Inherited By

- [AppEnum](appenum.md)
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md)
- [AssistantEnum](assistantenum.md)
- [AssistantSchemaEnum](assistantschemaenum.md)
- [URLRepresentableEnum](urlrepresentableenum.md)

### Conforming Types

- [StringSearchScope](stringsearchscope.md)
- [VideoCategory](videocategory.md)

## See Also

### Data representations

- [DisplayRepresentation](displayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [DisplayRepresentable](displayrepresentable.md): An interface for providing a dynamic visual representation of a specific type and instances of that type.
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md): An interface for providing the visual representation for an instance of a specific type.
- [TypeDisplayRepresentable](typedisplayrepresentable.md): An interface for providing the visual representation of a specific type.
- [TypeDisplayRepresentation](typedisplayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [CaseDisplayRepresentable](casedisplayrepresentable.md): An interface for providing the visual representation for an iterable collection of values.
