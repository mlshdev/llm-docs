> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/sectionsnapshothandlers-swift.struct/shouldexpanditem

# shouldExpandItem

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The handler that determines whether a particular item is expandable.

## Declaration

```swift
var shouldExpandItem: ((ItemIdentifierType) -> Bool)? { get set }
```

## See Also

### Expanding and collapsing items

- [shouldCollapseItem](shouldcollapseitem.md): The handler that determines whether a particular item is collapsable.
- [willCollapseItem](willcollapseitem.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItem](willexpanditem.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParent](snapshotforexpandingparent.md): The handler that provides the section snapshot for expanding the parent item.
