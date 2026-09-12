> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/textediting](https://developer.apple.com/documentation/swiftui/commandgroupplacement/textediting)

# textEditing

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that manipulate and transform text selections.

## Declaration

```swift
static let textEditing: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following commands in macOS:

- Find submenu
- Spelling and Grammar submenu
- Substitutions submenu
- Transformations submenu
- Speech submenu

## See Also

### Content updates

- [pasteboard](pasteboard.md): Placement for commands that interact with the Clipboard and manipulate content that is currently selected in the app’s view hierarchy.
- [textFormatting](textformatting.md): Placement for commands that manipulate and transform the styles applied to text selections.
- [undoRedo](undoredo.md): Placement for commands that control the Undo Manager.
