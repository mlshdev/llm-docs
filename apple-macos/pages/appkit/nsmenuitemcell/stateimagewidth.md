> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/stateimagewidth](https://developer.apple.com/documentation/appkit/nsmenuitemcell/stateimagewidth)

# stateImageWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image used to indicate the state of the menu item.

## Declaration

```swift
var stateImageWidth: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If the menu item has multiple images associated with it (to indicate any of the available states: on, off, or mixed), this property contains the width of the largest image. You can set the state images for a menu item using the setOnStateImage:, setOffStateImage:, and setMixedStateImage: methods of [NSMenuItem](../nsmenuitem.md).

To change the state of the cell’s menu item, use the setState: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize()](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.

# stateImageWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image used to indicate the state of the menu item.

## Declaration

```objectivec
@property (readonly) CGFloat stateImageWidth;
```

<a id="Discussion"></a>

## Discussion

If the menu item has multiple images associated with it (to indicate any of the available states: on, off, or mixed), this property contains the width of the largest image. You can set the state images for a menu item using the setOnStateImage:, setOffStateImage:, and setMixedStateImage: methods of [NSMenuItem](../nsmenuitem.md).

To change the state of the cell’s menu item, use the setState: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
