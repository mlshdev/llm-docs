> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/properties](https://developer.apple.com/documentation/coreimage/ciimage/properties)

# properties (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns the metadata properties dictionary of the image.

## Declaration

```swift
var properties: [String : Any] { get }
```

<a id="discussion"></a>

## Discussion

If the [CIImage](../ciimage.md) was created from `NSURL` or `NSData` then this dictionary is determined by calling `CGImageSourceCopyPropertiesAtIndex()`.

If the [CIImage](../ciimage.md) was created with the [properties](../ciimageoption/properties.md) option, then that dictionary is returned.

If the [CIImage](../ciimage.md) was created by applying [CIFilter](../cifilter-swift.class.md) or [CIKernel](../cikernel.md) then the properties of the root inputImage will be returned.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [orientationTransform(forExifOrientation:)](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

# properties (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

Returns the metadata properties dictionary of the image.

## Declaration

```objectivec
@property (atomic, readonly) NSDictionary<NSString *,id> * properties;
```

<a id="discussion"></a>

## Discussion

If the [CIImage](../ciimage.md) was created from `NSURL` or `NSData` then this dictionary is determined by calling `CGImageSourceCopyPropertiesAtIndex()`.

If the [CIImage](../ciimage.md) was created with the [kCIImageProperties](../ciimageoption/properties.md) option, then that dictionary is returned.

If the [CIImage](../ciimage.md) was created by applying [CIFilter](../cifilter-swift.class.md) or [CIKernel](../cikernel.md) then the properties of the root inputImage will be returned.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [imageTransformForOrientation:](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.
