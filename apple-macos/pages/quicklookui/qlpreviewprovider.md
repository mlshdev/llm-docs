> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewprovider](https://developer.apple.com/documentation/quicklookui/qlpreviewprovider)

# QLPreviewProvider (Swift)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that you subclass to provide a data-based Quick Look preview extension.

## Declaration

```swift
class QLPreviewProvider
```

<a id="overview"></a>

## Overview

When you subclass [QLPreviewProvider](qlpreviewprovider.md), conform your subclass to [QLPreviewingController](qlpreviewingcontroller.md).

To provide a data-based Quick Look extension, make the following modifications to your `Info.plist` file:

- Set the Boolean key `QLIsDataBasedPreview` to `true`.
- Add the type identifiers for your extension’s supported content types to the `QLSupportedContentTypes` array.
- Change the value of `NSExtensionPrincipalClass` to the name of your subclass. For example, if you named your subclass `PreviewProvider`, set the value to `$(PRODUCT_MODULE_NAME).PreviewProvider`.

After updating the extension’s `Info.plist` file, implement the [providePreview(for:completionHandler:)](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) method to return a [QLPreviewReply](qlpreviewreply.md) for the provided [QLFilePreviewRequest](qlfilepreviewrequest.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Data-based Preview Extensions

- [QLFilePreviewRequest](qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.

# QLPreviewProvider (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Class  
**Availability:** macOS 12.0+

A class that you subclass to provide a data-based Quick Look preview extension.

## Declaration

```objectivec
@interface QLPreviewProvider : NSObject
```

<a id="overview"></a>

## Overview

When you subclass [QLPreviewProvider](qlpreviewprovider.md), conform your subclass to [QLPreviewingController](qlpreviewingcontroller.md).

To provide a data-based Quick Look extension, make the following modifications to your `Info.plist` file:

- Set the Boolean key `QLIsDataBasedPreview` to `true`.
- Add the type identifiers for your extension’s supported content types to the `QLSupportedContentTypes` array.
- Change the value of `NSExtensionPrincipalClass` to the name of your subclass. For example, if you named your subclass `PreviewProvider`, set the value to `$(PRODUCT_MODULE_NAME).PreviewProvider`.

After updating the extension’s `Info.plist` file, implement the [providePreviewForFileRequest:completionHandler:](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md) method to return a [QLPreviewReply](qlpreviewreply.md) for the provided [QLFilePreviewRequest](qlfilepreviewrequest.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)

## See Also

### Data-based Preview Extensions

- [QLFilePreviewRequest](qlfilepreviewrequest.md): A Quick Look preview request that indicates the content to preview.
- [QLPreviewReply](qlpreviewreply.md): The class you create when providing a data-based Quick Look preview extension.
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md): An attachment for a Quick Look preview reply that provides additional content for the system to display a preview.
