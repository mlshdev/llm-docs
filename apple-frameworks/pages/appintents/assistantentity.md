> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantentity](https://developer.apple.com/documentation/appintents/assistantentity)

# AssistantEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An app entity that Apple Intelligence can discover to fulfill a person’s request.

## Declaration

```swift
protocol AssistantEntity : AppEntity
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol directly, instead use the [AssistantEntity(schema:)](assistantentity%28schema_%29.md) macro to meet requirements for making your [AppEntity](appentity.md) discoverable by Apple Intelligence and Siri.

## Relationships

### Inherits From

- [AppEntity](appentity.md)
- [AppValue](appvalue.md)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

### Inherited By

- [AssistantSchemaEntity](assistantschemaentity.md)

## See Also

### Previous schema types

- [AssistantEnum](assistantenum.md): A value that Apple Intelligence and Siri use to fulfill a person’s request.
- [AssistantIntent](assistantintent.md): An app intent that Siri performs to fulfill a person’s request.
- [AssistantSchemaEnum](assistantschemaenum.md)
- [AssistantSchemaEntity](assistantschemaentity.md)
- [AssistantSchemaIntent](assistantschemaintent.md)
- [AssistantSchema](assistantschema.md): Deprecated.
- [AssistantSchemas](assistantschemas.md)
