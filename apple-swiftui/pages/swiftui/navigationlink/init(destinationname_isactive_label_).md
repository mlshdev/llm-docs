> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(destinationname:isactive:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(destinationname:isactive:label:))

# init(destinationName:isActive:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates a navigation link that presents a view from a WatchKit storyboard when active.

> Use [init(value:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28value:label:%29-3qb8y) instead. For more information, see [Migrating to new navigation types](../migrating-to-new-navigation-types.md).

## Declaration

```swift
nonisolated init(destinationName: String, isActive: Binding<Bool>, @ContentBuilder label: () -> Label)
```

## Parameters

- `destinationName`: The storyboard name of a view for the navigation link to present.
- `isActive`: A binding to a Boolean value that indicates whether `destination` is currently presented.
- `label`: A content builder to produce a label describing the `destination` to present.

## See Also

### Creating links for WatchKit

- [init(destinationName:tag:selection:label:)](init%28destinationname_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when a bound selection variable matches a value you provide.
- [init(destinationName:label:)](init%28destinationname_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard.
