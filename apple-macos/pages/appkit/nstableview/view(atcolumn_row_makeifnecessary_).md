> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/view(atcolumn:row:makeifnecessary:)](https://developer.apple.com/documentation/appkit/nstableview/view(atcolumn:row:makeifnecessary:))

# view(atColumn:row:makeIfNecessary:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a view at the specified row and column indexes, creating one if necessary.

## Declaration

```swift
func view(atColumn column: Int, row: Int, makeIfNecessary: Bool) -> NSView?
```

## Parameters

- `column`: The index of the column in the [tableColumns](tablecolumns.md) array.
- `row`: The row index.
- `makeIfNecessary`: [true](https://developer.apple.com/documentation/swift/true) if a view is required, [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view, if one is available.

<a id="return-value"></a>

## Return Value

An instance of [NSView](../nsview.md).

<a id="Discussion"></a>

## Discussion

This method first attempts to return an available view, which is generally in the visible area. If there is no available view, and `makeIfNecessary` is [true](https://developer.apple.com/documentation/swift/true), a prepared temporary view is returned. If `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false), and the view is not available, `nil` will be returned.

In general, `makeIfNecessary` should be [true](https://developer.apple.com/documentation/swift/true) if you require a resulting view, and [false](https://developer.apple.com/documentation/swift/false) if you only want to update properties on a view only if it is available (generally this means it is visible).

An exception will be thrown if `row` is not within the [numberOfRows](numberofrows.md). The returned result should generally not be held onto for longer than the current run loop cycle. Instead they should re-query the table view for the row view.

## See Also

### Creating Views to Display

- [makeView(withIdentifier:owner:)](makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [rowView(atRow:makeIfNecessary:)](rowview%28atrow_makeifnecessary_%29.md): Returns a row view at the specified index, creating one if necessary.
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)

# viewAtColumn:row:makeIfNecessary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a view at the specified row and column indexes, creating one if necessary.

## Declaration

```objectivec
- (NSView *) viewAtColumn:(NSInteger) column row:(NSInteger) row makeIfNecessary:(BOOL) makeIfNecessary;
```

## Parameters

- `column`: The index of the column in the [tableColumns](tablecolumns.md) array.
- `row`: The row index.
- `makeIfNecessary`: [true](https://developer.apple.com/documentation/swift/true) if a view is required, [false](https://developer.apple.com/documentation/swift/false) if you want to update properties on a view, if one is available.

<a id="return-value"></a>

## Return Value

An instance of [NSView](../nsview.md).

<a id="Discussion"></a>

## Discussion

This method first attempts to return an available view, which is generally in the visible area. If there is no available view, and `makeIfNecessary` is [true](https://developer.apple.com/documentation/swift/true), a prepared temporary view is returned. If `makeIfNecessary` is [false](https://developer.apple.com/documentation/swift/false), and the view is not available, `nil` will be returned.

In general, `makeIfNecessary` should be [true](https://developer.apple.com/documentation/swift/true) if you require a resulting view, and [false](https://developer.apple.com/documentation/swift/false) if you only want to update properties on a view only if it is available (generally this means it is visible).

An exception will be thrown if `row` is not within the [numberOfRows](numberofrows.md). The returned result should generally not be held onto for longer than the current run loop cycle. Instead they should re-query the table view for the row view.

## See Also

### Creating Views to Display

- [makeViewWithIdentifier:owner:](makeview%28withidentifier_owner_%29.md): Returns a new or existing view with the specified identifier.
- [rowViewAtRow:makeIfNecessary:](rowview%28atrow_makeifnecessary_%29.md): Returns a row view at the specified index, creating one if necessary.
- [NSUserInterfaceItemIdentifier](../nsuserinterfaceitemidentifier.md)
