> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent(schema:)](https://developer.apple.com/documentation/appintents/appintent(schema:))

# AppIntent(schema:)

**Framework:** App Intents  
**Kind:** Macro  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Swift macro you use to make sure your app intent conforms to an schema.

## Declaration

```swift
@attached(memberAttribute) @attached(extension, conformances: AppIntent, AssistantSchemaIntent, ShowInAppSearchResultsIntent, OpenIntent, DeleteIntent, AudioPlaybackIntent, AudioRecordingIntent, LiveActivityIntent, URLRepresentableIntent, names: named(__appSchemaIntent)) macro AppIntent<T>(schema: T) where T : AppSchemaIntent
```

## Mentioned In

- [Getting started with the App Intents framework](getting-started-with-the-app-intents-framework.md)
- [Making actions and content discoverable by Apple Intelligence](making-actions-and-content-discoverable-by-apple-intelligence.md)

## See Also

### Markup macros

- [AppEntity(schema:)](appentity%28schema_%29.md): A Swift macro you use to make sure your app entity conforms to a schema.
- [AppEnum(schema:)](appenum%28schema_%29.md): A Swift macro you use to make sure your app enum conforms to a schema.
