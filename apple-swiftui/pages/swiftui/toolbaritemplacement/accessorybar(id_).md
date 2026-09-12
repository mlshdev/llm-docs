> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/accessorybar(id:)](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/accessorybar(id:))

# accessoryBar(id:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a unique accessory bar placement.

## Declaration

```swift
@backDeployed(before: macOS 14.0)
static func accessoryBar<ID>(id: ID) -> ToolbarItemPlacement where ID : Hashable
```

## Parameters

- `id`: A unique identifier for this placement.

<a id="discussion"></a>

## Discussion

On macOS, items with an accessory bar placement are placed in a section below the title bar and toolbar area of the window. Each separate identifier will correspond to a separate accessory bar that is added to this area.

```swift
extension ToolbarItemPlacement {
    static let favoritesBar = accessoryBar(id: "com.example.favorites")
}
...
BrowserView()
    .toolbar {
        ToolbarItem(placement: .favoritesBar) {
            FavoritesBar()
        }
    }
```

## See Also

### Getting explicit placement

- [topBarLeading](topbarleading.md): A placement for items in the leading edge of the top bar.
- [topBarTrailing](topbartrailing.md): A placement for items in the trailing edge of the top bar.
- [topBarPinnedTrailing](topbarpinnedtrailing.md): A placement that pins the item to the trailing edge of the toolbar.
- [bottomBar](bottombar.md): A placement for items in the bottom toolbar.
- [bottomOrnament](bottomornament.md): A placement for items in an ornament under the window.
- [keyboard](keyboard.md): A placement for items in the keyboard section.
