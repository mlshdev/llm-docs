> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemgridelement/init(image:)

# init(image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a grid row element with the specified image.

## Declaration

```swift
init(image: UIImage)
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](../cplistimagerowitemcardelement/maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image to fit the space. Don’t specify an image object with an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

This method stores a copy of `image` in the inherited [image](../cplistimagerowitemelement/image.md) property.

# initWithImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a grid row element with the specified image.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image;
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages the light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](../cplistimagerowitemcardelement/maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image to fit the space. Don’t specify an image object with an animated sequence of images.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

<a id="discussion"></a>

## Discussion

This method stores a copy of `image` in the inherited [image](../cplistimagerowitemelement/image.md) property.
