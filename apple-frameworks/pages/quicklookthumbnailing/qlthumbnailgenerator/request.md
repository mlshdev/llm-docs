> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quicklookthumbnailing/qlthumbnailgenerator/request](https://developer.apple.com/documentation/quicklookthumbnailing/qlthumbnailgenerator/request)

# QLThumbnailGenerator.Request (Swift)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A request to generate a thumbnail for a file.

## Declaration

```swift
class Request
```

## Topics

### Creating a Thumbail Request

- [init(fileAt:size:scale:representationTypes:)](request/init%28fileat_size_scale_representationtypes_%29.md): Creates a new request for a thumbnail with the specified parameters for a file at a provided URL.

### Describing the Requested Thumbnail

- [size](request/size.md): The size of the thumbnails.
- [scale](request/scale.md): The pixel density of the display on the intended device.
- [contentType](request/contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](request/representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](request/minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](request/iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerator.Request.RepresentationTypes](request/representationtypes-swift.struct.md): The various types of thumbnails that you can request.

### Initializers

- [init(coder:)](request/init%28coder_%29.md)
- [init(fileAtURL:size:scale:representationTypes:)](request/init%28fileaturl_size_scale_representationtypes_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Generating a Thumbnail

- [generateBestRepresentation(for:completion:)](generatebestrepresentation%28for_completion_%29.md): Generates the best possible thumbnail representation for a file and calls a handler upon completion.
- [generateRepresentations(for:update:)](generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.

# QLThumbnailGenerationRequest (Objective-C)

**Framework:** Quick Look Thumbnailing  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

A request to generate a thumbnail for a file.

## Declaration

```objectivec
@interface QLThumbnailGenerationRequest : NSObject
```

## Topics

### Creating a Thumbail Request

- [initWithFileAtURL:size:scale:representationTypes:](request/init%28fileat_size_scale_representationtypes_%29.md): Creates a new request for a thumbnail with the specified parameters for a file at a provided URL.

### Describing the Requested Thumbnail

- [size](request/size.md): The size of the thumbnails.
- [scale](request/scale.md): The pixel density of the display on the intended device.
- [contentType](request/contenttype.md): The content type of the source data for the thumbnail request.
- [representationTypes](request/representationtypes-swift.property.md): The thumbnail sizes that you provide for a thumbnail request.
- [minimumDimension](request/minimumdimension.md): The minimum height or width for a generated thumbnail.
- [iconMode](request/iconmode.md): A Boolean value indicating whether the generated thumbnail request should include icon decorations.
- [QLThumbnailGenerationRequestRepresentationTypes](request/representationtypes-swift.struct.md): The various types of thumbnails that you can request.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Generating a Thumbnail

- [generateBestRepresentationForRequest:completionHandler:](generatebestrepresentation%28for_completion_%29.md): Generates the best possible thumbnail representation for a file and calls a handler upon completion.
- [generateRepresentationsForRequest:updateHandler:](generaterepresentations%28for_update_%29.md): Generates various thumbnail representations for a file and calls the update handler for each thumbnail representation.
