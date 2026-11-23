> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:)

# init(text:detailText:image:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list item with primary text, secondary text, and an image.

## Declaration

```swift
init(text: String?, detailText: String?, image: UIImage?)
```

## Parameters

- `text`: The primary text to show in the list item’s row.
- `detailText`: Secondary text to display below the primary text.
- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a list item

- [init(text:detailText:)](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [init(text:detailText:image:accessoryImage:accessoryType:)](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

# initWithText:detailText:image: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list item with primary text, secondary text, and an image.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText image:(UIImage *) image;
```

## Parameters

- `text`: The primary text to show in the list item’s row.
- `detailText`: Secondary text to display below the primary text.
- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a list item

- [initWithText:detailText:](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:accessoryImage:accessoryType:](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.
