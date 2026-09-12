> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewprovider](https://developer.apple.com/documentation/quicklook/qlpreviewprovider)

# QLPreviewProvider (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
class QLPreviewProvider
```

<a id="overview"></a>

## Overview

Data-based preview extensions should subclass QLPreviewProvider in their principal object. The subclass should conform to QLPreviewingController.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

# QLPreviewProvider (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface QLPreviewProvider : NSObject
```

<a id="overview"></a>

## Overview

Data-based preview extensions should subclass QLPreviewProvider in their principal object. The subclass should conform to QLPreviewingController.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.
