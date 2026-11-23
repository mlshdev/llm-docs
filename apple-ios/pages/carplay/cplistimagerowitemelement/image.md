> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemelement/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The image associated with the element.

## Declaration

```swift
@NSCopying var image: UIImage { get set }
```

<a id="discussion"></a>

## Discussion

The image in this property constitutes the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. If the image is smaller or larger than the dimensions in the [maximumImageSize](maximumimagesize.md) property, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

## See Also

### Getting the element’s content

- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the element’s image.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The image associated with the element.

## Declaration

```objectivec
@property (nonatomic, copy) UIImage * image;
```

<a id="discussion"></a>

## Discussion

The image in this property constitutes the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. If the image is smaller or larger than the dimensions in the [maximumImageSize](maximumimagesize.md) property, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

## See Also

### Getting the element’s content

- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the element’s image.
