> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement/automatic](https://developer.apple.com/documentation/swiftui/searchfieldplacement/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

SwiftUI places the search field automatically.

## Declaration

```swift
static let automatic: SearchFieldPlacement
```

<a id="discussion"></a>

## Discussion

Placement of the search field depends on the platform:

- In iOS, iPadOS, and macOS, the search field appears in the toolbar.
- In tvOS and watchOS, the search field appears inline with its content.

## See Also

### Getting a search field placement

- [navigationBarDrawer](navigationbardrawer.md): The search field appears in the navigation bar.
- [navigationBarDrawer(displayMode:)](navigationbardrawer%28displaymode_%29.md): The search field appears in the navigation bar using the specified display mode.
- [sidebar](sidebar.md): The search field appears in the sidebar of a navigation view.
- [toolbar](toolbar.md): The search field appears in the toolbar.
