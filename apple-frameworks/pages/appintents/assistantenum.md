> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantenum](https://developer.apple.com/documentation/appintents/assistantenum)

# AssistantEnum

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A value that Apple Intelligence and Siri use to fulfill a person’s request.

## Declaration

```swift
protocol AssistantEnum : AppEnum
```

<a id="overview"></a>

## Overview

Don’t adopt this protocol directly, instead use the [AssistantEnum(schema:)](assistantenum%28schema_%29.md) macro to meet requirements for making your [AppEnum](appenum.md) discoverable by Apple Intelligence and Siri.

## Relationships

### Inherits From

- [AppEnum](appenum.md)
- [AppValue](appvalue.md)
- [CaseDisplayRepresentable](casedisplayrepresentable.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StaticDisplayRepresentable](staticdisplayrepresentable.md)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

### Inherited By

- [AssistantSchemaEnum](assistantschemaenum.md)

## See Also

### Previous schema types

- [AssistantEntity](assistantentity.md): An app entity that Apple Intelligence can discover to fulfill a person’s request.
- [AssistantIntent](assistantintent.md): An app intent that Siri performs to fulfill a person’s request.
- [AssistantSchemaEnum](assistantschemaenum.md)
- [AssistantSchemaEntity](assistantschemaentity.md)
- [AssistantSchemaIntent](assistantschemaintent.md)
- [AssistantSchema](assistantschema.md): Deprecated.
- [AssistantSchemas](assistantschemas.md)
