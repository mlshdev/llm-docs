> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/rowview(atrow:makeifnecessary:)](https://developer.apple.com/documentation/appkit/nstableview/rowview(atrow:makeifnecessary:))

# rowView(atRow:makeIfNecessary:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a row view at the specified index, creating one if necessary.

## Declaration

```swift
func rowView(atRow row: Int, makeIfNecessary: Bool) -> NSTableRowView?
```

## Parameters

- `row`: The row index.
- `makeIfNecessary`: [true](https://developer.apple.com/documentation/swift/true) if a view is required, [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view, if one is available.

<a id="return-value"></a>

## Return Value

An instance, or subclass, of [NSTableRowView](../nstablerowview.md). Returning `nil` is also valid if `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false) and the view did not exist.

<a id="Discussion"></a>

## Discussion

This method first attempts to return a currently displayed view in the visible area. If there is no visible view, and `makeIfNecessary` is [true](https://developer.apple.com/documentation/swift/true), a prepared temporary view is returned. If `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false), and the view is not visible, `nil` is returned.

In general, `makeIfNecessary` should be [true](https://developer.apple.com/documentation/swift/true) if you require a resulting view, and [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view only if it is available (generally this means it is visible).

An exception is thrown if `row` falls outside of the number of rows in the table ([numberOfRows](numberofrows.md)). The returned result should generally not be held onto for longer than the current run loop cycle. It’s better to call [rowView(atRow:makeIfNecessary:)](rowview%28atrow_makeifnecessary_%29.md) whenever a view is required.

## See Also

### Creating Views to Display

- [makeView(withIdentifier:owner:)](makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [view(atColumn:row:makeIfNecessary:)](view%28atcolumn_row_makeifnecessary_%29.md): Returns a view at the specified row and column indexes, creating one if necessary.
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)

# rowViewAtRow:makeIfNecessary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a row view at the specified index, creating one if necessary.

## Declaration

```objectivec
- (NSTableRowView *) rowViewAtRow:(NSInteger) row makeIfNecessary:(BOOL) makeIfNecessary;
```

## Parameters

- `row`: The row index.
- `makeIfNecessary`: [true](https://developer.apple.com/documentation/swift/true) if a view is required, [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view, if one is available.

<a id="return-value"></a>

## Return Value

An instance, or subclass, of [NSTableRowView](../nstablerowview.md). Returning `nil` is also valid if `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false) and the view did not exist.

<a id="Discussion"></a>

## Discussion

This method first attempts to return a currently displayed view in the visible area. If there is no visible view, and `makeIfNecessary` is [true](https://developer.apple.com/documentation/swift/true), a prepared temporary view is returned. If `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false), and the view is not visible, `nil` is returned.

In general, `makeIfNecessary` should be [true](https://developer.apple.com/documentation/swift/true) if you require a resulting view, and [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view only if it is available (generally this means it is visible).

An exception is thrown if `row` falls outside of the number of rows in the table ([numberOfRows](numberofrows.md)). The returned result should generally not be held onto for longer than the current run loop cycle. It’s better to call [rowViewAtRow:makeIfNecessary:](rowview%28atrow_makeifnecessary_%29.md) whenever a view is required.

## See Also

### Creating Views to Display

- [makeViewWithIdentifier:owner:](makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [viewAtColumn:row:makeIfNecessary:](view%28atcolumn_row_makeifnecessary_%29.md): Returns a view at the specified row and column indexes, creating one if necessary.
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)
