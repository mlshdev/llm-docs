> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/init(text:detailtext:image:)](https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:))

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

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.
- `image`: The image to display on the leading edge of the list item cell. If the image is larger than `CPMaximumListItemImageSize`, the list item scales down the image to maximum size. If you provide an animated image, the list item uses the first image in the animation sequence.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a List Item

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

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.
- `image`: The image to display on the leading edge of the list item cell. If the image is larger than `CPMaximumListItemImageSize`, the list item scales down the image to maximum size. If you provide an animated image, the list item uses the first image in the animation sequence.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a List Item

- [initWithText:detailText:](init%28text_detailtext_%29.md): Creates a list item with primary and secondary text.
- [initWithText:detailText:image:accessoryImage:accessoryType:](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.
