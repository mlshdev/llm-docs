> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetcenter/invalidaterelevance(ofkind:)](https://developer.apple.com/documentation/widgetkit/widgetcenter/invalidaterelevance(ofkind:))

# invalidateRelevance(ofKind:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Mark the relevance for a kind as invalid.

## Declaration

```swift
func invalidateRelevance(ofKind kind: String)
```

## Parameters

- `kind`: A string that identifies the widget and matches the value you used when you created the widget’s configuration.

<a id="discussion"></a>

## Discussion

Call this function when the relevance returned for a widget has changed and needs to be reloaded.

Marking relevance as invalid causes the system to call, at a later time, the `relevance` function on the timeline provider that matches the specified kind.
