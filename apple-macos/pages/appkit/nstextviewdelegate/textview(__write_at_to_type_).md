> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:write:at:to:type:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:write:at:to:type:))

# textView(\_:write:at:to:type:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether data of the specified type for the given cell could be written to the specified pasteboard.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, write cell: any NSTextAttachmentCellProtocol, at charIndex: Int, to pboard: NSPasteboard, type: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell whose contents should be written to the pasteboard.
- `charIndex`: The index at which the cell was accessed.
- `pboard`: The pasteboard to which the cell’s contents should be written.
- `type`: The type of data that should be written.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the write succeeded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver should attempt to write the `cell` to `pboard` with the given `type`, and return success or failure.

## See Also

### Managing the Pasteboard

- [textView(\_:writablePasteboardTypesFor:at:)](textview%28__writablepasteboardtypesfor_at_%29.md): Returns the writable pasteboard types for a given cell.

# textView:writeCell:atIndex:toPasteboard:type: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns whether data of the specified type for the given cell could be written to the specified pasteboard.

## Declaration

```objectivec
- (BOOL) textView:(NSTextView *) view writeCell:(id<NSTextAttachmentCell>) cell atIndex:(NSUInteger) charIndex toPasteboard:(NSPasteboard *) pboard type:(NSPasteboardType) type;
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell whose contents should be written to the pasteboard.
- `charIndex`: The index at which the cell was accessed.
- `pboard`: The pasteboard to which the cell’s contents should be written.
- `type`: The type of data that should be written.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the write succeeded, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The receiver should attempt to write the `cell` to `pboard` with the given `type`, and return success or failure.

## See Also

### Managing the Pasteboard

- [textView:writablePasteboardTypesForCell:atIndex:](textview%28__writablepasteboardtypesfor_at_%29.md): Returns the writable pasteboard types for a given cell.
