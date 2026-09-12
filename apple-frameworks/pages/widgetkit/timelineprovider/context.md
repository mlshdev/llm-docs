> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineprovider/context](https://developer.apple.com/documentation/widgetkit/timelineprovider/context)

# TimelineProvider.Context

**Framework:** WidgetKit  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.

## Declaration

```swift
typealias Context = TimelineProviderContext
```

<a id="discussion"></a>

## Discussion

For more information, see [TimelineProviderContext](../timelineprovidercontext.md).

## See Also

### Generating Timelines

- [getSnapshot(in:completion:)](getsnapshot%28in_completion_%29.md): Provides a timeline entry that represents the current time and state of a widget.
- [getTimeline(in:completion:)](gettimeline%28in_completion_%29.md): Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.
- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [Entry](entry.md): A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
