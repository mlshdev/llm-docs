> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/definition](https://developer.apple.com/documentation/coreimage/ciimage/definition)

# definition (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a filter shape object that represents the domain of definition of the image.

## Declaration

```swift
var definition: CIFilterShape { get }
```

<a id="return-value"></a>

## Return Value

A filter shape object.

## See Also

### Getting Image Information

- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [orientationTransform(forExifOrientation:)](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

# definition (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a filter shape object that represents the domain of definition of the image.

## Declaration

```objectivec
@property (atomic, readonly) CIFilterShape * definition;
```

<a id="return-value"></a>

## Return Value

A filter shape object.

## See Also

### Getting Image Information

- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [url](url.md): The URL from which the image was loaded.
- [colorSpace](colorspace.md): The color space of the image.
- [imageTransformForOrientation:](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.
