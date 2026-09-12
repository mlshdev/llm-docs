> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/navigationlink/init(destinationname:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init(destinationname:label:))

# init(destinationName:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates a navigation link that presents a view from a WatchKit storyboard.

> Use [init(destination:label:)](https://developer.apple.com/documentation/swiftui/navigationlink/init%28destination:label:%29-27n7s) instead.

## Declaration

```swift
nonisolated init(destinationName: String, @ContentBuilder label: () -> Label)
```

## Parameters

- `destinationName`: The storyboard name of a view for the navigation link to present.
- `label`: A content builder to produce a label describing the `destination` to present.

## See Also

### Creating links for WatchKit

- [init(destinationName:isActive:label:)](init%28destinationname_isactive_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when active.
- [init(destinationName:tag:selection:label:)](init%28destinationname_tag_selection_label_%29.md): Deprecated. Conforms when `Label` conforms to `View` and `Destination` is `_WKStoryboardContent`. Creates a navigation link that presents a view from a WatchKit storyboard when a bound selection variable matches a value you provide.
