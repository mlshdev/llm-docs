> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchfieldplacement/navigationbardrawer(displaymode:)](https://developer.apple.com/documentation/swiftui/searchfieldplacement/navigationbardrawer(displaymode:))

# navigationBarDrawer(displayMode:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The search field appears in the navigation bar using the specified display mode.

## Declaration

```swift
static func navigationBarDrawer(displayMode: SearchFieldPlacement.NavigationBarDrawerDisplayMode) -> SearchFieldPlacement
```

## Parameters

- `displayMode`: A control that indicates whether to hide the search field in response to scrolling.

<a id="discussion"></a>

## Discussion

The field appears below any navigation bar title. The system can hide the field in response to scrolling, depending on the `displayMode` that you set.

## See Also

### Getting a search field placement

- [automatic](automatic.md): SwiftUI places the search field automatically.
- [navigationBarDrawer](navigationbardrawer.md): The search field appears in the navigation bar.
- [sidebar](sidebar.md): The search field appears in the sidebar of a navigation view.
- [toolbar](toolbar.md): The search field appears in the toolbar.
