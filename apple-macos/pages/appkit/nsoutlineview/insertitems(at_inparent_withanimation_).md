> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineview/insertitems(at:inparent:withanimation:)](https://developer.apple.com/documentation/appkit/nsoutlineview/insertitems(at:inparent:withanimation:))

# insertItems(at:inParent:withAnimation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Inserts new items at the given indexes in the given parent with the specified optional animations.

## Declaration

```swift
func insertItems(at indexes: IndexSet, inParent parent: Any?, withAnimation animationOptions: NSTableView.AnimationOptions = [])
```

## Parameters

- `indexes`: Indexes at which to insert items.
- `parent`: The parent for the items, or `nil` if the parent is the root.
- `animationOptions`: Animated slide effects used when inserting items.

<a id="Discussion"></a>

## Discussion

This method parallels the [insertRows(at:withAnimation:)](../nstableview/insertrows%28at_withanimation_%29.md) method of [NSTableView](../nstableview.md) and is used in a way similar to the [insert(\_:at:)](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-73pln) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray). The method does nothing if `parent` is not expanded. The actual item values are determined by the data source’s [outlineView(\_:child:ofItem:)](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) method (which is called only after [endUpdates()](../nstableview/endupdates%28%29.md) to ensure data source integrity).

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates()](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates()](../nstableview/beginupdates%28%29.md)/[endUpdates()](../nstableview/endupdates%28%29.md) block; new insertions move previously inserted new items, just like modifying an array. Inserting an index beyond what is available throws an exception.

## See Also

### Manipulating Items

- [moveItem(at:inParent:to:inParent:)](moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.
- [removeItems(at:inParent:withAnimation:)](removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.

# insertItemsAtIndexes:inParent:withAnimation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Inserts new items at the given indexes in the given parent with the specified optional animations.

## Declaration

```objectivec
- (void) insertItemsAtIndexes:(NSIndexSet *) indexes inParent:(id) parent withAnimation:(NSTableViewAnimationOptions) animationOptions;
```

## Parameters

- `indexes`: Indexes at which to insert items.
- `parent`: The parent for the items, or `nil` if the parent is the root.
- `animationOptions`: Animated slide effects used when inserting items.

<a id="Discussion"></a>

## Discussion

This method parallels the [insertRowsAtIndexes:withAnimation:](../nstableview/insertrows%28at_withanimation_%29.md) method of [NSTableView](../nstableview.md) and is used in a way similar to the [insertObjects:atIndexes:](https://developer.apple.com/documentation/foundation/nsmutablearray/insert%28_:at:%29-73pln) method of [NSMutableArray](https://developer.apple.com/documentation/foundation/nsmutablearray). The method does nothing if `parent` is not expanded. The actual item values are determined by the data source’s [outlineView:child:ofItem:](../nsoutlineviewdatasource/outlineview%28__child_ofitem_%29.md) method (which is called only after [endUpdates](../nstableview/endupdates%28%29.md) to ensure data source integrity).

> **Note**

>  [NSCell](../nscell.md)-based outline views must first call [beginUpdates](../nstableview/beginupdates%28%29.md) before calling this method.

You can call this method multiple times within the same [beginUpdates](../nstableview/beginupdates%28%29.md)/[endUpdates](../nstableview/endupdates%28%29.md) block; new insertions move previously inserted new items, just like modifying an array. Inserting an index beyond what is available throws an exception.

## See Also

### Manipulating Items

- [moveItemAtIndex:inParent:toIndex:inParent:](moveitem%28at_inparent_to_inparent_%29.md): Moves an item at a given index in the given parent to a new index in a new parent.
- [removeItemsAtIndexes:inParent:withAnimation:](removeitems%28at_inparent_withanimation_%29.md): Removes items at the given indexes in the given parent with the specified optional animations.
