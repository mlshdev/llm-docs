> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/preview(_:widget:relevanceprovider:)](https://developer.apple.com/documentation/widgetkit/preview(_:widget:relevanceprovider:))

# Preview(\_:widget:relevanceProvider:)

**Framework:** WidgetKit  
**Kind:** Macro  
**Availability:** watchOS 26.0+

Preview a widget with a relevance configuration, using the specified relevance provider.

## Declaration

```swift
@freestanding(declaration) macro Preview<Widget, Provider>(_ name: String? = nil, widget: @escaping @MainActor () -> Widget, relevanceProvider: @escaping @MainActor () -> Provider) where Widget : Widget, Provider : RelevanceEntriesProvider
```

## Parameters

- `name`: An optional display name for the preview that appears in the Xcode preview canvas.
- `widget`: A closure producing the widget to be previewed.
- `relevanceProvider`: A closure producing the relevance provider that generates the preview’s relevances and entries.

<a id="overview"></a>

## Overview

Use sample data for your relevance provider and use it to step through the entries in the Xcode proview canvas.

> **Note**

> The relevance provider must be of the type that the widget expects.

## See Also

### Generating a widget preview

- [Preview(\_:as:widget:timelineProvider:)](preview%28__as_widget_timelineprovider_%29.md): Preview a widget with a static configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-4ljg1.md): Preview a widget with an app intent configuration, using the specified timeline provider.
- [Preview(\_:as:using:widget:timelineProvider:)](preview%28__as_using_widget_timelineprovider_%29-3df1l.md): Preview a widget with an intent configuration, using the specified timeline provider.
- [Preview(\_:as:widget:timeline:)](preview%28__as_widget_timeline_%29.md): Preview a timeline-style widget.
- [Preview(\_:widget:relevanceEntries:)](preview%28__widget_relevanceentries_%29.md): Preview a relevance configuration widget.
- [Preview(\_:widget:relevanceProvider:relevance:)](preview%28__widget_relevanceprovider_relevance_%29.md): Preview a widget with a relevance configuration, using the specified relevances.
