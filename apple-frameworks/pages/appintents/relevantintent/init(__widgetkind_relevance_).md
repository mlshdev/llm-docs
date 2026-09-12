> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantintent/init(_:widgetkind:relevance:)](https://developer.apple.com/documentation/appintents/relevantintent/init(_:widgetkind:relevance:))

# init(\_:widgetKind:relevance:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS · watchOS 10.0+

Creates an instance of this type using the specified app intent and relevance information.

## Declaration

```swift
init<IntentType>(_ intent: IntentType, widgetKind: String, relevance: RelevantContext) where IntentType : WidgetConfigurationIntent
```

## Parameters

- `intent`: The app intent you want to suggest. Currently, the intent must be a [WidgetConfigurationIntent](../widgetconfigurationintent.md) type.
- `widgetKind`: A string you use to describe the intent.
- `relevance`: Contextual clues to help the system decide where to use the widget. For more information, see the documentation for this type in the [RelevanceKit](../../relevancekit.md) framework.
