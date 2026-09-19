> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklookui/qlpreviewreply/attachments

# attachments (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The attachments for a preview reply that provide additional data for the system to display the preview.

## Declaration

```swift
var attachments: [String : QLPreviewReplyAttachment] { get set }
```

<a id="Discussion"></a>

## Discussion

When providing an HTML reply, use the string associated with the [QLPreviewReplyAttachment](../qlpreviewreplyattachment.md) prefixed with `cid:` to reference the content within the HTML.

## See Also

### Inspecting a preview reply

- [title](title.md): The title for the system to display with the preview.
- [stringEncoding](stringencoding-8ahm8.md)

# attachments (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The attachments for a preview reply that provide additional data for the system to display the preview.

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,QLPreviewReplyAttachment *> * attachments;
```

<a id="Discussion"></a>

## Discussion

When providing an HTML reply, use the string associated with the [QLPreviewReplyAttachment](../qlpreviewreplyattachment.md) prefixed with `cid:` to reference the content within the HTML.

## See Also

### Inspecting a preview reply

- [title](title.md): The title for the system to display with the preview.
