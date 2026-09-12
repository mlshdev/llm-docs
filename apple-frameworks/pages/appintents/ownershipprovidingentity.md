> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/ownershipprovidingentity](https://developer.apple.com/documentation/appintents/ownershipprovidingentity)

# OwnershipProvidingEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that provides the system with ownership and sharing context for an app entity.

## Declaration

```swift
protocol OwnershipProvidingEntity : AppEntity
```

<a id="overview"></a>

## Overview

When your app passes app entities as parameters to an [AppIntent](appintent.md) and returns them from app intent results, people can use Apple Intelligence, Siri, and custom shortcuts to work with those entities across apps. For destructive or sensitive actions like deleting or updating an app entity, your app can require a person’s confirmation. Additionally, Apple Intelligence and Siri may also request a person’s confirmation. Conform your app entities to [OwnershipProvidingEntity](ownershipprovidingentity.md) so the system prompts for confirmation — with appropriate context in the confirmation dialog — when an intent acts on shared or publicly accessible app entities.

The following example shows an app entity for a photo album that updates its [ownership](ownershipprovidingentity/ownership.md) based on whether a person shares the album with their family or publishes it publicly:

```swift
@AppEntity(schema: .photos.album)
struct PhotoAlbumEntity: OwnershipProvidingEntity {
    let id = UUID()
    var isSharedWithFamily: Bool
    var isPublicAlbum: Bool

    // MARK: - .photos.album properties
    var name: String
    var creationDate: Date?
    var albumType: PhotoAlbumType

    var ownership: EntityOwnership {
        var ownership: EntityOwnership = []
        if isSharedWithFamily {
            ownership.insert(.shared)
        }
        if isPublicAlbum {
            ownership.insert(.public)
        }
        return ownership
    }
}
```

## Topics

### Instance Properties

- [ownership](ownershipprovidingentity/ownership.md): The sharing and ownership state of the entity.

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
- [TransientAppEntity](transientappentity.md): A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValue](appunionvalue.md): A protocol that provides nominal type identity and metadata for union values.
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.
