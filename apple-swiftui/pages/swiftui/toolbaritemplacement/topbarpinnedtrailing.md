> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/topbarpinnedtrailing](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/topbarpinnedtrailing)

# topBarPinnedTrailing

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

A placement that pins the item to the trailing edge of the toolbar.

## Declaration

```swift
static let topBarPinnedTrailing: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

Pinned items only move to the overflow menu when search is active and there isn’t enough room.

On iOS and visionOS, the top bar is the navigation bar.

## See Also

### Getting explicit placement

- [topBarLeading](topbarleading.md): A placement for items in the leading edge of the top bar.
- [topBarTrailing](topbartrailing.md): A placement for items in the trailing edge of the top bar.
- [bottomBar](bottombar.md): A placement for items in the bottom toolbar.
- [bottomOrnament](bottomornament.md): A placement for items in an ornament under the window.
- [keyboard](keyboard.md): A placement for items in the keyboard section.
- [accessoryBar(id:)](accessorybar%28id_%29.md): Creates a unique accessory bar placement.
