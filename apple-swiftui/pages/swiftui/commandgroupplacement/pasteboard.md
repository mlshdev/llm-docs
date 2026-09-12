> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/pasteboard](https://developer.apple.com/documentation/swiftui/commandgroupplacement/pasteboard)

# pasteboard

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that interact with the Clipboard and manipulate content that is currently selected in the app’s view hierarchy.

## Declaration

```swift
static let pasteboard: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following commands in macOS:

- Cut
- Copy
- Paste
- Paste and Match Style
- Delete
- Select All

## See Also

### Content updates

- [textEditing](textediting.md): Placement for commands that manipulate and transform text selections.
- [textFormatting](textformatting.md): Placement for commands that manipulate and transform the styles applied to text selections.
- [undoRedo](undoredo.md): Placement for commands that control the Undo Manager.
