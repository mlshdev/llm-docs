> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/keyequivalentwidth](https://developer.apple.com/documentation/appkit/nsmenuitemcell/keyequivalentwidth)

# keyEquivalentWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the menu item’s key equivalent string.

## Declaration

```swift
var keyEquivalentWidth: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

To set the menu item’s key equivalent, use the [keyEquivalent](../nsmenuitem/keyequivalent.md) property of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize()](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.

# keyEquivalentWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The width of the menu item’s key equivalent string.

## Declaration

```objectivec
@property (readonly) CGFloat keyEquivalentWidth;
```

<a id="Discussion"></a>

## Discussion

To set the menu item’s key equivalent, use the [keyEquivalent](../nsmenuitem/keyequivalent.md) property of [NSMenuItem](../nsmenuitem.md).

## See Also

### Calculating the Size of a Menu Item

- [calcSize](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.
