> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/colorspace](https://developer.apple.com/documentation/coreimage/ciimage/colorspace)

# colorSpace (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The color space of the image.

## Declaration

```swift
var colorSpace: CGColorSpace? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is `nil` if the image’s color space cannot be determined.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [orientationTransform(forExifOrientation:)](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

# colorSpace (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The color space of the image.

## Declaration

```objectivec
@property (atomic, readonly, nullable) CGColorSpaceRef colorSpace;
```

<a id="Discussion"></a>

## Discussion

This property’s value is `nil` if the image’s color space cannot be determined.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [imageTransformForOrientation:](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.
