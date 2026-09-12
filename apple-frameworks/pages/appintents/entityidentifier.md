> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityidentifier](https://developer.apple.com/documentation/appintents/entityidentifier)

# EntityIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that uniquely identifies a specific instance of an app entity.

## Declaration

```swift
struct EntityIdentifier
```

<a id="overview"></a>

## Overview

The value used should be unique across all entities of the given type. Entities which are relevant across executions of the application should have stable identifiers that persist across executions.

Entities, by default, conform to the `Identifiable` protocol. Use a type for the `id` that conforms to [EntityIdentifierConvertible](entityidentifierconvertible.md). Default implementations for `String`, `UUID` and `Int` are provided.

For example:

```swift
struct Song: AppEntity {
    let id = UUID()
}
```

<a id="Cross-Device-Stable-Identifiers"></a>

## Cross-Device Stable Identifiers

For entities that adopt `_SyncableEntity`, the framework automatically extracts stable identifiers for cross-device session syncing:

- **Passthrough case**: If your entity’s ID is already stable across devices (like server UUIDs), just adopt `_SyncableEntity` with no other changes. The framework uses your ID as both the local and stable identifier.
- **Mapped case**: If your entity has different local and stable identifiers, use `_SyncableEntityIdentifier` as your ID type. The framework extracts the stable ID from the wrapper.
- **Custom identifier case**: If your entity uses a custom ID type that conforms to `_SyncableEntityIdentifierProviding`, the framework extracts the stable ID via the protocol’s `stableIdentifierString` property.

Apps never interact with `EntityIdentifier.stableIdentifier` directly - they work with their entity’s ID type (plain types like `UUID`, `_SyncableEntityIdentifier` for mapped IDs, or custom types conforming to `_SyncableEntityIdentifierProviding`).

The stable identifier is NOT used for equality or hashing - two `EntityIdentifier` instances are equal if they have the same type and local identifier, regardless of stable identifier value.

## Topics

### Creating an entity identifier

- [init(for:)](entityidentifier/init%28for_%29.md): Creates an identifier for the specified entity.
- [init(for:identifier:)](entityidentifier/init%28for_identifier_%29.md): Creates an `EntityIdentifier` representing an instance of the specified entity type backed by the specified identifier value.
- [init(activityIdentifier:)](entityidentifier/init%28activityidentifier_%29.md)

### Getting the identifier details

- [identifier](entityidentifier/identifier.md): Value uniquely identifying the entity instance within its type.
- [entityType](entityidentifier/entitytype.md): The type of `AppEntity` represented by this identifier
- [valueMaximumLength](entityidentifier/valuemaximumlength.md): Maximum allowed length for the `identifier` value. This is a constraint imposed by the system and thus forces us to truncate the identifier if it exceeds the maximum length.

### Operators

- [==(\_:\_:)](entityidentifier/==%28____%29.md): Compares two entity identifiers for equality.

### Instance Methods

- [hash(into:)](entityidentifier/hash%28into_%29.md): Hashes the entity identifier.

### Type Aliases

- [EntityIdentifier.Specification](entityidentifier/specification.md)
- [EntityIdentifier.UnwrappedType](entityidentifier/unwrappedtype.md)
- [EntityIdentifier.ValueType](entityidentifier/valuetype.md)

### Type Properties

- [defaultResolverSpecification](entityidentifier/defaultresolverspecification.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity identity

- [EntityIdentifierConvertible](entityidentifierconvertible.md): An interface for converting between an entity’s identifier and its string representation.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
