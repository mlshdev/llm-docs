> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitemcell/calcsize()](https://developer.apple.com/documentation/appkit/nsmenuitemcell/calcsize())

# calcSize() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the minimum required width and height of the receiver’s menu item.

## Declaration

```swift
func calcSize()
```

<a id="Discussion"></a>

## Discussion

The calculated values are cached for future use. This method also calculates the sizes of individual components of the cell’s menu item and caches those values.

This method is invoked automatically when necessary. You should not need to invoke it directly.

## See Also

### Calculating the Size of a Menu Item

- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.

# calcSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Calculates the minimum required width and height of the receiver’s menu item.

## Declaration

```objectivec
- (void) calcSize;
```

<a id="Discussion"></a>

## Discussion

The calculated values are cached for future use. This method also calculates the sizes of individual components of the cell’s menu item and caches those values.

This method is invoked automatically when necessary. You should not need to invoke it directly.

## See Also

### Calculating the Size of a Menu Item

- [needsSizing](needssizing.md): A Boolean value indicating whether the size of the menu needs to be calculated.
- [imageWidth](imagewidth.md): The width of the image associated with the menu item.
- [titleWidth](titlewidth.md): The width of the menu item’s text, measured in points.
- [keyEquivalentWidth](keyequivalentwidth.md): The width of the menu item’s key equivalent string.
- [stateImageWidth](stateimagewidth.md): The width of the image used to indicate the state of the menu item.
