> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewdelegate/textview(_:urlforcontentsof:at:)](https://developer.apple.com/documentation/appkit/nstextviewdelegate/textview(_:urlforcontentsof:at:))

# textView(\_:urlForContentsOf:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a URL representing the document contents for a text attachment.

## Declaration

```swift
@MainActor optional func textView(_ textView: NSTextView, urlForContentsOf textAttachment: NSTextAttachment, at charIndex: Int) -> URL?
```

## Parameters

- `textView`: The text view sending the message.
- `textAttachment`: The text attachment object containing an `NSFileWrapper` object that holds the contents of the attached file.
- `charIndex`: The character index of the text attachment.

<a id="return-value"></a>

## Return Value

The absolute URL for the document contents represented by `textAttachment`.

<a id="Discussion"></a>

## Discussion

The returned `NSURL` object is used by the text view to provide default behaviors involving text attachments such as Quick Look and double-clicking. For example, the `NSTextView` method [quickLookPreviewableItems(inRanges:)](../nstextview/quicklookpreviewableitems%28inranges_%29.md) uses this method for mapping text attachments to their corresponding document URLs, and `NSTextView` invokes the `NSWorkspace` method [open(\_:)](../nsworkspace/open%28__%29.md) with the URL returned from this method when the delegate has no [textView(\_:doubleClickedOn:in:at:)](textview%28__doubleclickedon_in_at_%29.md) implementation.

## See Also

### Related Documentation

- [textView(\_:doubleClickedOn:in:at:)](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [quickLookPreviewableItems(inRanges:)](../nstextview/quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.

# textView:URLForContentsOfTextAttachment:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns a URL representing the document contents for a text attachment.

## Declaration

```objectivec
- (NSURL *) textView:(NSTextView *) textView URLForContentsOfTextAttachment:(NSTextAttachment *) textAttachment atIndex:(NSUInteger) charIndex;
```

## Parameters

- `textView`: The text view sending the message.
- `textAttachment`: The text attachment object containing an `NSFileWrapper` object that holds the contents of the attached file.
- `charIndex`: The character index of the text attachment.

<a id="return-value"></a>

## Return Value

The absolute URL for the document contents represented by `textAttachment`.

<a id="Discussion"></a>

## Discussion

The returned `NSURL` object is used by the text view to provide default behaviors involving text attachments such as Quick Look and double-clicking. For example, the `NSTextView` method [quickLookPreviewableItemsInRanges:](../nstextview/quicklookpreviewableitems%28inranges_%29.md) uses this method for mapping text attachments to their corresponding document URLs, and `NSTextView` invokes the `NSWorkspace` method [openURL:](../nsworkspace/open%28__%29.md) with the URL returned from this method when the delegate has no [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md) implementation.

## See Also

### Related Documentation

- [textView:doubleClickedOnCell:inRect:atIndex:](textview%28__doubleclickedon_in_at_%29.md): Sent when the user double-clicks a cell.
- [quickLookPreviewableItemsInRanges:](../nstextview/quicklookpreviewableitems%28inranges_%29.md): Returns an array of URLs for items that can be displayed by QuickLook in the specified ranges.
