> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklook/qlpreviewingcontroller](https://developer.apple.com/documentation/quicklook/qlpreviewingcontroller)

# QLPreviewingController (Swift)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

## Declaration

```swift
protocol QLPreviewingController : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The main preview should be presented by the view controller implementing QLPreviewingController. Avoid presenting additional view controllers over your QLPreviewingController. For Catalyst compatibility, avoid using gesture recognizers that take interactions over large portions of the view to avoid collisions with standard macOS preview behaviors. Avoid holding the file open during the duration of the preview. If access to the file is necessary for interaction, it is best to keep the file open only for the duration of the interaction.

For data-based previews, subclass QLPreviewProvider which conforms to this protocol.

## Topics

### Instance Methods

- [preparePreviewOfFile(at:completionHandler:)](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md)
- [preparePreviewOfSearchableItem(identifier:queryString:completionHandler:)](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md)
- [providePreview(for:completionHandler:)](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)

# QLPreviewingController (Objective-C)

**Framework:** Quick Look  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

For view based previews, the view controller that implements the QLPreviewingController protocol must at least implement one of the two following methods: -\[QLPreviewingController preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:\], to generate previews for Spotlight searchable items. -\[QLPreviewingController preparePreviewOfFileAtURL:completionHandler:\], to generate previews for file URLs.

## Declaration

```objectivec
@protocol QLPreviewingController <NSObject>
```

<a id="overview"></a>

## Overview

The main preview should be presented by the view controller implementing QLPreviewingController. Avoid presenting additional view controllers over your QLPreviewingController. For Catalyst compatibility, avoid using gesture recognizers that take interactions over large portions of the view to avoid collisions with standard macOS preview behaviors. Avoid holding the file open during the duration of the preview. If access to the file is necessary for interaction, it is best to keep the file open only for the duration of the interaction.

For data-based previews, subclass QLPreviewProvider which conforms to this protocol.

## Topics

### Instance Methods

- [preparePreviewOfFileAtURL:completionHandler:](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md)
- [preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md)
- [providePreviewForFileRequest:completionHandler:](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### QuickLookUI symbols

- [QLFilePreviewRequest](qlfilepreviewrequest.md)
- [QLPreviewProvider](qlpreviewprovider.md)
- [QLPreviewReply](qlpreviewreply.md)
- [QLPreviewReplyAttachment](qlpreviewreplyattachment.md)
- [QLPreviewItem](qlpreviewitem.md)
