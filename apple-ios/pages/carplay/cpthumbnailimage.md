> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpthumbnailimage

# CPThumbnailImage (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An image that can display overlays and metadata on top of the image.

## Declaration

```swift
@MainActor class CPThumbnailImage
```

<a id="overview"></a>

## Overview

A `CPThumbnailImage` provides an alternative to a plain image in the rows or header of a list. A thumbnail image contains a base image and optional overlay content. Use the overlays to add a badge to the image, tag it with a specific icon, or display information from a sporting event.

When creating a list, configure row elements with `CPThumbnailImage` objects if you think you might need overlays later. You can add overlays at creation time or after you create the thumbnail image. For example, a sports app might create thumbnail images for different sports events and update the overlays each time the scores change.

## Topics

### Creating a thumbnail image

- [init(image:)](cpthumbnailimage/init%28image_%29.md): Creates a thumbnail with an image object.
- [init(image:imageOverlay:sportsOverlay:)](cpthumbnailimage/init%28image_imageoverlay_sportsoverlay_%29.md): Creates a thumbnail with an image object and optional overlays.
- [init(coder:)](cpthumbnailimage/init%28coder_%29.md)

### Getting the thumbnail content

- [image](cpthumbnailimage/image.md): The main image to display.
- [imageOverlay](cpthumbnailimage/imageoverlay.md): An overlay with a custom image or text badge.
- [sportsOverlay](cpthumbnailimage/sportsoverlay.md): An overlay with sporting event details, including the teams and current score.

### Getting the supported image size

- [maximumImageSize(forAspectRatio:)](cpthumbnailimage/maximumimagesize%28foraspectratio_%29.md): Calculates the maximum image size for a thumbnail image with the specified aspect ratio.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Common types

- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.

# CPThumbnailImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

An image that can display overlays and metadata on top of the image.

## Declaration

```objectivec
@interface CPThumbnailImage : NSObject
```

<a id="overview"></a>

## Overview

A `CPThumbnailImage` provides an alternative to a plain image in the rows or header of a list. A thumbnail image contains a base image and optional overlay content. Use the overlays to add a badge to the image, tag it with a specific icon, or display information from a sporting event.

When creating a list, configure row elements with `CPThumbnailImage` objects if you think you might need overlays later. You can add overlays at creation time or after you create the thumbnail image. For example, a sports app might create thumbnail images for different sports events and update the overlays each time the scores change.

## Topics

### Creating a thumbnail image

- [initWithImage:](cpthumbnailimage/init%28image_%29.md): Creates a thumbnail with an image object.
- [initWithImage:imageOverlay:sportsOverlay:](cpthumbnailimage/init%28image_imageoverlay_sportsoverlay_%29.md): Creates a thumbnail with an image object and optional overlays.

### Getting the thumbnail content

- [image](cpthumbnailimage/image.md): The main image to display.
- [imageOverlay](cpthumbnailimage/imageoverlay.md): An overlay with a custom image or text badge.
- [sportsOverlay](cpthumbnailimage/sportsoverlay.md): An overlay with sporting event details, including the teams and current score.

### Getting the supported image size

- [maximumImageSizeForAspectRatio:](cpthumbnailimage/maximumimagesize%28foraspectratio_%29.md): Calculates the maximum image size for a thumbnail image with the specified aspect ratio.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Common types

- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.
