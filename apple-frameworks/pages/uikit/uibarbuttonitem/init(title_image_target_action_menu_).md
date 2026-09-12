> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/init(title:image:target:action:menu:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/init(title:image:target:action:menu:))

# init(title:image:target:action:menu:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS

Creates a plain-style item using the specified title, image, target, action, and context menu.

## Declaration

```swift
@MainActor @preconcurrency convenience init(title: String?, image: UIImage?, target: AnyObject?, action: Selector?, menu: UIMenu? = nil)
```

## Parameters

- `title`: The item’s title. If `nil`, a title doesn’t appear.
- `image`: The item’s image. If `nil`, an image doesn’t appear.

  The images displayed on the bar derive from this image. If this image is too large to fit on the bar, it’s scaled to fit. Typically, the size of a toolbar and navigation bar image is `20` x `20` points. The system uses the alpha values in the source image to create the images, ignoring opaque values.
- `target`: The object that receives the `action` message.
- `action`: The action to send to `target` when a person selects this item.
- `menu`: The menu to present. The context menu displays in response to a person tapping the item.

<a id="return-value"></a>

## Return Value

A newly initialized [UIBarButtonItem](../uibarbuttonitem.md).

## See Also

### Creating items

- [init(title:image:primaryAction:menu:)](init%28title_image_primaryaction_menu_%29.md): Creates a plain-style item using the specified title, image, primary action, and context menu.
- [init()](init%28%29.md): Initializes the item to its default state.
- [init(coder:)](init%28coder_%29.md): Creates an item from data in an unarchiver.
