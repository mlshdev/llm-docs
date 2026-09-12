> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier](https://developer.apple.com/documentation/appintents/syncableentityidentifier)

# SyncableEntityIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type-safe wrapper you use to specify different local and stable identifiers for an entity.

## Declaration

```swift
struct SyncableEntityIdentifier<LocalID, StableID> where LocalID : EntityIdentifierConvertible, LocalID : Sendable, StableID : EntityIdentifierConvertible, StableID : Sendable
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

Use this structure if you maintain separate local and stable identifiers in one of your entity types. Assign this structure to the `id` property of your entity and use the value in the [local](syncableentityidentifier/local.md) property to refer to the entity in your code. The system uses the [stable](syncableentityidentifier/stable.md) value to refer to the same entity during operations that occur on another device.

When referring to an entity in your code, you can refer to this type directly. The following example shows an entity that uses this type for its identifier. The query object for the entity similarly refers to this type directly in methods.

```swift
struct Photo: AppEntity, SyncableEntity {
    var id: SyncableEntityIdentifier<String, String>
    var creationDate: Date
}

struct PhotoQuery: EntityQuery {
    func entities(for ids: [SyncableEntityIdentifier<String, String>]) async throws -> [Photo] {
        // Works everywhere - queries, entities, helper functions
    }
}
```

For additional information about how to use this type, see [SyncableEntity](syncableentity.md).

## Topics

### Initializers

- [init(id:)](syncableentityidentifier/init%28id_%29.md): Conforms when `LocalID` conforms to `EntityIdentifierConvertible`, `LocalID` conforms to `Sendable`, and `LocalID` is `StableID`. Creates an identifier where the local and stable IDs are identical.
- [init(local:stable:)](syncableentityidentifier/init%28local_stable_%29.md): Creates an identifier with both local and stable IDs.

### Instance Properties

- [local](syncableentityidentifier/local.md): The identifier you use to refer to the entity on the current device.
- [stable](syncableentityidentifier/stable.md): The identifier you use to refer to the entity across devices.

### Default Implementations

- [EntityIdentifierConvertible Implementations](syncableentityidentifier/entityidentifierconvertible-implementations.md)
- [Equatable Implementations](syncableentityidentifier/equatable-implementations.md)
- [Hashable Implementations](syncableentityidentifier/hashable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [EntityIdentifierConvertible](entityidentifierconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [EntityIdentifierConvertible](entityidentifierconvertible.md): Conforms when `LocalID` conforms to `EntityIdentifierConvertible`, `LocalID` conforms to `Sendable`, `StableID` conforms to `EntityIdentifierConvertible`, and `StableID` conforms to `Sendable`. An interface for converting between an entity’s identifier and its string representation.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
