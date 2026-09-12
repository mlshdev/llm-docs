> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyimages](https://developer.apple.com/documentation/imageio/kcgimagepropertyimages)

# kCGImagePropertyImages (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of dictionaries, each of which contains metadata for one of the images in the file.

## Declaration

```swift
let kCGImagePropertyImages: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArray](../corefoundation/cfarray.md). Each element in the array is a [CFDictionary](../corefoundation/cfdictionary.md) that contains metadata for one of the images. For example, the dictionary might contain the width and height of the image, the image’s color space name, thumbnail image information, and any auxiliary data.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

# kCGImagePropertyImages (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An array of dictionaries, each of which contains metadata for one of the images in the file.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyImages;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFArrayRef](../corefoundation/cfarray.md). Each element in the array is a [CFDictionaryRef](../corefoundation/cfdictionary.md) that contains metadata for one of the images. For example, the dictionary might contain the width and height of the image, the image’s color space name, thumbnail image information, and any auxiliary data.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.
