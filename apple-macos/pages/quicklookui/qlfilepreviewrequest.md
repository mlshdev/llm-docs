> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlfilepreviewrequest](https://developer.apple.com/documentation/quicklookui/qlfilepreviewrequest)

# QLFilePreviewRequest (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A Quick Look preview request that indicates the content to preview.

## Declaration

```swift
class QLFilePreviewRequest
```

<a id="overview"></a>

## Overview

The system provides a [QLFilePreviewRequest](qlfilepreviewrequest.md) to the [providePreview(for:completionHandler:)](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) method of your data-based Quick Look extension.

## Topics

### Inspecting the preview request

- [fileURL](qlfilepreviewrequest/fileurl.md): The URL that indicates the content to preview.

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
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

# QLFilePreviewRequest (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A Quick Look preview request that indicates the content to preview.

## Declaration

```objectivec
@interface QLFilePreviewRequest : NSObject
```

<a id="overview"></a>

## Overview

The system provides a [QLFilePreviewRequest](qlfilepreviewrequest.md) to the [providePreviewForFileRequest:completionHandler:](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) method of your data-based Quick Look extension.

## Topics

### Inspecting the preview request

- [fileURL](qlfilepreviewrequest/fileurl.md): The URL that indicates the content to preview.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Data-based Preview Extensions

- [QLPreviewProvider](qlpreviewprovider.md): A class that you subclass to provide a data-based Quick Look preview extension.
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.
