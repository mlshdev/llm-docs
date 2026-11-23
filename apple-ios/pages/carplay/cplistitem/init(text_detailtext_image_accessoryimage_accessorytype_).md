> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:accessoryimage:accessorytype:)

# init(text:detailText:image:accessoryImage:accessoryType:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that displays an accessory beside its content.

## Declaration

```swift
init(text: String?, detailText: String?, image: UIImage?, accessoryImage: UIImage?, accessoryType: CPListItemAccessoryType)
```

## Parameters

- `text`: The primary text to show in the list item’s row.
- `detailText`: Secondary text to display below the primary text.
- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed.
- `accessoryImage`: An image to display on the trailing edge of the item’s row. Use this parameter to specify a custom accessory image. If you specify a value for the `accessoryType` parameter, set this parameter to `nil`.
- `accessoryType`: The accessory that the list item displays in its trailing region. If you specify an image in the `accessoryImage` parameter, CarPlay ignores the value in this parameter and sets the [accessoryType](accessorytype.md) property to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md).

<a id="discussion"></a>

## Discussion

If you create the images for the `image` and `accessoryImage` parameters from an asset catalog resource, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.

To determine the maximum pixel dimensions for images, multiply the value in the [maximumImageSize](maximumimagesize.md) property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating a list item

- [init(text:detailText:)](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [init(text:detailText:image:)](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.

# initWithText:detailText:image:accessoryImage:accessoryType: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Creates a list item that displays an accessory beside its content.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText image:(UIImage *) image accessoryImage:(UIImage *) accessoryImage accessoryType:(CPListItemAccessoryType) accessoryType;
```

## Parameters

- `text`: The primary text to show in the list item’s row.
- `detailText`: Secondary text to display below the primary text.
- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed.
- `accessoryImage`: An image to display on the trailing edge of the item’s row. Use this parameter to specify a custom accessory image. If you specify a value for the `accessoryType` parameter, set this parameter to `nil`.
- `accessoryType`: The accessory that the list item displays in its trailing region. If you specify an image in the `accessoryImage` parameter, CarPlay ignores the value in this parameter and sets the [accessoryType](accessorytype.md) property to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md).

<a id="discussion"></a>

## Discussion

If you create the images for the `image` and `accessoryImage` parameters from an asset catalog resource, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. If the image contains an animated sequence, CarPlay shows only the first image in the sequence.

To determine the maximum pixel dimensions for images, multiply the value in the [maximumImageSize](maximumimagesize.md) property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Creating a list item

- [initWithText:detailText:](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
