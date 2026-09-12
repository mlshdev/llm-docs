> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/defaultattachmentscaling](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultattachmentscaling)

# defaultAttachmentScaling (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default amount of scaling to apply when an attachment image is too large to fit in a text container.

## Declaration

```swift
var defaultAttachmentScaling: NSImageScaling { get set }
```

<a id="Discussion"></a>

## Discussion

Attachment cells control their own size and drawing, so this setting is only advisory to them, but Application Kit–supplied attachment cells respect it.

## See Also

### Managing attachments

- [showAttachmentCell(\_:in:characterIndex:)](showattachmentcell%28__in_characterindex_%29.md): Draws an attachment cell.

# defaultAttachmentScaling (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The default amount of scaling to apply when an attachment image is too large to fit in a text container.

## Declaration

```objectivec
@property NSImageScaling defaultAttachmentScaling;
```

<a id="Discussion"></a>

## Discussion

Attachment cells control their own size and drawing, so this setting is only advisory to them, but Application Kit–supplied attachment cells respect it.

## See Also

### Managing attachments

- [showAttachmentCell:inRect:characterIndex:](showattachmentcell%28__in_characterindex_%29.md): Draws an attachment cell.
