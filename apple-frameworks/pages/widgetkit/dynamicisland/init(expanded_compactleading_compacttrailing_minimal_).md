> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/dynamicisland/init(expanded:compactleading:compacttrailing:minimal:)](https://developer.apple.com/documentation/widgetkit/dynamicisland/init(expanded:compactleading:compacttrailing:minimal:))

# init(expanded:compactLeading:compactTrailing:minimal:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Creates a configuration object with views that appear in the Dynamic Island.

## Declaration

```swift
init<Expanded, CompactLeading, CompactTrailing, Minimal>(@DynamicIslandExpandedContentBuilder expanded: @escaping () -> DynamicIslandExpandedContent<Expanded>, @ViewBuilder compactLeading: @escaping () -> CompactLeading, @ViewBuilder compactTrailing: @escaping () -> CompactTrailing, @ViewBuilder minimal: @escaping () -> Minimal) where Expanded : View, CompactLeading : View, CompactTrailing : View, Minimal : View
```

## Parameters

- `expanded`: A closure that builds the view for the expanded presentation of the Live Activity.
- `compactLeading`: A closure that builds the view for the compact leading presentation of the Live Activity.
- `compactTrailing`: A closure that builds the view for the compact trailing presentation of the Live Activity.
- `minimal`: A closure that builds the view for the minimal presentation of the Live Activity.

## See Also

### Creating the view for the Dynamic Island

- [DynamicIslandExpandedRegion](../dynamicislandexpandedregion.md): A structure that defines and positions the content of an expanded Live Activity in the Dynamic Island.
