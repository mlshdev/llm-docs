> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvproresrawmetadata/recommendedcrop-swift.struct](https://developer.apple.com/documentation/corevideo/cvproresrawmetadata/recommendedcrop-swift.struct)

# CVProResRawMetadata.RecommendedCrop

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Recommended pixels to discard in the image after raw conversion.

## Declaration

```swift
struct RecommendedCrop
```

<a id="overview"></a>

## Overview

The values may be nonintegral due to downscaling, in which case the handling of fractional parts is implementation-dependent.

## Topics

### Initializers

- [init(pixelsToDiscardAtStartOfEachRow:pixelsToDiscardAtEndOfEachRow:rowsOfPixelsToDiscardAtTop:rowsOfPixelsToDiscardAtBottom:)](recommendedcrop-swift.struct/init%28pixelstodiscardatstartofeachrow_pixelstodiscardatendofeachrow_rowsofpixelstodiscardattop_rowsofpixelstodiscardatbottom_%29.md)

### Instance Properties

- [pixelsToDiscardAtEndOfEachRow](recommendedcrop-swift.struct/pixelstodiscardatendofeachrow.md): Pixels to discard from the end (right) of each row of the image.
- [pixelsToDiscardAtStartOfEachRow](recommendedcrop-swift.struct/pixelstodiscardatstartofeachrow.md): Pixels to discard from the start (left) of each row of the image.
- [rowsOfPixelsToDiscardAtBottom](recommendedcrop-swift.struct/rowsofpixelstodiscardatbottom.md): Rows of pixels to discard from the bottom of the image.
- [rowsOfPixelsToDiscardAtTop](recommendedcrop-swift.struct/rowsofpixelstodiscardattop.md): Rows of pixels to discard from the top of the image.

### Type Properties

- [zero](recommendedcrop-swift.struct/zero.md)

## Relationships

### Conforms To

- [CVAttachmentValueRepresentable](../cvattachmentvaluerepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
