> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/willcollapseitem](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/willcollapseitem)

# willCollapseItem

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The handler that prepares the diffable data source for collapsing an item.

## Declaration

```swift
var willCollapseItem: ((ItemIdentifierType) -> Void)? { get set }
```

## See Also

### Expanding and collapsing items

- [shouldCollapseItem](shouldcollapseitem.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItem](shouldexpanditem.md): The handler that determines whether a particular item is expandable.
- [willExpandItem](willexpanditem.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParent](snapshotforexpandingparent.md): The handler that provides the section snapshot for expanding the parent item.
