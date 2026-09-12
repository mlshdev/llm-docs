> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewreplyattachment](https://developer.apple.com/documentation/quicklook/qlpreviewreplyattachment)

# QLPreviewReplyAttachment (Swift)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```swift
class QLPreviewReplyAttachment
```

<a id="overview"></a>

## Overview

QLPreviewReplyAttachment is used to provide data for attachment in html data-based previews.

## Topics

### Initializers

- [init(data:contentType:)](qlpreviewreplyattachment/init%28data_contenttype_%29.md)

### Instance Properties

- [contentType](qlpreviewreplyattachment/contenttype.md): The content type of the attachment for an html preview
- [data](qlpreviewreplyattachment/data.md): The data content of an html preview

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
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

# QLPreviewReplyAttachment (Objective-C)

**Framework:** Quick Look  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface QLPreviewReplyAttachment : NSObject
```

<a id="overview"></a>

## Overview

QLPreviewReplyAttachment is used to provide data for attachment in html data-based previews.

## Topics

### Instance Properties

- [contentType](qlpreviewreplyattachment/contenttype.md): The content type of the attachment for an html preview
- [data](qlpreviewreplyattachment/data.md): The data content of an html preview

### Instance Methods

- [initWithData:contentType:](qlpreviewreplyattachment/init%28data_contenttype_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewItem](qlpreviewitem.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.
