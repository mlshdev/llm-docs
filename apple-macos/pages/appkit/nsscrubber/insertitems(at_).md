> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/insertitems(at:)](https://developer.apple.com/documentation/appkit/nsscrubber/insertitems(at:))

# insertItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Inserts new items at the specified indexes into the scrubber.

## Declaration

```swift
func insertItems(at indexes: IndexSet)
```

## Parameters

- `indexes`: An index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)) of the indexes of the items to insert.

<a id="Discussion"></a>

## Discussion

The scrubber requests the view for each index from its data source.

## See Also

### Inserting, moving, and deleting items

- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one index to another in the scrubber.
- [removeItems(at:)](removeitems%28at_%29.md): Removes the items at the specified indexes from the scrubber.

# insertItemsAtIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Inserts new items at the specified indexes into the scrubber.

## Declaration

```objectivec
- (void) insertItemsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: An index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)) of the indexes of the items to insert.

<a id="Discussion"></a>

## Discussion

The scrubber requests the view for each index from its data source.

## See Also

### Inserting, moving, and deleting items

- [moveItemAtIndex:toIndex:](moveitem%28at_to_%29.md): Moves an item from one index to another in the scrubber.
- [removeItemsAtIndexes:](removeitems%28at_%29.md): Removes the items at the specified indexes from the scrubber.
