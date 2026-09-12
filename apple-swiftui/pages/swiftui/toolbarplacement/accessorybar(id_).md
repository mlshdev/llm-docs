> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarplacement/accessorybar(id:)](https://developer.apple.com/documentation/swiftui/toolbarplacement/accessorybar(id:))

# accessoryBar(id:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a unique accessory bar placement.

## Declaration

```swift
@backDeployed(before: macOS 14.0)
static func accessoryBar<ID>(id: ID) -> ToolbarPlacement where ID : Hashable
```

## Parameters

- `id`: A unique identifier for this placement.

<a id="discussion"></a>

## Discussion

On macOS, accessory bars are in a section below the title bar and toolbar area of the window. Each separate identifier will correspond to a separate accessory bar that is added to this area.

Use a custom placement to control the appearance of the containing bar for items using a custom [ToolbarItemPlacement](../toolbaritemplacement.md) with the same identifier.

```swift
private let favoritesBarID = "com.example.favoritesBar"
extension ToolbarItemPlacement {
    static let favoritesBar = accessoryBar(id: favoritesBarID)
}
extension ToolbarPlacement {
    static let favoritesBar = accessoryBar(id: favoritesBarID)
}
...
BrowserView()
    .toolbar {
        ToolbarItem(placement: .favoritesBar) {
            FavoritesBar()
        }
    }
    .toolbar(.hidden, for: .favoritesBar)
```

## See Also

### Getting placements

- [automatic](automatic.md): The primary toolbar.
- [bottomBar](bottombar.md): The bottom toolbar of an app.
- [bottomOrnament](bottomornament.md): The bottom ornament of an app.
- [navigationBar](navigationbar.md): The navigation bar of an app.
- [tabBar](tabbar.md): The tab bar of an app.
- [windowToolbar](windowtoolbar.md): The placement for the containing window’s toolbar, sometimes referred to as the titlebar.
