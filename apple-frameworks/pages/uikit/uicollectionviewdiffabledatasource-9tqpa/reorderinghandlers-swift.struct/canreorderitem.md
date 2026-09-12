> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct/canreorderitem](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/reorderinghandlers-swift.struct/canreorderitem)

# canReorderItem

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The handler that determines whether you can reorder a particular item.

## Declaration

```swift
var canReorderItem: ((ItemIdentifierType) -> Bool)? { get set }
```

## See Also

### Reordering items

- [willReorder](willreorder.md): The handler that prepares the diffable data source for reordering its items.
- [didReorder](didreorder.md): The handler that processes a reordering transaction.
