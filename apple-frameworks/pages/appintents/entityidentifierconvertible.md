> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityidentifierconvertible](https://developer.apple.com/documentation/appintents/entityidentifierconvertible)

# EntityIdentifierConvertible

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface for converting between an entity’s identifier and its string representation.

## Declaration

```swift
protocol EntityIdentifierConvertible
```

<a id="overview"></a>

## Overview

Every entity provides a stable, unique identifier that the framework uses as a concrete reference to the entity while mediating between your app and other parts of the system. To enforce this requirement, the [AppEntity](appentity.md) protocol inherits the [Identifiable](https://developer.apple.com/documentation/swift/identifiable) protocol.

Wherever possible, use [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), or [UUID](../foundation/uuid.md) for an identifier’s type. If you must use a different data type, use this protocol to extend that type and implement the required support. For example, an app that integrates with the [MusicKit](../musickit.md) framework might use [MusicItemID](../musickit/musicitemid.md) as the type for an entity’s identifier.

```swift
extension MusicItemID: EntityIdentifierConvertible {
    public var entityIdentifierString: String {
        rawValue
    }

    public init?(entityIdentifierString: String) {
        self = MusicItemID(entityIdentifierString)
    }
}
```

> **Important**

> Keep your [entityIdentifierString](entityidentifierconvertible/entityidentifierstring.md) to 4096 characters or fewer. Otherwise, the framework truncates the value, and you might not be able to convert the truncated value back to its originating type.

## Topics

### Creating an identifier string

- [entityIdentifier(for:)](entityidentifierconvertible/entityidentifier%28for_%29.md): Identifiers should be able to initialize via a `String` format.

### Getting the identifier string

- [entityIdentifierString](entityidentifierconvertible/entityidentifierstring.md): The `AppEntity`’s identifier value as a `String`.

## Relationships

### Conforming Types

- [FileEntityIdentifier](fileentityidentifier.md)
- [SyncableEntityIdentifier](syncableentityidentifier.md)

## See Also

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): Conforms when `LocalID` conforms to `EntityIdentifierConvertible`, `LocalID` conforms to `Sendable`, `StableID` conforms to `EntityIdentifierConvertible`, and `StableID` conforms to `Sendable`. A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
