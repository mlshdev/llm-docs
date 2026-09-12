> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/mincontentsize](https://developer.apple.com/documentation/appkit/nscolorpicker/mincontentsize)

# minContentSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum content size.

## Declaration

```swift
var minContentSize: NSSize { get }
```

<a id="Discussion"></a>

## Discussion

The containing [NSColorPanel](../nscolorpanel.md) object does not allow the color picker to be made smaller than this size.

Override this property’s getter method to return a minimum size for the color picker’s content area. The default implementation obtains the minimum content size from the view-autoresizing behavior specified for the color picker. You should not have to override this method if you properly set up the color picker’s auto-sizing attributes in Interface Builder.

## See Also

### Customizing the Color Picker

- [buttonToolTip](buttontooltip.md): The tool tip that is shown when the mouse cursor is over the color picker’s button image.

# minContentSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The minimum content size.

## Declaration

```objectivec
@property (readonly) NSSize minContentSize;
```

<a id="Discussion"></a>

## Discussion

The containing [NSColorPanel](../nscolorpanel.md) object does not allow the color picker to be made smaller than this size.

Override this property’s getter method to return a minimum size for the color picker’s content area. The default implementation obtains the minimum content size from the view-autoresizing behavior specified for the color picker. You should not have to override this method if you properly set up the color picker’s auto-sizing attributes in Interface Builder.

## See Also

### Customizing the Color Picker

- [buttonToolTip](buttontooltip.md): The tool tip that is shown when the mouse cursor is over the color picker’s button image.
