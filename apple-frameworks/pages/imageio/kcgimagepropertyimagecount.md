> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimagepropertyimagecount](https://developer.apple.com/documentation/imageio/kcgimagepropertyimagecount)

# kCGImagePropertyImageCount (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of images in the file.

## Declaration

```swift
let kCGImagePropertyImageCount: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumber](../corefoundation/cfnumber.md).

## See Also

### Image Information

- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.

# kCGImagePropertyImageCount (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The number of images in the file.

## Declaration

```objectivec
extern CFStringRef const kCGImagePropertyImageCount;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumberRef](../corefoundation/cfnumber.md).

## See Also

### Image Information

- [kCGImagePropertyIsIndexed](kcgimagepropertyisindexed.md): A Boolean value that indicates whether the image contains indexed pixel samples.
- [kCGImagePropertyImages](kcgimagepropertyimages.md): An array of dictionaries, each of which contains metadata for one of the images in the file.
- [kCGImagePropertyThumbnailImages](kcgimagepropertythumbnailimages.md)
- [kCGImagePropertyPrimaryImage](kcgimagepropertyprimaryimage.md): The index of the primary image in the file.
- [kCGImagePropertyIsFloat](kcgimagepropertyisfloat.md): A Boolean value that indicates whether the image contains floating-point pixel samples.
- [kCGImagePropertyOrientation](kcgimagepropertyorientation.md): The intended display orientation of the image.
- [Individual Image Properties](individual-image-properties.md): Properties that apply to an individual image in an image source.
- [CGImagePropertyOrientation](cgimagepropertyorientation.md): A value describing the intended display orientation for an image.
