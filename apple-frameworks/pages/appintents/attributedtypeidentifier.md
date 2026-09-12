> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/attributedtypeidentifier](https://developer.apple.com/documentation/appintents/attributedtypeidentifier)

# AttributedTypeIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A unique identifier for an app entity or transient app entity type within an application bundle.

## Declaration

```swift
struct AttributedTypeIdentifier
```

<a id="overview"></a>

## Overview

Use `AttributedTypeIdentifier` to uniquely identify entity types across your application. This identifier combines a persistent identifier — typically the entity’s type name — with an optional bundle identifier to ensure uniqueness across different bundles.

The system uses these identifiers to track and reference entity types throughout the AppIntents framework, particularly when working with entity specifications, containers, and identifiers.

## Topics

### Initializers

- [init(persistentIdentifier:bundleIdentifier:)](attributedtypeidentifier/init%28persistentidentifier_bundleidentifier_%29.md): Creates a new attributed type identifier.

### Instance Properties

- [bundleIdentifier](attributedtypeidentifier/bundleidentifier.md): The bundle identifier that contains this entity type.
- [persistentIdentifier](attributedtypeidentifier/persistentidentifier.md): The persistent identifier for this entity type.

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
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
