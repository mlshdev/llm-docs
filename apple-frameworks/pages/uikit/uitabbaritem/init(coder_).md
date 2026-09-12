> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem/init(coder:)](https://developer.apple.com/documentation/uikit/uitabbaritem/init(coder:))

# init(coder:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item from a serialized instance.

## Declaration

```swift
init?(coder: NSCoder)
```

## Parameters

- `coder`: The coder to use when deserializing the item.

## See Also

### Creating a tab bar item

- [init(tabBarSystemItem:tag:)](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [init(title:image:tag:)](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init(title:image:selectedImage:)](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init()](init%28%29.md): Creates a tab bar item with a default configuration.
- [UITabBarItem.SystemItem](systemitem.md): Constants that represent the system tab bar items.

# initWithCoder: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Creates a tab bar item from a serialized instance.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## Parameters

- `coder`: The coder to use when deserializing the item.

## See Also

### Creating a tab bar item

- [initWithTabBarSystemItem:tag:](init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [initWithTitle:image:tag:](init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [initWithTitle:image:selectedImage:](init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init](init%28%29.md): Creates a tab bar item with a default configuration.
- [UITabBarSystemItem](systemitem.md): Constants that represent the system tab bar items.
