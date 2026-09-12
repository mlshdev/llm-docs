> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/removeitems(at:)](https://developer.apple.com/documentation/appkit/nsscrubber/removeitems(at:))

# removeItems(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Removes the items at the specified indexes from the scrubber.

## Declaration

```swift
func removeItems(at indexes: IndexSet)
```

## Parameters

- `indexes`: An index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)) of the indexes of the items to remove.

## See Also

### Inserting, moving, and deleting items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items at the specified indexes into the scrubber.
- [moveItem(at:to:)](moveitem%28at_to_%29.md): Moves an item from one index to another in the scrubber.

# removeItemsAtIndexes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Removes the items at the specified indexes from the scrubber.

## Declaration

```objectivec
- (void) removeItemsAtIndexes:(NSIndexSet *) indexes;
```

## Parameters

- `indexes`: An index set ([IndexSet](https://developer.apple.com/documentation/foundation/indexset)) of the indexes of the items to remove.

## See Also

### Inserting, moving, and deleting items

- [insertItemsAtIndexes:](insertitems%28at_%29.md): Inserts new items at the specified indexes into the scrubber.
- [moveItemAtIndex:toIndex:](moveitem%28at_to_%29.md): Moves an item from one index to another in the scrubber.
