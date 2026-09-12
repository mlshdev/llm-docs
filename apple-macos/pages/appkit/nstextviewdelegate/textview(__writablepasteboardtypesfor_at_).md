> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:writablepasteboardtypesfor:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:writablepasteboardtypesfor:at:))

# textView(\_:writablePasteboardTypesFor:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the writable pasteboard types for a given cell.

## Declaration

```swift
@MainActor optional func textView(_ view: NSTextView, writablePasteboardTypesFor cell: any NSTextAttachmentCellProtocol, at charIndex: Int) -> [NSPasteboard.PasteboardType]
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell in question.
- `charIndex`: The character index in the text view that was clicked.

<a id="return-value"></a>

## Return Value

An array of types that can be written to the pasteboard for `cell`.

<a id="Discussion"></a>

## Discussion

This method is invoked after the user clicks `cell` at the specified `charIndex` location in `aTextView`. If the [textView(\_:draggedCell:in:event:at:)](textview%28__draggedcell_in_event_at_%29.md) is not used, this method and [textView(\_:write:at:to:type:)](textview%28__write_at_to_type_%29.md) allow `aTextView` to take care of attachment dragging and pasting, with the delegate responsible only for writing the attachment to the pasteboard.

## See Also

### Managing the Pasteboard

- [textView(\_:write:at:to:type:)](textview%28__write_at_to_type_%29.md): Returns whether data of the specified type for the given cell could be written to the specified pasteboard.

# textView:writablePasteboardTypesForCell:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the writable pasteboard types for a given cell.

## Declaration

```objectivec
- (NSArray<NSString *> *) textView:(NSTextView *) view writablePasteboardTypesForCell:(id<NSTextAttachmentCell>) cell atIndex:(NSUInteger) charIndex;
```

## Parameters

- `view`: The text view sending the message.
- `cell`: The cell in question.
- `charIndex`: The character index in the text view that was clicked.

<a id="return-value"></a>

## Return Value

An array of types that can be written to the pasteboard for `cell`.

<a id="Discussion"></a>

## Discussion

This method is invoked after the user clicks `cell` at the specified `charIndex` location in `aTextView`. If the [textView:draggedCell:inRect:event:atIndex:](textview%28__draggedcell_in_event_at_%29.md) is not used, this method and [textView:writeCell:atIndex:toPasteboard:type:](textview%28__write_at_to_type_%29.md) allow `aTextView` to take care of attachment dragging and pasting, with the delegate responsible only for writing the attachment to the pasteboard.

## See Also

### Managing the Pasteboard

- [textView:writeCell:atIndex:toPasteboard:type:](textview%28__write_at_to_type_%29.md): Returns whether data of the specified type for the given cell could be written to the specified pasteboard.
