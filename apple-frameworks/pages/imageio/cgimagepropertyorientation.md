> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagepropertyorientation](https://developer.apple.com/documentation/imageio/cgimagepropertyorientation)

# CGImagePropertyOrientation (Swift)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value describing the intended display orientation for an image.

## Declaration

```swift
@frozen enum CGImagePropertyOrientation
```

<a id="overview"></a>

## Overview

Values of this type define the position of the pixel coordinate origin point (`0,0`) and the directions of the coordinate axes relative to the intended display orientation of the image. Orientation values are commonly found in image metadata, and specifying image orientation correctly can be important both for displaying the image and for certain image processing tasks such as face recognition.

For example, the pixel data for an image captured by an iOS device camera is encoded in the camera sensor’s native landscape orientation. When the user captures a photo while holding the device in portrait orientation, iOS writes an orientation value of [CGImagePropertyOrientation.right](cgimagepropertyorientation/right.md) in the resulting image file. Software displaying the image can then, after reading that value from the file’s metadata, apply a 90° clockwise rotation to the image data so that the image appears in the photographer’s intended orientation.

![To correct an image with right orientation for display, rotate it 90° clockwise.](https://developer.apple.com/images/com.apple.imageio/media-2948298.png)

<a id="Compatibility-with-UIImageOrientation"></a>

### Compatibility with UIImageOrientation

The [CGImagePropertyOrientation](cgimagepropertyorientation.md) type covers the same set of orientation names available in from the [UIImage.Orientation](../uikit/uiimage/orientation.md) type, but the underlying numeric values of each type do not match. (For example, the “left mirrored” orientation has an underlying value of 5 in [CGImagePropertyOrientation](cgimagepropertyorientation.md), but an underlying value of 7 in [UIImage.Orientation](../uikit/uiimage/orientation.md).) If you have an orientation value in one type and need a semantically equivalent value in the other, use a function such as those below to produce the same-named value in the other type:

**Swift**

```swift
extension CGImagePropertyOrientation {
    init(_ uiOrientation: UIImage.Orientation) {
        switch uiOrientation {
            case .up: self = .up
            case .upMirrored: self = .upMirrored
            case .down: self = .down
            case .downMirrored: self = .downMirrored
            case .left: self = .left
            case .leftMirrored: self = .leftMirrored
            case .right: self = .right
            case .rightMirrored: self = .rightMirrored
        @unknown default:
            fatalError()
        }
    }
}
extension UIImage.Orientation {
    init(_ cgOrientation: CGImagePropertyOrientation) {
        switch cgOrientation {
            case .up: self = .up
            case .upMirrored: self = .upMirrored
            case .down: self = .down
            case .downMirrored: self = .downMirrored
            case .left: self = .left
            case .leftMirrored: self = .leftMirrored
            case .right: self = .right
            case .rightMirrored: self = .rightMirrored
        @unknown default:
            fatalError()
        }
    }
}
```

**Objective-C**

```objc
CGImagePropertyOrientation CGImagePropertyOrientationForUIImageOrientation(UIImageOrientation uiOrientation) {
    switch (uiOrientation) {
        case UIImageOrientationUp: return kCGImagePropertyOrientationUp;
        case UIImageOrientationDown: return kCGImagePropertyOrientationDown;
        case UIImageOrientationLeft: return kCGImagePropertyOrientationLeft;
        case UIImageOrientationRight: return kCGImagePropertyOrientationRight;
        case UIImageOrientationUpMirrored: return kCGImagePropertyOrientationUpMirrored;
        case UIImageOrientationDownMirrored: return kCGImagePropertyOrientationDownMirrored;
        case UIImageOrientationLeftMirrored: return kCGImagePropertyOrientationLeftMirrored;
        case UIImageOrientationRightMirrored: return kCGImagePropertyOrientationRightMirrored;
    }
}
UIImageOrientation UIImageOrientationForCGImagePropertyOrientation(CGImagePropertyOrientation cgOrientation) {
    switch (cgOrientation) {
        case kCGImagePropertyOrientationUp: return UIImageOrientationUp;
        case kCGImagePropertyOrientationDown: return UIImageOrientationDown;
        case kCGImagePropertyOrientationLeft: return UIImageOrientationLeft;
        case kCGImagePropertyOrientationRight: return UIImageOrientationRight;
        case kCGImagePropertyOrientationUpMirrored: return UIImageOrientationUpMirrored;
        case kCGImagePropertyOrientationDownMirrored: return UIImageOrientationDownMirrored;
        case kCGImagePropertyOrientationLeftMirrored: return UIImageOrientationLeftMirrored;
        case kCGImagePropertyOrientationRightMirrored: return UIImageOrientationRightMirrored;
    }
}
```

<a id="Working-with-Raw-TIFFExif-Numeric-Values"></a>

### Working with Raw TIFF/Exif Numeric Values

Some APIs describe image orientation with basic integer values, intended for interpretation according to the TIFF and Exif specifications. The [CGImagePropertyOrientation](cgimagepropertyorientation.md) type simply defines symbolic names for those values, so you can convert to and from the raw numeric type with C type-cast syntax or the inherited [init(rawValue:)](https://developer.apple.com/documentation/swift/rawrepresentable/init%28rawvalue:%29) initializer and [rawValue](https://developer.apple.com/documentation/swift/rawrepresentable/rawvalue-swift.property) property in Swift.

## Topics

### Image Orientations

- [CGImagePropertyOrientation.up](cgimagepropertyorientation/up.md): The encoded image data matches the image’s intended display orientation.
- [CGImagePropertyOrientation.upMirrored](cgimagepropertyorientation/upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [CGImagePropertyOrientation.down](cgimagepropertyorientation/down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [CGImagePropertyOrientation.downMirrored](cgimagepropertyorientation/downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.
- [CGImagePropertyOrientation.leftMirrored](cgimagepropertyorientation/leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.right](cgimagepropertyorientation/right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.rightMirrored](cgimagepropertyorientation/rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.
- [CGImagePropertyOrientation.left](cgimagepropertyorientation/left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

### Initializers

- [init(rawValue:)](cgimagepropertyorientation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.

# CGImagePropertyOrientation (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value describing the intended display orientation for an image.

## Declaration

```objectivec
enum CGImagePropertyOrientation : uint32_t;
```

<a id="overview"></a>

## Overview

Values of this type define the position of the pixel coordinate origin point (`0,0`) and the directions of the coordinate axes relative to the intended display orientation of the image. Orientation values are commonly found in image metadata, and specifying image orientation correctly can be important both for displaying the image and for certain image processing tasks such as face recognition.

For example, the pixel data for an image captured by an iOS device camera is encoded in the camera sensor’s native landscape orientation. When the user captures a photo while holding the device in portrait orientation, iOS writes an orientation value of [kCGImagePropertyOrientationRight](cgimagepropertyorientation/right.md) in the resulting image file. Software displaying the image can then, after reading that value from the file’s metadata, apply a 90° clockwise rotation to the image data so that the image appears in the photographer’s intended orientation.

![To correct an image with right orientation for display, rotate it 90° clockwise.](https://developer.apple.com/images/com.apple.imageio/media-2948298.png)

<a id="Compatibility-with-UIImageOrientation"></a>

### Compatibility with UIImageOrientation

The [CGImagePropertyOrientation](cgimagepropertyorientation.md) type covers the same set of orientation names available in from the [UIImageOrientation](../uikit/uiimage/orientation.md) type, but the underlying numeric values of each type do not match. (For example, the “left mirrored” orientation has an underlying value of 5 in [CGImagePropertyOrientation](cgimagepropertyorientation.md), but an underlying value of 7 in [UIImageOrientation](../uikit/uiimage/orientation.md).) If you have an orientation value in one type and need a semantically equivalent value in the other, use a function such as those below to produce the same-named value in the other type:

**Swift**

```swift
extension CGImagePropertyOrientation {
    init(_ uiOrientation: UIImage.Orientation) {
        switch uiOrientation {
            case .up: self = .up
            case .upMirrored: self = .upMirrored
            case .down: self = .down
            case .downMirrored: self = .downMirrored
            case .left: self = .left
            case .leftMirrored: self = .leftMirrored
            case .right: self = .right
            case .rightMirrored: self = .rightMirrored
        @unknown default:
            fatalError()
        }
    }
}
extension UIImage.Orientation {
    init(_ cgOrientation: CGImagePropertyOrientation) {
        switch cgOrientation {
            case .up: self = .up
            case .upMirrored: self = .upMirrored
            case .down: self = .down
            case .downMirrored: self = .downMirrored
            case .left: self = .left
            case .leftMirrored: self = .leftMirrored
            case .right: self = .right
            case .rightMirrored: self = .rightMirrored
        @unknown default:
            fatalError()
        }
    }
}
```

**Objective-C**

```objc
CGImagePropertyOrientation CGImagePropertyOrientationForUIImageOrientation(UIImageOrientation uiOrientation) {
    switch (uiOrientation) {
        case UIImageOrientationUp: return kCGImagePropertyOrientationUp;
        case UIImageOrientationDown: return kCGImagePropertyOrientationDown;
        case UIImageOrientationLeft: return kCGImagePropertyOrientationLeft;
        case UIImageOrientationRight: return kCGImagePropertyOrientationRight;
        case UIImageOrientationUpMirrored: return kCGImagePropertyOrientationUpMirrored;
        case UIImageOrientationDownMirrored: return kCGImagePropertyOrientationDownMirrored;
        case UIImageOrientationLeftMirrored: return kCGImagePropertyOrientationLeftMirrored;
        case UIImageOrientationRightMirrored: return kCGImagePropertyOrientationRightMirrored;
    }
}
UIImageOrientation UIImageOrientationForCGImagePropertyOrientation(CGImagePropertyOrientation cgOrientation) {
    switch (cgOrientation) {
        case kCGImagePropertyOrientationUp: return UIImageOrientationUp;
        case kCGImagePropertyOrientationDown: return UIImageOrientationDown;
        case kCGImagePropertyOrientationLeft: return UIImageOrientationLeft;
        case kCGImagePropertyOrientationRight: return UIImageOrientationRight;
        case kCGImagePropertyOrientationUpMirrored: return UIImageOrientationUpMirrored;
        case kCGImagePropertyOrientationDownMirrored: return UIImageOrientationDownMirrored;
        case kCGImagePropertyOrientationLeftMirrored: return UIImageOrientationLeftMirrored;
        case kCGImagePropertyOrientationRightMirrored: return UIImageOrientationRightMirrored;
    }
}
```

<a id="Working-with-Raw-TIFFExif-Numeric-Values"></a>

### Working with Raw TIFF/Exif Numeric Values

Some APIs describe image orientation with basic integer values, intended for interpretation according to the TIFF and Exif specifications. The [CGImagePropertyOrientation](cgimagepropertyorientation.md) type simply defines symbolic names for those values, so you can convert to and from the raw numeric type with C type-cast syntax or the inherited [init(rawValue:)](https://developer.apple.com/documentation/swift/rawrepresentable/init%28rawvalue:%29) initializer and [rawValue](https://developer.apple.com/documentation/swift/rawrepresentable/rawvalue-swift.property) property in Swift.

## Topics

### Image Orientations

- [kCGImagePropertyOrientationUp](cgimagepropertyorientation/up.md): The encoded image data matches the image’s intended display orientation.
- [kCGImagePropertyOrientationUpMirrored](cgimagepropertyorientation/upmirrored.md): The encoded image data is horizontally flipped from the image’s intended display orientation.
- [kCGImagePropertyOrientationDown](cgimagepropertyorientation/down.md): The encoded image data is rotated 180° from the image’s intended display orientation.
- [kCGImagePropertyOrientationDownMirrored](cgimagepropertyorientation/downmirrored.md): The encoded image data is vertically flipped from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeftMirrored](cgimagepropertyorientation/leftmirrored.md): The encoded image data is horizontally flipped and rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationRight](cgimagepropertyorientation/right.md): The encoded image data is rotated 90° counter-clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationRightMirrored](cgimagepropertyorientation/rightmirrored.md): The encoded image data is horizontally flipped and rotated 90° clockwise from the image’s intended display orientation.
- [kCGImagePropertyOrientationLeft](cgimagepropertyorientation/left.md): The encoded image data is rotated 90° clockwise from the image’s intended display orientation.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
