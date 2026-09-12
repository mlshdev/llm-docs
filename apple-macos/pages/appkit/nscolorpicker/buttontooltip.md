> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/buttontooltip](https://developer.apple.com/documentation/appkit/nscolorpicker/buttontooltip)

# buttonToolTip (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tool tip that is shown when the mouse cursor is over the color picker’s button image.

## Declaration

```swift
var buttonToolTip: String { get }
```

<a id="Discussion"></a>

## Discussion

Override this property’s getter method to provide a custom tool tip. The default implementation returns the name of the receiver’s class. If you want the color picker to have no tool tip, return an empty string.

## See Also

### Customizing the Color Picker

- [minContentSize](mincontentsize.md): The minimum content size.

# buttonToolTip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The tool tip that is shown when the mouse cursor is over the color picker’s button image.

## Declaration

```objectivec
@property (copy, readonly) NSString * buttonToolTip;
```

<a id="Discussion"></a>

## Discussion

Override this property’s getter method to provide a custom tool tip. The default implementation returns the name of the receiver’s class. If you want the color picker to have no tool tip, return an empty string.

## See Also

### Customizing the Color Picker

- [minContentSize](mincontentsize.md): The minimum content size.
