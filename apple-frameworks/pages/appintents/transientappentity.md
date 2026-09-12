> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/transientappentity](https://developer.apple.com/documentation/appintents/transientappentity)

# TransientAppEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.

## Declaration

```swift
protocol TransientAppEntity : AppEntity
```

## Topics

### Initializers

- [init()](transientappentity/init%28%29.md): Transient entities must be initializable so they can be initialized and populated by the system.

## Relationships

### Inherits From

- [AppEntity](appentity.md)
- [AppValue](appvalue.md)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### App entity types

- [AppEntity](appentity.md): An interface for making a custom type or app-specific concept discoverable by Apple Intelligence and experiences like Siri or the Shortcuts app.
- [FileEntity](fileentity.md): An entity that refers to a document or other file.
- [IndexedEntity](indexedentity.md): An interface that allows you to include an entity in your app’s Spotlight index.
- [SyncableEntity](syncableentity.md): An interface that indicates your entity has an identifier that’s consistent across devices.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [OwnershipProvidingEntity](ownershipprovidingentity.md): A type that provides the system with ownership and sharing context for an app entity.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValue](appunionvalue.md): A protocol that provides nominal type identity and metadata for union values.
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.
