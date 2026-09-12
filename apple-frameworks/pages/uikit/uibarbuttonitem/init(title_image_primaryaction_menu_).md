> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(title:image:primaryaction:menu:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(title:image:primaryaction:menu:))

# init(title:image:primaryAction:menu:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a plain-style item using the specified title, image, primary action, and context menu.

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String? = nil, image: UIImage? = nil, primaryAction: UIAction? = nil, menu: UIMenu? = nil)
```

## Parameters

- `title`: The item’s title.
- `image`: The item’s image.

  The images displayed on the bar derive from this image. If this image is too large to fit on the bar, it’s scaled to fit. Typically, the size of a toolbar and navigation bar image is `20` x `20` points. The system uses the alpha values in the source image to create the images, ignoring opaque values.
- `primaryAction`: A [UIAction](../uiaction.md) to associate with the item, which the item uses to configure its title and image. If you specify `primaryAction`, it takes precedence over `title` and `image`.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items

- [init(title:image:target:action:menu:)](init%28title_image_target_action_menu_%29.md): Creates a plain-style item using the specified title, image, target, action, and context menu.
- [init()](init%28%29.md): Initializes the item to its default state.
- [init(coder:)](init%28coder_%29.md): Creates an item from data in an unarchiver.
