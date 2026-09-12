> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/attributedentityidentifier](https://developer.apple.com/documentation/appintents/attributedentityidentifier)

# AttributedEntityIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A unique identifier for an app entity instance within an application.

## Declaration

```swift
struct AttributedEntityIdentifier
```

<a id="overview"></a>

## Overview

`AttributedEntityIdentifier` combines type and instance information to create a complete identifier that can uniquely identify any app entity instance. This identifier consists of two parts:

1. An entity type identifier that distinguishes different kinds of entities
2. An instance identifier that distinguishes individual instances of the same type

This structure enables the AppIntents framework to reference and retrieve specific entity instances across the system.

## Topics

### Initializers

- [init(entityType:instanceIdentifier:)](attributedentityidentifier/init%28entitytype_instanceidentifier_%29.md): Creates an attributed entity identifier with the specified type and instance identifiers.

### Instance Properties

- [entityType](attributedentityidentifier/entitytype.md): The type identifier that defines what kind of entity this is.
- [instanceIdentifier](attributedentityidentifier/instanceidentifier.md): The string that uniquely identifies this specific entity instance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [EntityIdentifierConvertible](entityidentifierconvertible.md): An interface for converting between an entity’s identifier and its string representation.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
