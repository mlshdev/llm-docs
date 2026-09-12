> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldreordercolumn:tocolumn:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldreordercolumn:tocolumn:))

# outlineView(\_:shouldReorderColumn:toColumn:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sent to the delegate to allow or prohibit the specified column to be dragged to a new location.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldReorderColumn columnIndex: Int, toColumn newColumnIndex: Int) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `columnIndex`: The index of the column being dragged.
- `newColumnIndex`: The proposed target index of the column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column reordering should be allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When a column is initially dragged by the user, the delegate is first called with a `newColumnIndex` value of `-1`. Returning [false](https://developer.apple.com/documentation/swift/false) will disallow that column from being reordered at all. Returning [true](https://developer.apple.com/documentation/swift/true) allows it to be reordered, and the delegate will be called again when the column reaches a new location.

The actual `NSTableColumn` instance can be retrieved from the [tableColumns](../nstableview/tablecolumns.md) array.

If this method is not implemented, all columns are considered reorderable.

# outlineView:shouldReorderColumn:toColumn: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Sent to the delegate to allow or prohibit the specified column to be dragged to a new location.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldReorderColumn:(NSInteger) columnIndex toColumn:(NSInteger) newColumnIndex;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `columnIndex`: The index of the column being dragged.
- `newColumnIndex`: The proposed target index of the column.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the column reordering should be allowed, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When a column is initially dragged by the user, the delegate is first called with a `newColumnIndex` value of `-1`. Returning [false](https://developer.apple.com/documentation/swift/false) will disallow that column from being reordered at all. Returning [true](https://developer.apple.com/documentation/swift/true) allows it to be reordered, and the delegate will be called again when the column reaches a new location.

The actual `NSTableColumn` instance can be retrieved from the [tableColumns](../nstableview/tablecolumns.md) array.

If this method is not implemented, all columns are considered reorderable.
