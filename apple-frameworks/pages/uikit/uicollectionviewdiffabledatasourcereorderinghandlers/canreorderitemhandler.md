> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/canreorderitemhandler](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers/canreorderitemhandler)

# canReorderItemHandler

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that determines whether you can reorder a particular item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) BOOL (^canReorderItemHandler)(ItemType );
```

## See Also

### Reordering items

- [willReorderHandler](willreorderhandler.md): The handler that prepares the diffable data source for reordering its items.
- [didReorderHandler](didreorderhandler.md): The handler that processes a reordering transaction.
