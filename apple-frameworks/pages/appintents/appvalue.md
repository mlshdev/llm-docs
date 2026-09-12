> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appvalue](https://developer.apple.com/documentation/appintents/appvalue)

# AppValue

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An interface that describes conceptual types you use in app intents.

## Declaration

```swift
protocol AppValue : PersistentlyIdentifiable, TypeDisplayRepresentable, _IntentValue, Sendable
```

<a id="overview"></a>

## Overview

This protocol serves as the base type for conceptual interfaces like [AppEntity](appentity.md) or [AppEnum](appenum.md).

## Relationships

### Inherits From

- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

### Inherited By

- [AppEntity](appentity.md)
- [AppEnum](appenum.md)
- [AppUnionValueCasesProviding](appunionvaluecasesproviding.md)
- [AssistantEntity](assistantentity.md)
- [AssistantEnum](assistantenum.md)
- [AssistantSchemaEntity](assistantschemaentity.md)
- [AssistantSchemaEnum](assistantschemaenum.md)
- [FileEntity](fileentity.md)
- [IndexedEntity](indexedentity.md)
- [OwnershipProvidingEntity](ownershipprovidingentity.md)
- [SyncableEntity](syncableentity.md)
- [TransientAppEntity](transientappentity.md)
- [URLRepresentableEntity](urlrepresentableentity.md)
- [URLRepresentableEnum](urlrepresentableenum.md)
- [UniqueAppEntity](uniqueappentity.md)

### Conforming Types

- [StringSearchScope](stringsearchscope.md)
- [VideoCategory](videocategory.md)

## See Also

### Foundational types

- [AnyIntentValue](anyintentvalue.md): A type the system uses to access a parameter or property value.
