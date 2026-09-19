> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/qlpreviewreply/attachments

# attachments (Swift)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Attachments for HTML data previews. The keys of the dictionary are the attachment identifiers (eg foo) that can be referenced with the cid:id URL (eg cid:foo).

## Declaration

```swift
var attachments: [String : QLPreviewReplyAttachment] { get set }
```

# attachments (Objective-C)

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Attachments for HTML data previews. The keys of the dictionary are the attachment identifiers (eg foo) that can be referenced with the cid:id URL (eg cid:foo).

## Declaration

```objectivec
@property (copy) NSDictionary<NSString *,QLPreviewReplyAttachment *> * attachments;
```
