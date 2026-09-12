> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewreplyattachment](https://developer.apple.com/documentation/quicklookui/qlpreviewreplyattachment)

# QLPreviewReplyAttachment (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

## Declaration

```swift
class QLPreviewReplyAttachment
```

<a id="overview"></a>

## Overview

When providing a data-based Quick Look preview with HTML, use [QLPreviewReplyAttachment](qlpreviewreplyattachment.md) to include images, CSS, and other linked content in the HTML of the preview.

Reference content in your HTML using the `CID` notation for the reference. For example, if your HTML preview response includes an image, create a [QLPreviewReplyAttachment](qlpreviewreplyattachment.md) with the image, add it to the reply’s [attachments](qlpreviewreply/attachments.md) with an associated string, and reference the image with the associated string, prefixed by `cid:`. The following example illustrates returning HTML as a preview reply with an image as an attachment:

```swift
let reply = QLPreviewReply(dataOfContentType: .html,
                           contentSize: CGSize(width: 750, height: 500)) { htmlReply in
    let content = """
                  <html>
                  <head></head>
                  <body>
                  <h1>Preview</h1>
                  <img src="cid:exampleImage" width="400">
                  </body>
                  </html>
                  """
    guard let contentData = content.data(using: .utf8) else {
        throw PreviewError.previewSetupFailure("Unable to encode preview content")
    }
    guard let imageFileURL = Bundle.main.url(forResource: "yourImage",
                                             withExtension: "jpg") else {
        throw PreviewError.previewSetupFailure("unable to load image")
    }
    let imageData = try Data(contentsOf: imageFileURL)
    
    htmlReply.attachments["exampleImage"] = QLPreviewReplyAttachment(data: imageData,
                                                                     contentType: .jpeg)
    return contentData
}
reply.title = "HTML Preview Example"

```

## Topics

### Creating a preview reply attachment

- [init(data:contentType:)](qlpreviewreplyattachment/init%28data_contenttype_%29.md): Creates a preview reply attachment with the specified type.

### Inspecting a preview reply attachment

- [contentType](qlpreviewreplyattachment/contenttype.md): The content type of the preview attachment.
- [data](qlpreviewreplyattachment/data.md): The data of the preview attachment.

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
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.

# QLPreviewReplyAttachment (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

## Declaration

```objectivec
@interface QLPreviewReplyAttachment : NSObject
```

<a id="overview"></a>

## Overview

When providing a data-based Quick Look preview with HTML, use [QLPreviewReplyAttachment](qlpreviewreplyattachment.md) to include images, CSS, and other linked content in the HTML of the preview.

Reference content in your HTML using the `CID` notation for the reference. For example, if your HTML preview response includes an image, create a [QLPreviewReplyAttachment](qlpreviewreplyattachment.md) with the image, add it to the reply’s [attachments](qlpreviewreply/attachments.md) with an associated string, and reference the image with the associated string, prefixed by `cid:`. The following example illustrates returning HTML as a preview reply with an image as an attachment:

```swift
let reply = QLPreviewReply(dataOfContentType: .html,
                           contentSize: CGSize(width: 750, height: 500)) { htmlReply in
    let content = """
                  <html>
                  <head></head>
                  <body>
                  <h1>Preview</h1>
                  <img src="cid:exampleImage" width="400">
                  </body>
                  </html>
                  """
    guard let contentData = content.data(using: .utf8) else {
        throw PreviewError.previewSetupFailure("Unable to encode preview content")
    }
    guard let imageFileURL = Bundle.main.url(forResource: "yourImage",
                                             withExtension: "jpg") else {
        throw PreviewError.previewSetupFailure("unable to load image")
    }
    let imageData = try Data(contentsOf: imageFileURL)
    
    htmlReply.attachments["exampleImage"] = QLPreviewReplyAttachment(data: imageData,
                                                                     contentType: .jpeg)
    return contentData
}
reply.title = "HTML Preview Example"

```

## Topics

### Creating a preview reply attachment

- [initWithData:contentType:](qlpreviewreplyattachment/init%28data_contenttype_%29.md): Creates a preview reply attachment with the specified type.

### Inspecting a preview reply attachment

- [contentType](qlpreviewreplyattachment/contenttype.md): The content type of the preview attachment.
- [data](qlpreviewreplyattachment/data.md): The data of the preview attachment.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Data-based Preview Extensions

- [QLPreviewProvider](qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLFilePreviewRequest](qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
