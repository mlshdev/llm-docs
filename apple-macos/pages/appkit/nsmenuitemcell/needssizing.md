> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/needssizing](https://developer.apple.com/documentation/appkit/nsmenuitemcell/needssizing)

# needsSizing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the size of the menu needs to be calculated.

## Declaration

```swift
var needsSizing: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the next attempt to obtain size information about the menu cause the [calcSize()](calcsize%28%29.md) method to be called. When the value of the property is [false](https://developer.apple.com/documentation/swift/false), the size information is obtained from the currently cached values.

Subclasses that drastically change the way a menu item is drawn can change the value of this property to update the menu item information. Other parts of your application should not need to change this property directly. The cell checks this value of this property as necessary when the content of its menu item changes.

## See Also

### Calculating the Size of a Menu Item

- [calcSize()](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.

# needsSizing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the size of the menu needs to be calculated.

## Declaration

```objectivec
@property BOOL needsSizing;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the next attempt to obtain size information about the menu cause the [calcSize](calcsize%28%29.md) method to be called. When the value of the property is [false](https://developer.apple.com/documentation/swift/false), the size information is obtained from the currently cached values.

Subclasses that drastically change the way a menu item is drawn can change the value of this property to update the menu item information. Other parts of your application should not need to change this property directly. The cell checks this value of this property as necessary when the content of its menu item changes.

## See Also

### Calculating the Size of a Menu Item

- [calcSize](calcsize%28%29.md): Calculates the minimum required width and height of the receiver’s menu item.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.
