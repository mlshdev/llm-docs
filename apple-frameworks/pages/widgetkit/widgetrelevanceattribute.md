> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrelevanceattribute](https://developer.apple.com/documentation/widgetkit/widgetrelevanceattribute)

# WidgetRelevanceAttribute

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

A type that describes when a specific widget could be relevant.

## Declaration

```swift
struct WidgetRelevanceAttribute<Configuration>
```

<a id="overview"></a>

## Overview

Use the relevance attribute’s `RelevantContext` to describe when a specific widget might be relevant.

## Topics

### Initializers

- [init(configuration:context:)](widgetrelevanceattribute/init%28configuration_context_%29-8325r.md): Conforms when `Configuration` inherits `INIntent`. Creates a new widget relevance for a specific configuration that is relevant in a specific context.
- [init(configuration:context:)](widgetrelevanceattribute/init%28configuration_context_%29-8jxhs.md): Conforms when `Configuration` conforms to `WidgetConfigurationIntent`. Creates a new widget relevance for a specific configuration that is relevant in a specific context.
- [init(configuration:group:)](widgetrelevanceattribute/init%28configuration_group_%29-5yh17.md): Conforms when `Configuration` inherits `INIntent`. Associates the widget kind with a group. When multiple widgets are in the same group, the system will only suggest one member of the group simultaneously. Widgets in the same group are interpreted to contain redundant information, and therefore should not be presented together.
- [init(configuration:group:)](widgetrelevanceattribute/init%28configuration_group_%29-93jm5.md): Conforms when `Configuration` conforms to `WidgetConfigurationIntent`. Associates the widget kind with a group. When multiple widgets are in the same group, the system will only suggest one member of the group simultaneously. Widgets in the same group are interpreted to contain redundant information, and therefore should not be presented together.
- [init(context:)](widgetrelevanceattribute/init%28context_%29.md): Conforms when `Configuration` is `()`. Creates a new widget relevance that is relevant in a specific context.
- [init(group:)](widgetrelevanceattribute/init%28group_%29.md): Conforms when `Configuration` is `()`. Associates the widget kind with a group. When multiple widgets are in the same group, the system only suggests one member of the group simultaneously. Widgets in the same group are interpreted to contain redundant information, and therefore should not be presented together.

## See Also

### Smart Stacks

- [Increasing the visibility of widgets in Smart Stacks](widget-suggestions-in-smart-stacks.md): Provide contextual information and donate intents to the system to make sure your widget appears prominently in Smart Stacks.
- [TimelineEntryRelevance](timelineentryrelevance.md): An object that describes the relative importance of a timeline entry compared to other entries in the current and past timelines.
- [RelevanceConfiguration](relevanceconfiguration.md): A type that describes the content of a widget that uses relevance clues.
- [RelevanceEntriesProvider](relevanceentriesprovider.md): A type that provides the content for a widget that uses relevance clues to display information in the Smart Stack.
- [RelevanceEntry](relevanceentry.md): A type that specifies the information to render a widget at a specific relevance configuration.
- [WidgetRelevance](widgetrelevance.md): A type collecting the relevances for a widget kind.
- [WidgetRelevanceGroup](widgetrelevancegroup.md): A type for configuring widget behavior in the watchOS Smart Stack.
- [AppIntentRecommendation](appintentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
- [IntentConfiguration](intentconfiguration.md): An object describing the content of a widget that uses a custom intent definition to provide user-configurable options.
- [IntentRecommendation](intentrecommendation.md): An object that describes a recommended intent configuration for a user-customizable widget.
