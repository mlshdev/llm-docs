> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/shouldcollapseitemhandler](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/shouldcollapseitemhandler)

# shouldCollapseItemHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that determines whether a particular item is collapsable.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) BOOL (^shouldCollapseItemHandler)(ItemType );
```

## See Also

### Expanding and collapsing items

- [shouldExpandItemHandler](shouldexpanditemhandler.md): The handler that determines whether a particular item is expandable.
- [willCollapseItemHandler](willcollapseitemhandler.md): The handler that prepares the diffable data source for collapsing an item.
- [willExpandItemHandler](willexpanditemhandler.md): The handler that prepares the diffable data source for expanding an item.
- [snapshotForExpandingParentItemHandler](snapshotforexpandingparentitemhandler.md): The handler that provides the section snapshot for expanding the parent item.
