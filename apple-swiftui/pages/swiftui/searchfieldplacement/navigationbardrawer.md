> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement/navigationbardrawer](https://developer.apple.com/documentation/swiftui/searchfieldplacement/navigationbardrawer)

# navigationBarDrawer

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

The search field appears in the navigation bar.

## Declaration

```swift
static let navigationBarDrawer: SearchFieldPlacement
```

<a id="discussion"></a>

## Discussion

The field appears below any navigation bar title and uses the [automatic](navigationbardrawerdisplaymode/automatic.md) display mode to configure when to hide the search field. To choose a different display mode, use [navigationBarDrawer(displayMode:)](navigationbardrawer%28displaymode_%29.md) instead.

## See Also

### Getting a search field placement

- [automatic](automatic.md): SwiftUI places the search field automatically.
- [navigationBarDrawer(displayMode:)](navigationbardrawer%28displaymode_%29.md): The search field appears in the navigation bar using the specified display mode.
- [sidebar](sidebar.md): The search field appears in the sidebar of a navigation view.
- [toolbar](toolbar.md): The search field appears in the toolbar.
