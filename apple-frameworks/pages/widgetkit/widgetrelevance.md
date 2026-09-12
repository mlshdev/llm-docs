> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrelevance](https://developer.apple.com/documentation/widgetkit/widgetrelevance)

# WidgetRelevance

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

A type collecting the relevances for a widget kind.

## Declaration

```swift
struct WidgetRelevance<Configuration>
```

<a id="overview"></a>

## Overview

Return this type from the `relevance()` requirement of your [TimelineProvider](timelineprovider.md), [AppIntentTimelineProvider](appintenttimelineprovider.md), or [IntentTimelineProvider](intenttimelineprovider.md) to inform the system of when a widget might be relevant and in which configuration.

Make sure to return the relevances ordered by priority because the system might decide to utilize only a subset of the provided relevances.

## Topics

### Initializers

- [init(\_:)](widgetrelevance/init%28__%29.md): Creates a type collecting the relevances for a widget kind.

## See Also

### Smart Stacks

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [TimelineEntryRelevance](timelineentryrelevance.md): An object that describes the relative importance of a timeline entry compared to other entries in the current and past timelines.
- [RelevanceConfiguration](relevanceconfiguration.md): A type that describes the content of a widget that uses relevance clues.
- [RelevanceEntriesProvider](relevanceentriesprovider.md): A type that provides the content for a widget that uses relevance clues to display information in the Smart Stack.
- [RelevanceEntry](relevanceentry.md): A type that specifies the information to render a widget at a specific relevance configuration.
- [WidgetRelevanceAttribute](widgetrelevanceattribute.md): A type that describes when a specific widget could be relevant.
- [WidgetRelevanceGroup](widgetrelevancegroup.md): A type for configuring widget behavior in the watchOS Smart Stack.
- [AppIntentRecommendation](appintentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
- [IntentConfiguration](intentconfiguration.md): An object describing the content of a widget that uses a custom intent definition to provide user-configurable options.
- [IntentRecommendation](intentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
