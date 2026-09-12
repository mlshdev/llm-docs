> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/showattachmentcell(_:in:characterindex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/showattachmentcell(_:in:characterindex:))

# showAttachmentCell(\_:in:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws an attachment cell.

## Declaration

```swift
func showAttachmentCell(_ cell: NSCell, in rect: NSRect, characterIndex attachmentIndex: Int)
```

## Parameters

- `cell`: The attachment cell to draw.
- `rect`: The rectangle within which to draw `cell`.
- `attachmentIndex`: The location of the attachment cell.

<a id="Discussion"></a>

## Discussion

The `attachmentIndex` parameter is provided for cells that alter their appearance based on their location.

## See Also

### Managing attachments

- [defaultAttachmentScaling](defaultattachmentscaling.md): The default amount of scaling to apply when an attachment image is too large to fit in a text container.

# showAttachmentCell:inRect:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Draws an attachment cell.

## Declaration

```objectivec
- (void) showAttachmentCell:(NSCell *) cell inRect:(NSRect) rect characterIndex:(NSUInteger) attachmentIndex;
```

## Parameters

- `cell`: The attachment cell to draw.
- `rect`: The rectangle within which to draw `cell`.
- `attachmentIndex`: The location of the attachment cell.

<a id="Discussion"></a>

## Discussion

The `attachmentIndex` parameter is provided for cells that alter their appearance based on their location.

## See Also

### Managing attachments

- [defaultAttachmentScaling](defaultattachmentscaling.md): The default amount of scaling to apply when an attachment image is too large to fit in a text container.
