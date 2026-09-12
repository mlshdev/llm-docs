> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appenum(schema:)](https://developer.apple.com/documentation/appintents/appenum(schema:))

# AppEnum(schema:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Swift macro you use to make sure your app enum conforms to a schema.

## Declaration

```swift
@attached(extension, conformances: AppEnum, AssistantSchemaEnum, names: named(__appSchemaEnum)) macro AppEnum<T>(schema: T) where T : AppSchemaEnum
```

## Mentioned In

- [Making actions and content discoverable by Apple Intelligence](making-actions-and-content-discoverable-by-apple-intelligence.md)

## See Also

### Markup macros

- [AppIntent(schema:)](appintent%28schema_%29.md): A Swift macro you use to make sure your app intent conforms to an schema.
- [AppEntity(schema:)](appentity%28schema_%29.md): A Swift macro you use to make sure your app entity conforms to a schema.
