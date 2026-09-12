> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluerepresentation](https://developer.apple.com/documentation/appintents/intentvaluerepresentation)

# IntentValueRepresentation

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

A transfer representation that enables bidirectional conversion between app entities and system intent values.

## Declaration

```swift
struct IntentValueRepresentation<Item, IntentValue> where Item : Transferable, IntentValue : _IntentValue, IntentValue : Sendable
```

## Mentioned In

- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)
- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md)

<a id="overview"></a>

## Overview

`IntentValueRepresentation` bridges the gap between your custom `AppEntity` types and system-provided intent values (like `IntentPerson`, `PlaceDescriptor`, and other `_SystemIntentValue` types).

<a id="Export-and-Import"></a>

## Export and Import

You can create a representation that supports export only, or both export and import:

```swift
// Export only
ValueRepresentation(
    exporting: { entity in
        IntentPerson(name: .displayName(entity.name))
    }
)

// Bidirectional
ValueRepresentation(
    exporting: { entity in
        IntentPerson(name: .displayName(entity.name))
    },
    importing: { person in
        ContactEntity(name: person.name.displayString)
    }
)
```

<a id="Key-Path-Based-Export"></a>

## Key Path-Based Export

For entities that directly contain a system intent value property, you can use a simplified key path syntax:

```swift
struct LocationEntity: TransientAppEntity, Transferable {
    @Property
    var place: PlaceDescriptor

    static var transferRepresentation: some TransferRepresentation {
        ValueRepresentation(exporting: \.place)
    }
}
```

## Topics

### Initializers

- [init(exporting:)](intentvaluerepresentation/init%28exporting_%29-2woe8.md): Conforms when `Item` conforms to `Transferable` and `IntentValue` conforms to `_SystemIntentValue`. Creates a value representation that exports an entity to a system intent value.
- [init(exporting:)](intentvaluerepresentation/init%28exporting_%29-7wi2e.md): Conforms when `Item` conforms to `Transferable` and `IntentValue` is `IntentPerson`. Creates a value representation that exports an entity to an `IntentPerson`.
- [init(exporting:importing:)](intentvaluerepresentation/init%28exporting_importing_%29-4zz9c.md): Conforms when `Item` conforms to `Transferable` and `IntentValue` conforms to `_SystemIntentValue`. Creates a value representation that supports bidirectional conversion between an entity and a system intent value.
- [init(exporting:importing:)](intentvaluerepresentation/init%28exporting_importing_%29-550j7.md): Conforms when `Item` conforms to `Transferable` and `IntentValue` is `IntentPerson`. an entity and an `IntentPerson`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TransferRepresentation](../coretransferable/transferrepresentation.md)
