> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(image:style:target:action:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(image:style:target:action:))

# init(image:style:target:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified image, style, target, and action.

## Declaration

```swift
convenience init(image: UIImage?, style: UIBarButtonItem.Style, target: Any?, action: Selector?)
```

## Parameters

- `image`: The item’s image. If `nil`, an image doesn’t appear.

  The images displayed on the bar derive from this image. If this image is too large to fit on the bar, it’s scaled to fit. Typically, the size of a toolbar and navigation bar image is `20` x `20` points. The system uses the alpha values in the source image to create the images, ignoring opaque values.
- `style`: The style of the item. For possible values, see [UIBarButtonItem.Style](style-swift.enum.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Related Documentation

- [init(barButtonSystemItem:target:action:)](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.

### Creating items of a specific style

- [init(title:style:target:action:)](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [init(image:landscapeImagePhone:style:target:action:)](init%28image_landscapeimagephone_style_target_action_%29.md): Creates an item using the specified images, style, target, and action.

# initWithImage:style:target:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified image, style, target, and action.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image style:(UIBarButtonItemStyle) style target:(id) target action:(SEL) action;
```

## Parameters

- `image`: The item’s image. If `nil`, an image doesn’t appear.

  The images displayed on the bar derive from this image. If this image is too large to fit on the bar, it’s scaled to fit. Typically, the size of a toolbar and navigation bar image is `20` x `20` points. The system uses the alpha values in the source image to create the images, ignoring opaque values.
- `style`: The style of the item. For possible values, see [UIBarButtonItemStyle](style-swift.enum.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Related Documentation

- [initWithBarButtonSystemItem:target:action:](init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.

### Creating items of a specific style

- [initWithTitle:style:target:action:](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [initWithImage:landscapeImagePhone:style:target:action:](init%28image_landscapeimagephone_style_target_action_%29.md): Creates an item using the specified images, style, target, and action.
