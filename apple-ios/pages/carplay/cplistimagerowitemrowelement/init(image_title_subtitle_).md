> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistimagerowitemrowelement/init(image:title:subtitle:)

# init(image:title:subtitle:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a row element with the specified image and optional text.

## Declaration

```swift
init(image: UIImage, title: String?, subtitle: String?)
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](../cplistimagerowitemcardelement/maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.

# initWithImage:title:subtitle: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a row element with the specified image and optional text.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image title:(NSString *) title subtitle:(NSString *) subtitle;
```

## Parameters

- `image`: The image to display as the element’s primary content. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](../cplistimagerowitemcardelement/maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.
- `title`: The primary text to display beneath the image. CarPlay displays this string with a visually prominent style.
- `subtitle`: The secondary text to display beneath the title. CarPlay displays this string less prominently than the title.

<a id="return-value"></a>

## Return Value

An initialized element you can add to a row.
