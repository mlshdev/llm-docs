> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/instancedisplayrepresentable](https://developer.apple.com/documentation/appintents/instancedisplayrepresentable)

# InstanceDisplayRepresentable

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for providing the visual representation for an instance of a specific type.

## Declaration

```swift
protocol InstanceDisplayRepresentable : CustomLocalizedStringResourceConvertible
```

## Topics

### Providing the visual content

- [displayRepresentation](instancedisplayrepresentable/displayrepresentation.md): The visual elements to display when presenting an instance of the type.

### Providing a localized description

- [localizedStringResource](instancedisplayrepresentable/localizedstringresource.md): A resource that helps provide a description of this instance.

### Default Implementations

- [CustomLocalizedStringResourceConvertible Implementations](instancedisplayrepresentable/customlocalizedstringresourceconvertible-implementations.md)

## Relationships

### Inherits From

- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)

### Inherited By

- [AppEntity](appentity.md)
- [AssistantEntity](assistantentity.md)
- [AssistantSchemaEntity](assistantschemaentity.md)
- [DisplayRepresentable](displayrepresentable.md)
- [FileEntity](fileentity.md)
- [IndexedEntity](indexedentity.md)
- [OwnershipProvidingEntity](ownershipprovidingentity.md)
- [SetFocusFilterIntent](setfocusfilterintent.md)
- [StartWorkoutIntent](startworkoutintent.md)
- [SyncableEntity](syncableentity.md)
- [TransientAppEntity](transientappentity.md)
- [URLRepresentableEntity](urlrepresentableentity.md)
- [UniqueAppEntity](uniqueappentity.md)

### Conforming Types

- [IntentCurrencyAmount](intentcurrencyamount.md)
- [IntentFile](intentfile.md)
- [IntentPaymentMethod](intentpaymentmethod.md)
- [IntentPerson](intentperson.md)
- [SystemShortcut](systemshortcut.md)

## See Also

### Data representations

- [DisplayRepresentation](displayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [DisplayRepresentable](displayrepresentable.md): An interface for providing a dynamic visual representation of a specific type and instances of that type.
- [TypeDisplayRepresentable](typedisplayrepresentable.md): An interface for providing the visual representation of a specific type.
- [TypeDisplayRepresentation](typedisplayrepresentation.md): A type that describes the user interface presentation of a custom type.
- [StaticDisplayRepresentable](staticdisplayrepresentable.md): An interface for providing a static visual representation of a specific type.
- [CaseDisplayRepresentable](casedisplayrepresentable.md): An interface for providing the visual representation for an iterable collection of values.
