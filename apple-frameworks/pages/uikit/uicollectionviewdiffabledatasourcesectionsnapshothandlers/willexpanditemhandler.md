> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcesectionsnapshothandlers/willexpanditemhandler

# willExpandItemHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that prepares the diffable data source for expanding an item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^willExpandItemHandler)(ItemType );
```

## See Also

### Expanding and collapsing items

- [shouldCollapseItemHandler](shouldcollapseitemhandler.md): The handler that determines whether a particular item is collapsable.
- [shouldExpandItemHandler](shouldexpanditemhandler.md): The handler that determines whether a particular item is expandable.
- [willCollapseItemHandler](willcollapseitemhandler.md): The handler that prepares the diffable data source for collapsing an item.
- [snapshotForExpandingParentItemHandler](snapshotforexpandingparentitemhandler.md): The handler that provides the section snapshot for expanding the parent item.
