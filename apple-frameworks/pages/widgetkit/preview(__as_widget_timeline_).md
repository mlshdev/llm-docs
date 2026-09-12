> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/preview(_:as:widget:timeline:)](https://developer.apple.com/documentation/widgetkit/preview(_:as:widget:timeline:))

# Preview(\_:as:widget:timeline:)

**Framework:** WidgetKit  
**Kind:** Macro  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

Preview a timeline-style widget.

## Declaration

```swift
@freestanding(declaration) macro Preview<Widget>(_ name: String? = nil, as family: WidgetFamily, widget: @escaping () -> Widget, @PreviewTimelineBuilder timeline: @escaping @MainActor () async -> [any TimelineEntry]) where Widget : Widget
```

## Parameters

- `name`: An optional display name for the preview that appears in the Xcode preview canvas.
- `family`: The widget family to display.
- `widget`: A closure producing the widget to be previewed.
- `timeline`: A closure building the timeline of entries to be previewed.

## Mentioned In

- [Previewing widgets and Live Activities in Xcode](previewing-widgets-and-live-activities-in-xcode.md)

<a id="overview"></a>

## Overview

Provide the preview with sample data and use it to step through the timeline while ignoring the dates of the entries, and test out the transitions between them.

> **Note**

> The timeline entries must be of the type that the widget expects.

## See Also

### Generating a widget preview

- [Preview(\_:as:widget:timelineProvider:)](preview%28__as_widget_timelineprovider_%29.md): Preview a widget with a static configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-4ljg1.md): Preview a widget with an app intent configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-3df1l.md): Preview a widget with an intent configuration, using the specified timeline provider.
- [Preview(\_:widget:relevanceEntries:)](preview%28__widget_relevanceentries_%29.md): Preview a relevance configuration widget.
- [Preview(\_:widget:relevanceProvider:)](preview%28__widget_relevanceprovider_%29.md): Preview a widget with a relevance configuration, using the specified relevance provider.
- [Preview(\_:widget:relevanceProvider:relevance:)](preview%28__widget_relevanceprovider_relevance_%29.md): Preview a widget with a relevance configuration, using the specified relevances.
