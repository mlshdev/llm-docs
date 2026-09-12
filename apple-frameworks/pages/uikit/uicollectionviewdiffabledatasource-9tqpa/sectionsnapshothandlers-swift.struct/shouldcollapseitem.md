> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/shouldcollapseitem](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/shouldcollapseitem)

# shouldCollapseItem

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The handler that determines whether a particular item is collapsable.

## Declaration

```swift
var shouldCollapseItem: ((ItemIdentifierType) -> Bool)? { get set }
```

## See Also

### Expanding and collapsing items

- [shouldExpandItem](shouldexpanditem.md): The handler that determines whether a particular item is expandable.
- [willCollapseItem](willcollapseitem.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItem](willexpanditem.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParent](snapshotforexpandingparent.md): The handler that provides the section snapshot for expanding the parent item.
