> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpthumbnailimage](https://developer.apple.com/documentation/carplay/cpthumbnailimage)

# CPThumbnailImage (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```swift
@MainActor class CPThumbnailImage
```

## Topics

### Initializers

- [init(coder:)](cpthumbnailimage/init%28coder_%29.md)
- [init(image:)](cpthumbnailimage/init%28image_%29.md): Initialize a thumbnail with an image.
- [init(image:imageOverlay:sportsOverlay:)](cpthumbnailimage/init%28image_imageoverlay_sportsoverlay_%29.md): Initialize a thumbnail with a combination of properties.

### Instance Properties

- [image](cpthumbnailimage/image.md): The image displayed in the thumbnail.
- [imageOverlay](cpthumbnailimage/imageoverlay.md): An optional overlay for the thumbnail.
- [sportsOverlay](cpthumbnailimage/sportsoverlay.md): An optional sports overlay for the thumbnail.

### Type Methods

- [maximumImageSize(forAspectRatio:)](cpthumbnailimage/maximumimagesize%28foraspectratio_%29.md): Returns the recommended maximum image size for a @c CPThumbnailImage with the given aspect ratio.

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

# CPThumbnailImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

## Declaration

```objectivec
@interface CPThumbnailImage : NSObject
```

## Topics

### Instance Properties

- [image](cpthumbnailimage/image.md): The image displayed in the thumbnail.
- [imageOverlay](cpthumbnailimage/imageoverlay.md): An optional overlay for the thumbnail.
- [sportsOverlay](cpthumbnailimage/sportsoverlay.md): An optional sports overlay for the thumbnail.

### Instance Methods

- [initWithImage:](cpthumbnailimage/init%28image_%29.md): Initialize a thumbnail with an image.
- [initWithImage:imageOverlay:sportsOverlay:](cpthumbnailimage/init%28image_imageoverlay_sportsoverlay_%29.md): Initialize a thumbnail with a combination of properties.

### Type Methods

- [maximumImageSizeForAspectRatio:](cpthumbnailimage/maximumimagesize%28foraspectratio_%29.md): Returns the recommended maximum image size for a @c CPThumbnailImage with the given aspect ratio.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
