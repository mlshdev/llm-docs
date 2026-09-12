> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewingcontroller](https://developer.apple.com/documentation/quicklookui/qlpreviewingcontroller)

# QLPreviewingController (Swift)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol for implementing a custom controller to create previews of files.

## Declaration

```swift
protocol QLPreviewingController : NSObjectProtocol
```

<a id="overview"></a>

## Overview

A controller that implements the `QLPreviewingController` protocol must at least implement [preparePreviewOfSearchableItem(identifier:queryString:completionHandler:)](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md) or [preparePreviewOfFile(at:completionHandler:)](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md).

## Topics

### Instance Methods

- [preparePreviewOfFile(at:completionHandler:)](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [preparePreviewOfSearchableItem(identifier:queryString:completionHandler:)](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.
- [providePreview(for:completionHandler:)](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# QLPreviewingController (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Protocol  
**Availability:** macOS 12.0+

A protocol for implementing a custom controller to create previews of files.

## Declaration

```objectivec
@protocol QLPreviewingController <NSObject>
```

<a id="overview"></a>

## Overview

A controller that implements the `QLPreviewingController` protocol must at least implement [preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md) or [preparePreviewOfFileAtURL:completionHandler:](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md).

## Topics

### Instance Methods

- [preparePreviewOfFileAtURL:completionHandler:](qlpreviewingcontroller/preparepreviewoffile%28at_completionhandler_%29.md): Prepares the preview of a file at the specified file’s URL.
- [preparePreviewOfSearchableItemWithIdentifier:queryString:completionHandler:](qlpreviewingcontroller/preparepreviewofsearchableitem%28identifier_querystring_completionhandler_%29.md): Prepares the preview for a file by using the data from Spotlight’s searchable item.
- [providePreviewForFileRequest:completionHandler:](qlpreviewingcontroller/providepreview%28for_completionhandler_%29.md): Prepares the preview of a file identified within a file preview request.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
