> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/endupdates()](https://developer.apple.com/documentation/appkit/nstableview/endupdates())

# endUpdates() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends the group of updates for the table view.

## Declaration

```swift
func endUpdates()
```

<a id="Discussion"></a>

## Discussion

Ends the group of updates for the table view. This method, like [beginUpdates()](beginupdates%28%29.md), is nestable. See [beginUpdates()](beginupdates%28%29.md) for details.

## See Also

### Updating the Table View Arrangement

- [beginUpdates()](beginupdates%28%29.md): Begins a group of updates for the table view.
- [moveRow(at:to:)](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRows(at:withAnimation:)](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRows(at:withAnimation:)](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [row(for:)](row%28for_%29.md): Returns the index of the row for the specified view.
- [column(for:)](column%28for_%29.md): Returns the column index for the specified view.

# endUpdates (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Ends the group of updates for the table view.

## Declaration

```objectivec
- (void) endUpdates;
```

<a id="Discussion"></a>

## Discussion

Ends the group of updates for the table view. This method, like [beginUpdates](beginupdates%28%29.md), is nestable. See [beginUpdates](beginupdates%28%29.md) for details.

## See Also

### Updating the Table View Arrangement

- [beginUpdates](beginupdates%28%29.md): Begins a group of updates for the table view.
- [moveRowAtIndex:toIndex:](moverow%28at_to_%29.md): Moves the specified row to the new row location using animation.
- [insertRowsAtIndexes:withAnimation:](insertrows%28at_withanimation_%29.md): Inserts the rows using the specified animation.
- [removeRowsAtIndexes:withAnimation:](removerows%28at_withanimation_%29.md): Removes the rows using the specified animation.
- [rowForView:](row%28for_%29.md): Returns the index of the row for the specified view.
- [columnForView:](column%28for_%29.md): Returns the column index for the specified view.
