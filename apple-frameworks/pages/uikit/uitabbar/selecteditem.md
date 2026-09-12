> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbar/selecteditem](https://developer.apple.com/documentation/uikit/uitabbar/selecteditem)

# selectedItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The currently selected item on the tab bar.

## Declaration

```swift
weak var selectedItem: UITabBarItem? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to get the currently selected item. If you change the value of this property, the tab bar selects the corresponding item and updates the tab bar’s appearance accordingly. Set the property to `nil` to clear the selection.

When an item is selected, the tab bar displays the image in the tab bar item’s [selectedImage](../uitabbaritem/selectedimage.md) property. If the [selectedImageTintColor](selectedimagetintcolor.md) property is set, the tab bar also applies the color in that property to the selected image. To prevent system coloring of an item, provide images using the [UIImage.RenderingMode.alwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode.

The default value for this property is `nil`.

## See Also

### Configuring tab bar items

- [items](items.md): The items displayed by the tab bar.
- [setItems(\_:animated:)](setitems%28__animated_%29.md): Sets the items on the tab bar, optionally animating any changes into position.

# selectedItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The currently selected item on the tab bar.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UITabBarItem * selectedItem;
```

<a id="Discussion"></a>

## Discussion

Use this property to get the currently selected item. If you change the value of this property, the tab bar selects the corresponding item and updates the tab bar’s appearance accordingly. Set the property to `nil` to clear the selection.

When an item is selected, the tab bar displays the image in the tab bar item’s [selectedImage](../uitabbaritem/selectedimage.md) property. If the [selectedImageTintColor](selectedimagetintcolor.md) property is set, the tab bar also applies the color in that property to the selected image. To prevent system coloring of an item, provide images using the [UIImageRenderingModeAlwaysOriginal](../uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode.

The default value for this property is `nil`.

## See Also

### Configuring tab bar items

- [items](items.md): The items displayed by the tab bar.
- [setItems:animated:](setitems%28__animated_%29.md): Sets the items on the tab bar, optionally animating any changes into position.
