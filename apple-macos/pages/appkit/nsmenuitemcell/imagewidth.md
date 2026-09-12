> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/imagewidth](https://developer.apple.com/documentation/appkit/nsmenuitemcell/imagewidth)

# imageWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image associated with the menu item.

## Declaration

```swift
var imageWidth: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The width of the image is measured in points. You can associate an image with a menu item using the setImage: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize()](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.

# imageWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the image associated with the menu item.

## Declaration

```objectivec
@property (readonly) CGFloat imageWidth;
```

<a id="Discussion"></a>

## Discussion

The width of the image is measured in points. You can associate an image with a menu item using the setImage: method of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.
