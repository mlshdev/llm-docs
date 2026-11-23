> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/image

# image (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display on the leading edge of the cell.

## Declaration

```swift
var image: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to access the image for your row. To change the value of this property after creating the list item, call the [setImage(\_:)](setimage%28__%29.md) method.

If your image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If the image is smaller or larger than the dimensions in the [maximumImageSize](maximumimagesize.md) property, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

To change the value of this property after creating the list item, call the [setImage(\_:)](setimage%28__%29.md) method.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# image (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The image to display on the leading edge of the cell.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * image;
```

<a id="discussion"></a>

## Discussion

Use this property to access the image for your row. To change the value of this property after creating the list item, call the [setImage:](setimage%28__%29.md) method.

If your image originates from an asset catalog, CarPlay manages light and dark variants of your image and switches them when needed. If the image is smaller or larger than the dimensions in the [maximumImageSize](maximumimagesize.md) property, CarPlay scales the image as needed to fit the space. Don’t specify an image object with an animated sequence of images.

To change the value of this property after creating the list item, call the [setImage:](setimage%28__%29.md) method.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
