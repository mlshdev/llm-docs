> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreply](https://developer.apple.com/documentation/quicklookui/qlpreviewreply)

# QLPreviewReply (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

The class you create when providing a data-based Quick Look preview extension.

## Declaration

```swift
class QLPreviewReply
```

<a id="overview"></a>

## Overview

Create an instance of [QLPreviewReply](qlpreviewreply.md) from the method [providePreview(for:completionHandler:)](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) in your subclass of [QLPreviewProvider](qlpreviewprovider.md). Create an instance to return data, such as an image, PDF, or HTML, that the system displays as the preview for the content that [QLFilePreviewRequest](qlfilepreviewrequest.md) specifies.

## Topics

### Creating a preview reply

- [init(fileURL:)](qlpreviewreply/init%28fileurl_%29.md): Creates a preview reply from an existing file URL.

### Creating a PDF preview reply

- [init(forPDFWithPageSize:createDocumentUsing:)](qlpreviewreply/init%28forpdfwithpagesize_createdocumentusing_%29.md)

### Generating a preview reply

- [init(dataOfContentType:contentSize:createDataUsing:)](qlpreviewreply/init%28dataofcontenttype_contentsize_createdatausing_%29.md)

### Drawing a preview reply

- [init(contextSize:isBitmap:drawUsing:)](qlpreviewreply/init%28contextsize_isbitmap_drawusing_%29.md)

### Inspecting a preview reply

- [title](qlpreviewreply/title.md): The title for the system to display with the preview.
- [attachments](qlpreviewreply/attachments.md): The attachments for a preview reply that provide additional data for the system to display the preview.
- [stringEncoding](qlpreviewreply/stringencoding-8ahm8.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Data-based Preview Extensions

- [QLPreviewProvider](qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

# QLPreviewReply (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

The class you create when providing a data-based Quick Look preview extension.

## Declaration

```objectivec
@interface QLPreviewReply : NSObject
```

<a id="overview"></a>

## Overview

Create an instance of [QLPreviewReply](qlpreviewreply.md) from the method [providePreviewForFileRequest:completionHandler:](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) in your subclass of [QLPreviewProvider](qlpreviewprovider.md). Create an instance to return data, such as an image, PDF, or HTML, that the system displays as the preview for the content that [QLFilePreviewRequest](qlfilepreviewrequest.md) specifies.

## Topics

### Creating a preview reply

- [initWithFileURL:](qlpreviewreply/init%28fileurl_%29.md): Creates a preview reply from an existing file URL.

### Inspecting a preview reply

- [title](qlpreviewreply/title.md): The title for the system to display with the preview.
- [attachments](qlpreviewreply/attachments.md): The attachments for a preview reply that provide additional data for the system to display the preview.

### Instance Properties

- [stringEncoding](qlpreviewreply/stringencoding-1k9kb.md): String encoding for text or html based previews. Defaults to NSUTF8StringEncoding.

### Instance Methods

- [initForPDFWithPageSize:documentCreationBlock:](qlpreviewreply/initforpdfwithpagesize_documentcreationblock_.md)
- [initWithContextSize:isBitmap:drawingBlock:](qlpreviewreply/initwithcontextsize_isbitmap_drawingblock_.md)
- [initWithDataOfContentType:contentSize:dataCreationBlock:](qlpreviewreply/initwithdataofcontenttype_contentsize_datacreationblock_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Data-based Preview Extensions

- [QLPreviewProvider](qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.
