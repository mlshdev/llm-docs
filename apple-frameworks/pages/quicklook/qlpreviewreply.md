> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewreply](https://developer.apple.com/documentation/quicklook/qlpreviewreply)

# QLPreviewReply (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
class QLPreviewReply
```

<a id="overview"></a>

## Overview

To provide a data-based preview, you have to return a QLPreviewReply object.

## Topics

### Initializers

- [init(contextSize:isBitmap:drawUsing:)](qlpreviewreply/init%28contextsize_isbitmap_drawusing_%29.md)
- [init(dataOfContentType:contentSize:createDataUsing:)](qlpreviewreply/init%28dataofcontenttype_contentsize_createdatausing_%29.md)
- [init(fileURL:)](qlpreviewreply/init%28fileurl_%29.md)
- [init(forPDFWithPageSize:createDocumentUsing:)](qlpreviewreply/init%28forpdfwithpagesize_createdocumentusing_%29.md)

### Instance Properties

- [attachments](qlpreviewreply/attachments.md): Attachments for HTML data previews. The keys of the dictionary are the attachment identifiers (eg foo) that can be referenced with the cid:id URL (eg cid:foo).
- [stringEncoding](qlpreviewreply/stringencoding-8rrio.md)
- [title](qlpreviewreply/title.md): Custom display title for the preview. If left as the empty string, QuickLook will use the file name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

# QLPreviewReply (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface QLPreviewReply : NSObject
```

<a id="overview"></a>

## Overview

To provide a data-based preview, you have to return a QLPreviewReply object.

## Topics

### Instance Properties

- [attachments](qlpreviewreply/attachments.md): Attachments for HTML data previews. The keys of the dictionary are the attachment identifiers (eg foo) that can be referenced with the cid:id URL (eg cid:foo).
- [stringEncoding](qlpreviewreply/stringencoding-1k9kb.md): String encoding for text or html based previews. Defaults to NSUTF8StringEncoding.
- [title](qlpreviewreply/title.md): Custom display title for the preview. If left as the empty string, QuickLook will use the file name.

### Instance Methods

- [initWithFileURL:](qlpreviewreply/init%28fileurl_%29.md)
- [initForPDFWithPageSize:documentCreationBlock:](qlpreviewreply/initforpdfwithpagesize_documentcreationblock_.md)
- [initWithContextSize:isBitmap:drawingBlock:](qlpreviewreply/initwithcontextsize_isbitmap_drawingblock_.md)
- [initWithDataOfContentType:contentSize:dataCreationBlock:](qlpreviewreply/initwithdataofcontenttype_contentsize_datacreationblock_.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.
