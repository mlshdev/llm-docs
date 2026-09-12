> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsoutlineviewdelegate/outlineview(_:isgroupitem:)](https://developer.apple.com/documentation/appkit/nsoutlineviewdelegate/outlineview(_:isgroupitem:))

# outlineView(\_:isGroupItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean that indicates whether a given row should be drawn in the “group row” style.

## Declaration

```swift
@MainActor optional func outlineView(_ outlineView: NSOutlineView, isGroupItem item: Any) -> Bool
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate a particular row should have the “group row” style drawn for that row, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the cell in that row is an instance of `NSTextFieldCell` and contains only a string value, the “group row” style attributes are automatically applied for that cell.

# outlineView:isGroupItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Returns a Boolean that indicates whether a given row should be drawn in the “group row” style.

## Declaration

```objectivec
- (BOOL) outlineView:(NSOutlineView *) outlineView isGroupItem:(id) item;
```

## Parameters

- `outlineView`: The outline view that sent the message.
- `item`: An item in the outline view.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to indicate a particular row should have the “group row” style drawn for that row, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the cell in that row is an instance of `NSTextFieldCell` and contains only a string value, the “group row” style attributes are automatically applied for that cell.
