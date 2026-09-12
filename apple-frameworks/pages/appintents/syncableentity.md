> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentity](https://developer.apple.com/documentation/appintents/syncableentity)

# SyncableEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An interface that indicates your entity has an identifier that’s consistent across devices.

## Declaration

```swift
protocol SyncableEntity : AppEntity
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

Adopt the `SyncableEntity` protocol in your entity types when they have an identifier that’s the same across devices. The presence of this protocol tells the system that it can refer to your entity consistently across devices. For eample, Siri uses this capability to transfer a conversation from one device to another.

If you configure entities with an identifier that’s already consistent across devices, you can adopt this protocol without any additional changes. For example, if you initialize entities with a UUID you retrieve from your server, you can use that value for the identifier and not make any additional changes to your type. The following example shows an app entity type that adopts `SyncableEntity` and uses a server-based UUID.

```swift
struct Article: AppEntity, SyncableEntity {
    var id: UUID  // No changes needed!
    var title: String
}
```

If your entity maintains different local and stable identifiers, adopt this protocol and set the type of your identifier to [SyncableEntityIdentifier](syncableentityidentifier.md). When creating an entity, initialize its `id` property with both the local and stable identifier values for your type, as shown in the following example. When you need to refer to an entity in your code, use the local identifier.

```swift
struct Photo: AppEntity, SyncableEntity {
    var id: SyncableEntityIdentifier<String, String>
    var creationDate: Date

    init(localID: String, stableID: String, creationDate: Date) {
        self.id = SyncableEntityIdentifier(local: localID, stable: stableID)
        self.creationDate = creationDate
    }
}
```

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
- [TransientAppEntity](transientappentity.md): A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [OwnershipProvidingEntity](ownershipprovidingentity.md): A type that provides the system with ownership and sharing context for an app entity.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValue](appunionvalue.md): A protocol that provides nominal type identity and metadata for union values.
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.
