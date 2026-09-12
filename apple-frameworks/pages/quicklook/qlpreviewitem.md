> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewitem](https://developer.apple.com/documentation/quicklook/qlpreviewitem)

# QLPreviewItem (Swift)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

## Declaration

```swift
protocol QLPreviewItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The QLPreviewItem protocol declares the methods that a QLPreviewController instance uses to access the contents of a given item.

## Topics

### Instance Properties

- [previewItemTitle](qlpreviewitem/previewitemtitle.md)
- [previewItemURL](qlpreviewitem/previewitemurl.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARQuickLookPreviewItem](arquicklookpreviewitem.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

# QLPreviewItem (Objective-C)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol QLPreviewItem <NSObject>
```

<a id="overview"></a>

## Overview

The QLPreviewItem protocol declares the methods that a QLPreviewController instance uses to access the contents of a given item.

## Topics

### Instance Properties

- [previewItemTitle](qlpreviewitem/previewitemtitle.md)
- [previewItemURL](qlpreviewitem/previewitemurl.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ARQuickLookPreviewItem](arquicklookpreviewitem.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewingController](qlpreviewingcontroller.md): For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.
