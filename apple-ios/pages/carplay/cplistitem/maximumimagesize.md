> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/maximumimagesize

# maximumImageSize (Swift)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum dimensions for the list item images.

## Declaration

```swift
class var maximumImageSize: CGSize { get }
```

<a id="discussion"></a>

## Discussion

This property contains the maximum permissible dimensions, in points, for the images in the [image](image.md) and [accessoryImage](accessoryimage.md) properties. When creating images for your items, use this information to determine the maximum size of your images.

To determine the maximum pixel dimensions for images, multiply the value in this property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.

# maximumImageSize (Objective-C)

**Framework:** CarPlay  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The maximum dimensions for the list item images.

## Declaration

```objectivec
@property (class, nonatomic, readonly) CGSize maximumImageSize;
```

<a id="discussion"></a>

## Discussion

This property contains the maximum permissible dimensions, in points, for the images in the [image](image.md) and [accessoryImage](accessoryimage.md) properties. When creating images for your items, use this information to determine the maximum size of your images.

To determine the maximum pixel dimensions for images, multiply the value in this property by the current scale factor for your CarPlay interface. Get the interface scale factor from the traits in the [carTraitCollection](../cpinterfacecontroller/cartraitcollection.md) property of your interface controller.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
