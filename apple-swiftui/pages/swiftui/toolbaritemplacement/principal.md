> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/principal](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/principal)

# principal

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A placement for the principal item section.

## Declaration

```swift
static let principal: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

Principal actions are key units of functionality that receive prominent placement. For example, the location field for a web browser is a principal item.

In macOS and in Mac Catalyst apps, the system places the principal item in the center of the toolbar.

In iOS, iPadOS, and tvOS, the system places the principal item in the center of the navigation bar. This item takes precedent over a title specified through `View/navigationTitle`.

## See Also

### Getting semantic placement

- [automatic](automatic.md): A placement the system positions automatically.
- [status](status.md): A placement for items that represents a change in status.
