> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenu/minimumwidth](https://developer.apple.com/documentation/appkit/nsmenu/minimumwidth)

# minimumWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The minimum width of the menu in screen coordinates.

## Declaration

```swift
var minimumWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `CGFloat`, indicating the minimum width of the menu in screen coordinates.

The menu will not draw smaller than its minimum width, but may draw larger if it needs more space. The default value for this property is `0`.

## See Also

### Configuring Menu Size

- [size](size.md): The size of the menu in screen coordinates

# minimumWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The minimum width of the menu in screen coordinates.

## Declaration

```objectivec
@property CGFloat minimumWidth;
```

<a id="Discussion"></a>

## Discussion

This property contains a value of type `CGFloat`, indicating the minimum width of the menu in screen coordinates.

The menu will not draw smaller than its minimum width, but may draw larger if it needs more space. The default value for this property is `0`.

## See Also

### Configuring Menu Size

- [size](size.md): The size of the menu in screen coordinates
- [sizeToFit](sizetofit.md): Deprecated. Resizes the menu to exactly fit its items.
