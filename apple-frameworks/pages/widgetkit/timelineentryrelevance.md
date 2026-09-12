> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineentryrelevance](https://developer.apple.com/documentation/widgetkit/timelineentryrelevance)

# TimelineEntryRelevance

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

An object that describes the relative importance of a timeline entry compared to other entries in the current and past timelines.

## Declaration

```swift
struct TimelineEntryRelevance
```

## Mentioned In

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md)

<a id="overview"></a>

## Overview

When users put widgets into a Smart Stack, WidgetKit uses the [relevance](timelineentry/relevance.md) property of the entries your timeline provider generates to determine how relevant they are to the user. For each timeline entry that your provider creates, you may assign relevance that contains a [score](timelineentryrelevance/score.md) and a [duration](timelineentryrelevance/duration.md). The score is a value you choose that indicates the relevance of the widget, relative to entries across timelines that the provider creates. When the date of an entry arrives, and for the duration you specify, WidgetKit may rotate your widget to the top of the stack so it becomes visible.

A timeline entry’s assigned relevance isn’t the only factor that determines whether WidgetKit rotates your widget to the top of the Smart Stack. For more information, see [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md).

## Topics

### Creating a Relevance Object

- [init(score:duration:)](timelineentryrelevance/init%28score_duration_%29.md): Creates an object that represents the importance of a widget and the length of time for WidgetKit to consider it for rotation to the top of the stack.

### Configuring Relevance Properties

- [duration](timelineentryrelevance/duration.md): The number of seconds, following an entry’s date, that WidgetKit considers the widget for rotation to the top of the stack.
- [score](timelineentryrelevance/score.md): A value that indicates the relevance of an entry compared to other entries in the current and past timelines.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Smart Stacks

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [RelevanceConfiguration](relevanceconfiguration.md): A type that describes the content of a widget that uses relevance clues.
- [RelevanceEntriesProvider](relevanceentriesprovider.md): A type that provides the content for a widget that uses relevance clues to display information in the Smart Stack.
- [RelevanceEntry](relevanceentry.md): A type that specifies the information to render a widget at a specific relevance configuration.
- [WidgetRelevance](widgetrelevance.md): A type collecting the relevances for a widget kind.
- [WidgetRelevanceAttribute](widgetrelevanceattribute.md): A type that describes when a specific widget could be relevant.
- [WidgetRelevanceGroup](widgetrelevancegroup.md): A type for configuring widget behavior in the watchOS Smart Stack.
- [AppIntentRecommendation](appintentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
- [IntentConfiguration](intentconfiguration.md): An object describing the content of a widget that uses a custom intent definition to provide user-configurable options.
- [IntentRecommendation](intentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
