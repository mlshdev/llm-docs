> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantentity(schema:)](https://developer.apple.com/documentation/appintents/assistantentity(schema:))

# AssistantEntity(schema:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Swift macro you use to make sure your app entity conforms to an assistant schema.

## Declaration

```swift
@attached(memberAttribute) @attached(extension, conformances: AppEntity, AssistantSchemaEntity, names: named(__assistantSchemaEntity)) macro AssistantEntity<T>(schema: T) where T : AssistantSchemas.Entity
```

## See Also

### Deprecated macros

- [AssistantIntent(schema:)](assistantintent%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app intent conforms to an assistant schema.
- [AssistantEnum(schema:)](assistantenum%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app enum conforms to an assistant schema.
