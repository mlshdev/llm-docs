> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldtrackcell:for:item:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:shouldtrackcell:for:item:))

# outlineView(\_:shouldTrackCell:for:item:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value that indicates whether a given cell should be tracked.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, shouldTrackCell cell: NSCell, for tableColumn: NSTableColumn?, item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell used to display item `item` in column `tableColumn`
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell should be tracked for the item `item` in column `tableColumn`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Normally, only selectable or selected cells can be tracked. If you implement this method, cells which are not selectable or selected can be tracked (and vice-versa). For example, this allows you to have a button cell in a table which does not change the selection, but can still be clicked on and tracked.

# outlineView:shouldTrackCell:forTableColumn:item: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean value that indicates whether a given cell should be tracked.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView shouldTrackCell:(NSCell *) cell forTableColumn:(NSTableColumn *) tableColumn item:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `cell`: The cell used to display item `item` in column `tableColumn`
- `tableColumn`: A table column in the outline view.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the cell should be tracked for the item `item` in column `tableColumn`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Normally, only selectable or selected cells can be tracked. If you implement this method, cells which are not selectable or selected can be tracked (and vice-versa). For example, this allows you to have a button cell in a table which does not change the selection, but can still be clicked on and tracked.
