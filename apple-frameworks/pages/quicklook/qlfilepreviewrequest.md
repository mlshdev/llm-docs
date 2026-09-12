> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlfilepreviewrequest](https://developer.apple.com/documentation/quicklook/qlfilepreviewrequest)

# QLFilePreviewRequest (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
class QLFilePreviewRequest
```

<a id="overview"></a>

## Overview

This class contains information about the preview that should be provided.

## Topics

### Instance Properties

- [fileURL](qlfilepreviewrequest/fileurl.md): The url of the file for which a preview is being requested.

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

- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

# QLFilePreviewRequest (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface QLFilePreviewRequest : NSObject
```

<a id="overview"></a>

## Overview

This class contains information about the preview that should be provided.

## Topics

### Instance Properties

- [fileURL](qlfilepreviewrequest/fileurl.md): The url of the file for which a preview is being requested.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### QuickLookUI symbols

- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.
