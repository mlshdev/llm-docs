> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/init(text:detailtext:image:showsdisclosureindicator:)](https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:image:showsdisclosureindicator:))

# init(text:detailText:image:showsDisclosureIndicator:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Creates a list item with primary text, secondary text, an image, and a disclosure indicator.

> Use [init(text:detailText:image:accessoryImage:accessoryType:)](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md) instead.

## Declaration

```swift
init(text: String?, detailText: String?, image: UIImage?, showsDisclosureIndicator: Bool)
```

## Parameters

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.
- `image`: The image to display on the leading edge of the list item cell. If the image is larger than `CPMaximumListItemImageSize`, the list item scales down the image to maximum size. If you provide an animated image, the list item uses the first image in the animation sequence.
- `showsDisclosureIndicator`: A Boolean value that indicates whether the list item cell displays a disclosure indicator. Set to [true](https://developer.apple.com/documentation/swift/true) to display the indicator on the trailing edge of the list item cell.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

# initWithText:detailText:image:showsDisclosureIndicator: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 14.0) · iPadOS 12.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0)

Creates a list item with primary text, secondary text, an image, and a disclosure indicator.

> Use [initWithText:detailText:image:accessoryImage:accessoryType:](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText image:(UIImage *) image showsDisclosureIndicator:(BOOL) showsDisclosureIndicator;
```

## Parameters

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.
- `image`: The image to display on the leading edge of the list item cell. If the image is larger than `CPMaximumListItemImageSize`, the list item scales down the image to maximum size. If you provide an animated image, the list item uses the first image in the animation sequence.
- `showsDisclosureIndicator`: A Boolean value that indicates whether the list item cell displays a disclosure indicator. Set to [true](https://developer.apple.com/documentation/swift/true) to display the indicator on the trailing edge of the list item cell.

<a id="return-value"></a>

## Return Value

A newly initialized list item.
