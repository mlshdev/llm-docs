> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/assistantintent(schema:)](https://developer.apple.com/documentation/appintents/assistantintent(schema:))

# AssistantIntent(schema:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Swift macro you use to make sure your app intent conforms to an assistant schema.

## Declaration

```swift
@attached(memberAttribute) @attached(extension, conformances: AssistantSchemaIntent, ShowInAppSearchResultsIntent, names: named(__assistantSchemaIntent)) macro AssistantIntent<T>(schema: T) where T : AssistantSchemas.Intent
```

## See Also

### Deprecated macros

- [AssistantEntity(schema:)](assistantentity%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app entity conforms to an assistant schema.
- [AssistantEnum(schema:)](assistantenum%28schema_%29.md): Deprecated. A Swift macro you use to make sure your app enum conforms to an assistant schema.
