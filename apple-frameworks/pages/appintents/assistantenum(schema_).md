> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantenum(schema:)](https://developer.apple.com/documentation/appintents/assistantenum(schema:))

# AssistantEnum(schema:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Swift macro you use to make sure your app enum conforms to an assistant schema.

## Declaration

```swift
@attached(extension, conformances: AssistantSchemaEnum, names: named(__assistantSchemaEnum)) macro AssistantEnum<T>(schema: T) where T : AssistantSchemas.Enum
```

## See Also

### Deprecated macros

- [AssistantIntent(schema:)](assistantintent%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app intent conforms to an assistant schema.
- [AssistantEntity(schema:)](assistantentity%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app entity conforms to an assistant schema.
