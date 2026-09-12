> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentityannotatable](https://developer.apple.com/documentation/appintents/appentityannotatable)

# AppEntityAnnotatable

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

An interface that system types adopt and use to manage their relationship to app entities.

## Declaration

```swift
protocol AppEntityAnnotatable
```

## Mentioned In

- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md)

<a id="overview"></a>

## Overview

System types adopt the `AppEntityAnnotatable` protocol and use it to store a reference to an app entity. Don’t add support for this protocol to your own custom types. Instead, the system incorporates it into types like [NSUserActivity](../foundation/nsuseractivity.md) to support your custom entities. The system types use the presence of an entity to improve system experiences like Apple Intelligence, Siri, and Shortcuts.

## Topics

### Instance Properties

- [appEntityIdentifier](appentityannotatable/appentityidentifier.md): The identifier of an app entity you want to associate with a system type.

## Relationships

### Conforming Types

- [ShortcutsUIButton](shortcutsuibutton.md)
- [SiriTipUIView](siritipuiview.md)

## See Also

### Entity identity

- [EntityIdentifier](entityidentifier.md): A type that uniquely identifies a specific instance of an app entity.
- [EntityIdentifierConvertible](entityidentifierconvertible.md): An interface for converting between an entity’s identifier and its string representation.
- [FileEntityIdentifier](fileentityidentifier.md): An identifier for an app entity that refers to a document or other file.
- [PersistentlyIdentifiable](persistentlyidentifiable.md): Defines a string that uniquely identifies a type. This is useful for maintaining the identity of a type, even when its type name is changed.
- [SyncableEntityIdentifier](syncableentityidentifier.md): A type-safe wrapper you use to specify different local and stable identifiers for an entity.
- [AttributedEntityIdentifier](attributedentityidentifier.md): A unique identifier for an app entity instance within an application.
- [AttributedTypeIdentifier](attributedtypeidentifier.md): A unique identifier for an app entity or transient app entity type within an application bundle.
