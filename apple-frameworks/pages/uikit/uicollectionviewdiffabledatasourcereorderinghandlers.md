> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereorderinghandlers)

# UICollectionViewDiffableDataSourceReorderingHandlers

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Handlers for reordering items.

## Declaration

```objectivec
@interface UICollectionViewDiffableDataSourceReorderingHandlers : NSObject
```

## Topics

### Reordering items

- [canReorderItemHandler](uicollectionviewdiffabledatasourcereorderinghandlers/canreorderitemhandler.md): The handler that determines whether you can reorder a particular item.
- [willReorderHandler](uicollectionviewdiffabledatasourcereorderinghandlers/willreorderhandler.md): The handler that prepares the diffable data source for reordering its items.
- [didReorderHandler](uicollectionviewdiffabledatasourcereorderinghandlers/didreorderhandler.md): The handler that processes a reordering transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Supporting reordering

- [reorderingHandlers](uicollectionviewdiffabledatasourcereference/reorderinghandlers.md): The diffable data source’s handlers for reordering items.
- [NSDiffableDataSourceTransaction](nsdiffabledatasourcetransaction-c.class.md): A transaction that describes the changes after reordering the items in the view.
- [NSDiffableDataSourceSectionTransaction](nsdiffabledatasourcesectiontransaction-c.class.md): A transaction that describes the changes after reordering the items in a section.
