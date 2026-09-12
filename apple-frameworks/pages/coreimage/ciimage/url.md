> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/url](https://developer.apple.com/documentation/coreimage/ciimage/url)

# url (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The URL from which the image was loaded.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

A URL is available only if the image object was created with a URL (such as with the [init(contentsOf:)](init%28contentsof_%29.md) method or related methods). Otherwise, this property’s value is `nil`.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [colorSpace](colorspace.md): The color space of the image.
- [orientationTransform(forExifOrientation:)](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.

# url (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

The URL from which the image was loaded.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSURL * url;
```

<a id="Discussion"></a>

## Discussion

A URL is available only if the image object was created with a URL (such as with the [initWithContentsOfURL:](init%28contentsof_%29.md) method or related methods). Otherwise, this property’s value is `nil`.

## See Also

### Getting Image Information

- [definition](definition.md): Returns a filter shape object that represents the domain of definition of the image.
- [extent](extent.md): A rectangle that specifies the extent of the image.
- [properties](properties.md): Returns the metadata properties dictionary of the image.
- [colorSpace](colorspace.md): The color space of the image.
- [imageTransformForOrientation:](orientationtransform%28forexiforientation_%29.md): Returns the transformation needed to reorient the image to the specified orientation.
