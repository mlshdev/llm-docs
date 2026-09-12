> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/fileentityidentifier](https://developer.apple.com/documentation/appintents/fileentityidentifier)

# FileEntityIdentifier

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An identifier for an app entity that refers to a document or other file.

## Declaration

```swift
struct FileEntityIdentifier
```

## Topics

### Instance Properties

- [draftIdentifier](fileentityidentifier/draftidentifier.md): The document draft identifier, if the document hasn’t been materialized on disk yet.
- [fileURL](fileentityidentifier/fileurl.md): A URL that locates a file saved to disk.
- [isDraft](fileentityidentifier/isdraft.md): Indicates whether this identifier represents a document draft.

### Type Methods

- [draft(identifier:)](fileentityidentifier/draft%28identifier_%29.md): Creates and returns an identifier for a draft document.
- [file(url:)](fileentityidentifier/file%28url_%29.md): Creates and returns an identifier with the provided URL to the file on disk.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EntityIdentifierConvertible](entityidentifierconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [EntityIdentifierConvertible](entityidentifierconvertible.md): An interface for converting between an entity’s identifier and its string representation.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
- [AppEntityAnnotatable](appentityannotatable.md): An interface that system types adopt and use to manage their relationship to app entities.
