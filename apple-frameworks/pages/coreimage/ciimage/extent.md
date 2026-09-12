> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/extent](https://developer.apple.com/documentation/coreimage/ciimage/extent)

# extent (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A rectangle that specifies the extent of the image.

## Declaration

```swift
var extent: CGRect { get }
```

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This rectangle specifies the extent of the image in working space coordinates.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [orientationTransform(forExifOrientation:)](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

# extent (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A rectangle that specifies the extent of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect extent;
```

```objectivec
@property (atomic, readonly) CGRect extent;
```

## Mentioned In

- [Selectively Focusing on an Image](../selectively-focusing-on-an-image.md)

<a id="Discussion"></a>

## Discussion

This rectangle specifies the extent of the image in working space coordinates.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [imageTransformForOrientation:](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.
