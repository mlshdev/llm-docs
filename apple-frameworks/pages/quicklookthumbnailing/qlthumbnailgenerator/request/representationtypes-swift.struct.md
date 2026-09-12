> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.struct](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request/representationtypes-swift.struct)

# QLThumbnailGenerator.Request.RepresentationTypes (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The various types of thumbnails that you can request.

## Declaration

```swift
struct RepresentationTypes
```

<a id="overview"></a>

## Overview

Thumbnails come in one of three different types:

- **[icon](representationtypes-swift.struct/icon.md)**: A file icon representation.
- **[lowQualityThumbnail](representationtypes-swift.struct/lowqualitythumbnail.md)**: A faster to generate version of the thumbnail that may sacrifice quality for speed.
- **[thumbnail](representationtypes-swift.struct/thumbnail.md)**: A high-quality thumbnail.

To request all thumbnail representations, use [all](representationtypes-swift.struct/all.md).

## Topics

### Creating a Thumbnail Type

- [init(rawValue:)](representationtypes-swift.struct/init%28rawvalue_%29.md): Creates a new thumbnail type object for a given value.
- [all](representationtypes-swift.struct/all.md): The thumbnail type to generate all possible thumbnail representations.
- [icon](representationtypes-swift.struct/icon.md): A file icon representation of a file.
- [lowQualityThumbnail](representationtypes-swift.struct/lowqualitythumbnail.md): A faster to generate version of the thumbnail that may sacrifice quality for speed.
- [thumbnail](representationtypes-swift.struct/thumbnail.md): A thumbnail representation of a file.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.

# QLThumbnailGenerationRequestRepresentationTypes (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The various types of thumbnails that you can request.

## Declaration

```objectivec
enum QLThumbnailGenerationRequestRepresentationTypes : NSUInteger;
```

<a id="overview"></a>

## Overview

Thumbnails come in one of three different types:

- **[QLThumbnailGenerationRequestRepresentationTypeIcon](representationtypes-swift.struct/icon.md)**: A file icon representation.
- **[QLThumbnailGenerationRequestRepresentationTypeLowQualityThumbnail](representationtypes-swift.struct/lowqualitythumbnail.md)**: A faster to generate version of the thumbnail that may sacrifice quality for speed.
- **[QLThumbnailGenerationRequestRepresentationTypeThumbnail](representationtypes-swift.struct/thumbnail.md)**: A high-quality thumbnail.

To request all thumbnail representations, use [QLThumbnailGenerationRequestRepresentationTypeAll](representationtypes-swift.struct/all.md).

## Topics

### Creating a Thumbnail Type

- [QLThumbnailGenerationRequestRepresentationTypeAll](representationtypes-swift.struct/all.md): The thumbnail type to generate all possible thumbnail representations.
- [QLThumbnailGenerationRequestRepresentationTypeIcon](representationtypes-swift.struct/icon.md): A file icon representation of a file.
- [QLThumbnailGenerationRequestRepresentationTypeLowQualityThumbnail](representationtypes-swift.struct/lowqualitythumbnail.md): A faster to generate version of the thumbnail that may sacrifice quality for speed.
- [QLThumbnailGenerationRequestRepresentationTypeThumbnail](representationtypes-swift.struct/thumbnail.md): A thumbnail representation of a file.

## See Also

### Describing the Requested Thumbnail

- [size](size.md): The size of the thumbnails.
- [scale](scale.md): The pixel density of the display on the intended device.
- [contentType](contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
