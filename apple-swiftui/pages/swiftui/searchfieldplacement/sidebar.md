> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement/sidebar](https://developer.apple.com/documentation/swiftui/searchfieldplacement/sidebar)

# sidebar

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

The search field appears in the sidebar of a navigation view.

## Declaration

```swift
static var sidebar: SearchFieldPlacement { get }
```

## Mentioned In

- [Adding a search interface to your app](../adding-a-search-interface-to-your-app.md)

<a id="discussion"></a>

## Discussion

The precise placement depends on the platform:

- In iOS and iPadOS the search field appears in the section of the navigation bar associated with the sidebar.
- In macOS the search field appears as a sticky header in the sidebar, attached to the toolbar.

If a sidebar isn’t available, like when you apply the searchable modifier to a view other than a navigation split view, SwiftUI uses automatic placement instead.

> **Note**

> The search field appears inline with the sidebar’s content when building with Xcode 16 SDKs or earlier.

## See Also

### Getting a search field placement

- [automatic](automatic.md): SwiftUI places the search field automatically.
- [navigationBarDrawer](navigationbardrawer.md): The search field appears in the navigation bar.
- [navigationBarDrawer(displayMode:)](navigationbardrawer%28displaymode_%29.md): The search field appears in the navigation bar using the specified display mode.
- [toolbar](toolbar.md): The search field appears in the toolbar.
