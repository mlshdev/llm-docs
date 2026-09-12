> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbaritemplacement/status](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/status)

# status

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 18.0+ · visionOS 1.0+

A placement for items that represents a change in status.

## Declaration

```swift
static let status: ToolbarItemPlacement
```

<a id="discussion"></a>

## Discussion

Status items are informational in nature, and don’t represent an action that can be taken by the user. For example, a message that indicates the time of the last communication with the server to check for new messages.

In macOS and in Mac Catalyst apps, the system places status items in the center of the toolbar.

In iOS and iPadOS, the system places status items in the center of the bottom toolbar.

In tvOS, this placement is only available from within the sidebar of a [NavigationSplitView](../navigationsplitview.md).  The system places status items in the center of the bottom toolbar within the navigation sidebar.  It has no effect if used elsewhere.

## See Also

### Getting semantic placement

- [automatic](automatic.md): A placement the system positions automatically.
- [principal](principal.md): A placement for the principal item section.
