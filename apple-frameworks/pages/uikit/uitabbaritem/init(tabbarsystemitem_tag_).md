> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/init(tabbarsystemitem:tag:)](https://developer.apple.com/documentation/uikit/uitabbaritem/init(tabbarsystemitem:tag:))

# init(tabBarSystemItem:tag:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item using a system-provided configuration.

## Declaration

```swift
convenience init(tabBarSystemItem systemItem: UITabBarItem.SystemItem, tag: Int)
```

## Parameters

- `systemItem`: The preferred system item. For possible values, see [UITabBarItem.SystemItem](systemitem.md).
- `tag`: An integer you use to identify the object.

<a id="Discussion"></a>

## Discussion

You can’t change the [title](../uibaritem/title.md) and [image](../uibaritem/image.md) properties of an item this method creates.

## See Also

### Creating a tab bar item

- [init(title:image:tag:)](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init(title:image:selectedImage:)](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init()](init%28%29.md): Creates a tab bar item with a default configuration.
- [init(coder:)](init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarItem.SystemItem](systemitem.md): Constants that represent the system tab bar items.

# initWithTabBarSystemItem:tag: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item using a system-provided configuration.

## Declaration

```objectivec
- (instancetype) initWithTabBarSystemItem:(UITabBarSystemItem) systemItem tag:(NSInteger) tag;
```

## Parameters

- `systemItem`: The preferred system item. For possible values, see [UITabBarSystemItem](systemitem.md).
- `tag`: An integer you use to identify the object.

<a id="Discussion"></a>

## Discussion

You can’t change the [title](../uibaritem/title.md) and [image](../uibaritem/image.md) properties of an item this method creates.

## See Also

### Creating a tab bar item

- [initWithTitle:image:tag:](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [initWithTitle:image:selectedImage:](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init](init%28%29.md): Creates a tab bar item with a default configuration.
- [initWithCoder:](init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarSystemItem](systemitem.md): Constants that represent the system tab bar items.
