> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrelevancegroup/named(_:)](https://developer.apple.com/documentation/widgetkit/widgetrelevancegroup/named(_:))

# named(\_:)

**Framework:** WidgetKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Creates a group with the provided name.

## Declaration

```swift
static func named(_ name: String) -> WidgetRelevanceGroup
```

<a id="discussion"></a>

## Discussion

The system won’t show more than one relevant widget if they are in the same. A widget group doesn’t affect widgets by other apps.
