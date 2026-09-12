> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/moveitem(at:inparent:to:inparent:)](https://developer.apple.com/documentation/appkit/nsoutlineview/moveitem(at:inparent:to:inparent:))

# moveItem(at:inParent:to:inParent:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Moves an item at a given index in the given parent to a new index in a new parent.

## Declaration

```swift
func moveItem(at fromIndex: Int, inParent oldParent: Any?, to toIndex: Int, inParent newParent: Any?)
```

## Parameters

- `fromIndex`: Index of the item to be moved.
- `oldParent`: The parent of the item to be moved.
- `toIndex`: Index in the new parent to which the item is moved.
- `newParent`: The parent of the item after it is moved.

<a id="Discussion"></a>

## Discussion

This method parallels the [moveRow(at:to:)](../nstableview/moverow%28at_to_%29.md) method of [NSTableView](../nstableview.md). The `newParent` can be the same as `oldParent` to reorder an item within the same parent.

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates()](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates()](../nstableview/beginupdates%28%29.md)/[endUpdates()](../nstableview/endupdates%28%29.md) block. Moving from an invalid index, or to an invalid index, throws an exception.

## See Also

### Manipulating Items

- [insertItems(at:inParent:withAnimation:)](insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [removeItems(at:inParent:withAnimation:)](removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.

# moveItemAtIndex:inParent:toIndex:inParent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Moves an item at a given index in the given parent to a new index in a new parent.

## Declaration

```objectivec
- (void) moveItemAtIndex:(NSInteger) fromIndex inParent:(id) oldParent toIndex:(NSInteger) toIndex inParent:(id) newParent;
```

## Parameters

- `fromIndex`: Index of the item to be moved.
- `oldParent`: The parent of the item to be moved.
- `toIndex`: Index in the new parent to which the item is moved.
- `newParent`: The parent of the item after it is moved.

<a id="Discussion"></a>

## Discussion

This method parallels the [moveRowAtIndex:toIndex:](../nstableview/moverow%28at_to_%29.md) method of [NSTableView](../nstableview.md). The `newParent` can be the same as `oldParent` to reorder an item within the same parent.

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates](../nstableview/beginupdates%28%29.md)/[endUpdates](../nstableview/endupdates%28%29.md) block. Moving from an invalid index, or to an invalid index, throws an exception.

## See Also

### Manipulating Items

- [insertItemsAtIndexes:inParent:withAnimation:](insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [removeItemsAtIndexes:inParent:withAnimation:](removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.
