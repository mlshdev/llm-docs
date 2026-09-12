> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu/preferredelementsize](https://developer.apple.com/documentation/uikit/uimenu/preferredelementsize)

# preferredElementSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The size of the menu’s child elements.

## Declaration

```swift
var preferredElementSize: UIMenu.ElementSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property allows you to choose between different layouts in the context menu:

- The [UIMenu.ElementSize.small](elementsize/small.md) size gives the menu a more compact, side-by-side appearance, allowing you to fit more actions in a single row.
- The [UIMenu.ElementSize.medium](elementsize/medium.md) size gives the menu the side-by-side appearance, but shows additional detail for each action. The text-editing menu uses this element size to display the standard edit menu.
- The [UIMenu.ElementSize.large](elementsize/large.md) size gives the menu its default, full-width appearance.

![Screenshots of menus that use the small, medium, and large element sizes. The menu using the small size contains four side-by-side icons in the top row, followed by full-size elements. The menu using the medium size contains three side-by-side icons with labels in the top row, followed by full-size elements. The menu using the large size only contains full-size elements.](https://developer.apple.com/images/com.apple.uikit/media-4047986@2x.png)

If you specify the [UIMenu.ElementSize.small](elementsize/small.md) or [UIMenu.ElementSize.medium](elementsize/medium.md) sizes, the menu displays any items beyond the first three (for medium) or four (for small) as full-size elements.

This property doesn’t have an effect if you build your app with Mac Catalyst.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## See Also

### Specifying size of menu elements

- [UIMenu.ElementSize](elementsize.md): Constants that determine the size of an element in a menu.

# preferredElementSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

The size of the menu’s child elements.

## Declaration

```objectivec
@property (nonatomic) UIMenuElementSize preferredElementSize;
```

<a id="Discussion"></a>

## Discussion

This property allows you to choose between different layouts in the context menu:

- The [UIMenuElementSizeSmall](elementsize/small.md) size gives the menu a more compact, side-by-side appearance, allowing you to fit more actions in a single row.
- The [UIMenuElementSizeMedium](elementsize/medium.md) size gives the menu the side-by-side appearance, but shows additional detail for each action. The text-editing menu uses this element size to display the standard edit menu.
- The [UIMenuElementSizeLarge](elementsize/large.md) size gives the menu its default, full-width appearance.

![Screenshots of menus that use the small, medium, and large element sizes. The menu using the small size contains four side-by-side icons in the top row, followed by full-size elements. The menu using the medium size contains three side-by-side icons with labels in the top row, followed by full-size elements. The menu using the large size only contains full-size elements.](https://developer.apple.com/images/com.apple.uikit/media-4047986@2x.png)

If you specify the [UIMenuElementSizeSmall](elementsize/small.md) or [UIMenuElementSizeMedium](elementsize/medium.md) sizes, the menu displays any items beyond the first three (for medium) or four (for small) as full-size elements.

This property doesn’t have an effect if you build your app with Mac Catalyst.

> **Related Sessions from WWDC22**

>  Session 10071: [Adopt desktop-class editing interactions](https://developer.apple.com/wwdc22/10071)

## See Also

### Specifying size of menu elements

- [UIMenuElementSize](elementsize.md): Constants that determine the size of an element in a menu.
