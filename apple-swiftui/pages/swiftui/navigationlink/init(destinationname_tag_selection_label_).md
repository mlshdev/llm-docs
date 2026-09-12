> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(destinationname:tag:selection:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(destinationname:tag:selection:label:))

# init(destinationName:tag:selection:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates a navigation link that presents a view from a WatchKit storyboard when a bound selection variable matches a value you provide.

> Use [init(value:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28value:label:%29-3qb8y) inside a [List](../list.md) within a [NavigationStack](../navigationstack.md) or [NavigationSplitView](../navigationsplitview.md). For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated init<V>(destinationName: String, tag: V, selection: Binding<V?>, @ContentBuilder label: () -> Label) where V : Hashable
```

## Parameters

- `destinationName`: The storyboard name of a view for the navigation link to present.
- `tag`: The value of `selection` that causes the link to present `destination`.
- `selection`: A bound variable that causes the link to present `destination` when `selection` becomes equal to `tag`.
- `label`: A content builder to produce a label describing the `destination` to present.

## See Also

### Creating links for WatchKit

- [init(destinationName:isActive:label:)](init%28destinationname_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when active.
- [init(destinationName:label:)](init%28destinationname_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard.
