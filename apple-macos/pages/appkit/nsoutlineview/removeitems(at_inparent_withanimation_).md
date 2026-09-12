> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/removeitems(at:inparent:withanimation:)](https://developer.apple.com/documentation/appkit/nsoutlineview/removeitems(at:inparent:withanimation:))

# removeItems(at:inParent:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes items at the given indexes in the given parent with the specified optional animations.

## Declaration

```swift
func removeItems(at indexes: IndexSet, inParent parent: Any?, withAnimation animationOptions: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: Indexes of the items to be removed.
- `parent`: The parent of the items to be removed.
- `animationOptions`: Animated slide effects used when removing items.

<a id="Discussion"></a>

## Discussion

This method parallels the [removeRows(at:withAnimation:)](../nstableview/removerows%28at_withanimation_%29.md) method of [NSTableView](../nstableview.md) and is used in a way similar to the [removeObjects(at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects%28at:%29) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray). The method does nothing if `parent` is not expanded. If any of the child items is expanded, then all of its child rows are also be removed.

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates()](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates()](../nstableview/beginupdates%28%29.md)/[endUpdates()](../nstableview/endupdates%28%29.md) block; changes work just like modifying an array. Removing an item at an index beyond what is available throws an exception.

## See Also

### Manipulating Items

- [insertItems(at:inParent:withAnimation:)](insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [moveItem(at:inParent:to:inParent:)](moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.

# removeItemsAtIndexes:inParent:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes items at the given indexes in the given parent with the specified optional animations.

## Declaration

```objectivec
- (void) removeItemsAtIndexes:(NSIndexSet *) indexes inParent:(id) parent withAnimation:(NSTableViewAnimationOptions) animationOptions;
```

## Parameters

- `indexes`: Indexes of the items to be removed.
- `parent`: The parent of the items to be removed.
- `animationOptions`: Animated slide effects used when removing items.

<a id="Discussion"></a>

## Discussion

This method parallels the [removeRowsAtIndexes:withAnimation:](../nstableview/removerows%28at_withanimation_%29.md) method of [NSTableView](../nstableview.md) and is used in a way similar to the [removeObjectsAtIndexes:](https://developer.apple.com/documentation/foundation/nsmutablearray/removeobjects%28at:%29) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray). The method does nothing if `parent` is not expanded. If any of the child items is expanded, then all of its child rows are also be removed.

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates](../nstableview/beginupdates%28%29.md)/[endUpdates](../nstableview/endupdates%28%29.md) block; changes work just like modifying an array. Removing an item at an index beyond what is available throws an exception.

## See Also

### Manipulating Items

- [insertItemsAtIndexes:inParent:withAnimation:](insertitems%28at_inparent_withanimation_%29.md): Inserts new items at the given indexes in the given parent with the specified optional animations.
- [moveItemAtIndex:inParent:toIndex:inParent:](moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.
