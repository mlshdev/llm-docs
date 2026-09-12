> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/preview(_:widget:relevanceentries:)](https://developer.apple.com/documentation/widgetkit/preview(_:widget:relevanceentries:))

# Preview(\_:widget:relevanceEntries:)

**Framework:** WidgetKit  
**Kind:** Macro  
**Availability:** watchOS 26.0+

Preview a relevance configuration widget.

## Declaration

```swift
@freestanding(declaration) macro Preview<Widget, Entry>(_ name: String? = nil, widget: @escaping @MainActor () -> Widget, @PreviewRelevanceEntryBuilder<Entry> relevanceEntries: @escaping @MainActor () async -> [Entry]) where Widget : Widget, Entry : RelevanceEntry
```

## Parameters

- `name`: An optional display name for the preview that appears in the Xcode preview canvas.
- `widget`: A closure producing the widget to be previewed.
- `relevanceEntries`: A closure building the entries to be previewed.

<a id="overview"></a>

## Overview

Provide the preview with sample data and use it to step through the timeline while ignoring the dates of the entries, and test out the transitions between them.

> **Note**

> The relevance entries must be of the type that the widget expects.

## See Also

### Generating a widget preview

- [Preview(\_:as:widget:timelineProvider:)](preview%28__as_widget_timelineprovider_%29.md): Preview a widget with a static configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-4ljg1.md): Preview a widget with an app intent configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-3df1l.md): Preview a widget with an intent configuration, using the specified timeline provider.
- [Preview(\_:as:widget:timeline:)](preview%28__as_widget_timeline_%29.md): Preview a timeline-style widget.
- [Preview(\_:widget:relevanceProvider:)](preview%28__widget_relevanceprovider_%29.md): Preview a widget with a relevance configuration, using the specified relevance provider.
- [Preview(\_:widget:relevanceProvider:relevance:)](preview%28__widget_relevanceprovider_relevance_%29.md): Preview a widget with a relevance configuration, using the specified relevances.
