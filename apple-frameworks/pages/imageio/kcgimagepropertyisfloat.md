> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyisfloat](https://developer.apple.com/documentation/imageio/kcgimagepropertyisfloat)

# kCGImagePropertyIsFloat (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the image contains floating-point pixel samples.

## Declaration

```swift
let kCGImagePropertyIsFloat: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the image contains floating-point pixel samples.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

# kCGImagePropertyIsFloat (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the image contains floating-point pixel samples.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyIsFloat;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if the image contains floating-point pixel samples.

## See Also

### Image Information

- [kCGImagePropertyImageCount](kcgimagepropertyimagecount.md): The number of images in the file.
- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.
