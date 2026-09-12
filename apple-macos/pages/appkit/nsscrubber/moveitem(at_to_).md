> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/moveitem(at:to:)](https://developer.apple.com/documentation/appkit/nsscrubber/moveitem(at:to:))

# moveItem(at:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Moves an item from one index to another in the scrubber.

## Declaration

```swift
func moveItem(at oldIndex: Int, to newIndex: Int)
```

## Parameters

- `oldIndex`: The index of the item that you want to move.
- `newIndex`: The index of the item’s new location.

## See Also

### Inserting, moving, and deleting items

- [insertItems(at:)](insertitems%28at_%29.md): Inserts new items at the specified indexes into the scrubber.
- [removeItems(at:)](removeitems%28at_%29.md): Removes the items at the specified indexes from the scrubber.

# moveItemAtIndex:toIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Moves an item from one index to another in the scrubber.

## Declaration

```objectivec
- (void) moveItemAtIndex:(NSInteger) oldIndex toIndex:(NSInteger) newIndex;
```

## Parameters

- `oldIndex`: The index of the item that you want to move.
- `newIndex`: The index of the item’s new location.

## See Also

### Inserting, moving, and deleting items

- [insertItemsAtIndexes:](insertitems%28at_%29.md): Inserts new items at the specified indexes into the scrubber.
- [removeItemsAtIndexes:](removeitems%28at_%29.md): Removes the items at the specified indexes from the scrubber.
