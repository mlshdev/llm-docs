> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appunionvalue](https://developer.apple.com/documentation/appintents/appunionvalue)

# AppUnionValue

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that provides nominal type identity and metadata for union values.

## Declaration

```swift
protocol AppUnionValue : TypeDisplayRepresentable
```

<a id="overview"></a>

## Overview

Union values conforming to this protocol can be used as Shortcuts parameters with rich metadata support, enabling appropriate picker UI and parameter summaries.

The `@UnionValue` macro automatically generates conformance to this protocol. You can provide custom metadata by implementing the protocol requirements in an extension.

Example:

```swift
@UnionValue
enum Reaction {
    case tapback(Tapback)
    case text(String)
}

extension Reaction {
    static var typeDisplayRepresentation: TypeDisplayRepresentation {
        "Reaction"
    }

    static let caseDisplayRepresentations: [Cases: DisplayRepresentation] = [
        .tapback: "Tapback",
        .text: "Text Reaction"
    ]
}
```

## Topics

### Associated Types

- [Cases](appunionvalue/cases.md): The nominal type representing the cases of this union value.

### Type Properties

- [caseDisplayRepresentations](appunionvalue/casedisplayrepresentations.md): A dictionary that maps each case to the visual elements that represent it.

## Relationships

### Inherits From

- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### App entity types

- [AppEntity](appentity.md): An interface for making a custom type or app-specific concept discoverable by Apple Intelligence and experiences like Siri or the Shortcuts app.
- [FileEntity](fileentity.md): An entity that refers to a document or other file.
- [IndexedEntity](indexedentity.md): An interface that allows you to include an entity in your app’s Spotlight index.
- [SyncableEntity](syncableentity.md): An interface that indicates your entity has an identifier that’s consistent across devices.
- [TransientAppEntity](transientappentity.md): A type that represents a transient model object which exposes its interface to App Intents via properties. Note that `TransientAppEntity` types are not meant to be queried.
- [UniqueAppEntity](uniqueappentity.md): An entity that will only ever have one value, such as global settings.
- [OwnershipProvidingEntity](ownershipprovidingentity.md): A type that provides the system with ownership and sharing context for an app entity.
- [UnionValue()](unionvalue%28%29.md)
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md): A protocol for the cases enumeration of an `AppUnionValue`.
