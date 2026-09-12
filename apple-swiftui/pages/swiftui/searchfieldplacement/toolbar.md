> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement/toolbar](https://developer.apple.com/documentation/swiftui/searchfieldplacement/toolbar)

# toolbar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The search field appears in the toolbar.

## Declaration

```swift
static let toolbar: SearchFieldPlacement
```

<a id="discussion"></a>

## Discussion

The precise placement depends on the platform:

- In iOS and watchOS, the search field appears below the navigation bar and is revealed by scrolling.
- In iPadOS, the search field appears in the trailing navigation bar.
- In macOS, the search field appears in the trailing toolbar.

## See Also

### Getting a search field placement

- [automatic](automatic.md): SwiftUI places the search field automatically.
- [navigationBarDrawer](navigationbardrawer.md): The search field appears in the navigation bar.
- [navigationBarDrawer(displayMode:)](navigationbardrawer%28displaymode_%29.md): The search field appears in the navigation bar using the specified display mode.
- [sidebar](sidebar.md): The search field appears in the sidebar of a navigation view.
