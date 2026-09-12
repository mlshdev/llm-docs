> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/willreorderhandler](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/willreorderhandler)

# willReorderHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that prepares the diffable data source for reordering its items.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^willReorderHandler)(NSDiffableDataSourceTransaction<id,id> *);
```

## See Also

### Reordering items

- [canReorderItemHandler](canreorderitemhandler.md): The handler that determines whether you can reorder a particular item.
- [didReorderHandler](didreorderhandler.md): The handler that processes a reordering transaction.
