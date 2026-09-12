> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(image:landscapeimagephone:style:target:action:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(image:landscapeimagephone:style:target:action:))

# init(image:landscapeImagePhone:style:target:action:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified images, style, target, and action.

## Declaration

```swift
convenience init(image: UIImage?, landscapeImagePhone: UIImage?, style: UIBarButtonItem.Style, target: Any?, action: Selector?)
```

## Parameters

- `image`: The item’s image. If `nil`, an image doesn’t appear.
- `landscapeImagePhone`: The image to use for the item in landscape bars in the [UIUserInterfaceIdiom.phone](../uiuserinterfaceidiom/phone.md) idiom.
- `style`: The style of the item. For possible values, see [UIBarButtonItem.Style](style-swift.enum.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items of a specific style

- [init(title:style:target:action:)](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [init(image:style:target:action:)](init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.

# initWithImage:landscapeImagePhone:style:target:action: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates an item using the specified images, style, target, and action.

## Declaration

```objectivec
- (instancetype) initWithImage:(UIImage *) image landscapeImagePhone:(UIImage *) landscapeImagePhone style:(UIBarButtonItemStyle) style target:(id) target action:(SEL) action;
```

## Parameters

- `image`: The item’s image. If `nil`, an image doesn’t appear.
- `landscapeImagePhone`: The image to use for the item in landscape bars in the [UIUserInterfaceIdiomPhone](../uiuserinterfaceidiom/phone.md) idiom.
- `style`: The style of the item. For possible values, see [UIBarButtonItemStyle](style-swift.enum.md).
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items of a specific style

- [initWithTitle:style:target:action:](init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [initWithImage:style:target:action:](init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.
