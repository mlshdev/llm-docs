> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/setimage(_:)

# setImage(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the leading image of the list item.

## Declaration

```swift
func setImage(_ image: UIImage?)
```

## Parameters

- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# setImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the leading image of the list item.

## Declaration

```objectivec
- (void) setImage:(UIImage *) image;
```

## Parameters

- `image`: An image to display on the leading edge of the list item’s row. If the image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. Specify images with the dimensions listed in the [maximumImageSize](maximumimagesize.md) property. If your image is smaller or larger than the maximum dimensions, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
