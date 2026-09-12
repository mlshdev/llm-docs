> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/relevanceentry](https://developer.apple.com/documentation/widgetkit/relevanceentry)

# RelevanceEntry

**Framework:** WidgetKit  
**Kind:** Protocol  
**Availability:** watchOS 26.0+

A type that specifies the information to render a widget at a specific relevance configuration.

## Declaration

```swift
protocol RelevanceEntry : Sendable
```

## Mentioned In

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Smart Stacks

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [TimelineEntryRelevance](timelineentryrelevance.md): An object that describes the relative importance of a timeline entry compared to other entries in the current and past timelines.
- [RelevanceConfiguration](relevanceconfiguration.md): A type that describes the content of a widget that uses relevance clues.
- [RelevanceEntriesProvider](relevanceentriesprovider.md): A type that provides the content for a widget that uses relevance clues to display information in the Smart Stack.
- [WidgetRelevance](widgetrelevance.md): A type collecting the relevances for a widget kind.
- [WidgetRelevanceAttribute](widgetrelevanceattribute.md): A type that describes when a specific widget could be relevant.
- [WidgetRelevanceGroup](widgetrelevancegroup.md): A type for configuring widget behavior in the watchOS Smart Stack.
- [AppIntentRecommendation](appintentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
- [IntentConfiguration](intentconfiguration.md): An object describing the content of a widget that uses a custom intent definition to provide user-configurable options.
- [IntentRecommendation](intentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
