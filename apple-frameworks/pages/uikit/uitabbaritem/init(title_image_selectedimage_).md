> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/init(title:image:selectedimage:)](https://developer.apple.com/documentation/uikit/uitabbaritem/init(title:image:selectedimage:))

# init(title:image:selectedImage:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item that toggles the image it displays when its selected state changes.

## Declaration

```swift
convenience init(title: String?, image: UIImage?, selectedImage: UIImage?)
```

## Parameters

- `title`: The item’s title.
- `image`: The item’s source image.
- `selectedImage`: The source image the item uses when the user selects it.

<a id="Discussion"></a>

## Discussion

Use `nil` for `title` or `image` if you don’t want to display that element.

If you don’t provide `selectedImage`, the item uses `image` for both selection states. The item creates the images it displays from the alpha values in the source images. To prevent system tinting, use images with the [UIImage.RenderingMode.alwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode. The item clips any image that’s larger than its bounds.

## See Also

### Creating a tab bar item

- [init(tabBarSystemItem:tag:)](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [init(title:image:tag:)](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init()](init%28%29.md): Creates a tab bar item with a default configuration.
- [init(coder:)](init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarItem.SystemItem](systemitem.md): Constants that represent the system tab bar items.

# initWithTitle:image:selectedImage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item that toggles the image it displays when its selected state changes.

## Declaration

```objectivec
- (instancetype) initWithTitle:(NSString *) title image:(UIImage *) image selectedImage:(UIImage *) selectedImage;
```

## Parameters

- `title`: The item’s title.
- `image`: The item’s source image.
- `selectedImage`: The source image the item uses when the user selects it.

<a id="Discussion"></a>

## Discussion

Use `nil` for `title` or `image` if you don’t want to display that element.

If you don’t provide `selectedImage`, the item uses `image` for both selection states. The item creates the images it displays from the alpha values in the source images. To prevent system tinting, use images with the [UIImageRenderingModeAlwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode. The item clips any image that’s larger than its bounds.

## See Also

### Creating a tab bar item

- [initWithTabBarSystemItem:tag:](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [initWithTitle:image:tag:](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init](init%28%29.md): Creates a tab bar item with a default configuration.
- [initWithCoder:](init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarSystemItem](systemitem.md): Constants that represent the system tab bar items.
