> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-4ljg1](https://developer.apple.com/documentation/widgetkit/preview(_:as:using:widget:timelineprovider:)-4ljg1)

# Preview(\_:as:using:widget:timelineProvider:)

**Framework:** WidgetKit  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

Preview a widget with an app intent configuration, using the specified timeline provider.

## Declaration

```swift
@freestanding(declaration) macro Preview<Widget, Provider>(_ name: String? = nil, as family: WidgetFamily, using intent: Provider.Intent, widget: @escaping () -> Widget, timelineProvider: @escaping () -> Provider) where Widget : Widget, Provider : AppIntentTimelineProvider
```

## Parameters

- `name`: An optional display name for the preview that appears in the Xcode preview canvas.
- `family`: The widget family to display.
- `intent`: The intent with which to configure the widget.
- `widget`: A closure producing the widget to be previewed.
- `timelineProvider`: A closure producing the timeline provider that generates the preview’s timeline.

## Mentioned In

- [Previewing widgets and Live Activities in Xcode](previewing-widgets-and-live-activities-in-xcode.md)

<a id="overview"></a>

## Overview

Provide the preview with sample data and use it to step through the timeline while ignoring the dates of the entries, and test out the transitions between them.

> **Note**

> The timeline provider must be of the type that the widget expects.

## See Also

### Generating a widget preview

- [Preview(\_:as:widget:timelineProvider:)](preview%28__as_widget_timelineprovider_%29.md): Preview a widget with a static configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-3df1l.md): Preview a widget with an intent configuration, using the specified timeline provider.
- [Preview(\_:as:widget:timeline:)](preview%28__as_widget_timeline_%29.md): Preview a timeline-style widget.
- [Preview(\_:widget:relevanceEntries:)](preview%28__widget_relevanceentries_%29.md): Preview a relevance configuration widget.
- [Preview(\_:widget:relevanceProvider:)](preview%28__widget_relevanceprovider_%29.md): Preview a widget with a relevance configuration, using the specified relevance provider.
- [Preview(\_:widget:relevanceProvider:relevance:)](preview%28__widget_relevanceprovider_relevance_%29.md): Preview a widget with a relevance configuration, using the specified relevances.
