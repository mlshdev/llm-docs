> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/commandgroupplacement/saveitem](https://developer.apple.com/documentation/swiftui/commandgroupplacement/saveitem)

# saveItem

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Placement for commands that save open documents and close windows.

## Declaration

```swift
static let saveItem: CommandGroupPlacement
```

<a id="discussion"></a>

## Discussion

By default, this group includes the following commands in macOS:

- Close
- Save
- Save As/Duplicate
- Revert to Saved

## See Also

### File manipulation

- [importExport](importexport.md): Placement for commands that relate to importing and exporting data using formats that the app doesn’t natively support.
- [newItem](newitem.md): Placement for commands that create different kinds of documents.
- [printItem](printitem.md): Placement for commands related to printing app content.
