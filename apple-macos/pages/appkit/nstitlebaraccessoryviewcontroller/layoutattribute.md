> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/layoutattribute](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/layoutattribute)

# layoutAttribute (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The location of the accessory view, in relation to the window’s title bar.

## Declaration

```swift
var layoutAttribute: NSLayoutConstraint.Attribute { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSLayoutConstraint.Attribute.bottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom), which means that the accessory view should display below the title bar. You can also set this property to [NSLayoutConstraint.Attribute.right](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) or (in apps linked on macOS 10.11 or later) [NSLayoutConstraint.Attribute.left](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/left). All other values are invalid and will cause an assertion to be raised.

> **Note**

>  In an app linked on macOS 10.11 or later, setting [layoutAttribute](layoutattribute.md) to [NSLayoutConstraint.Attribute.right](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) does not right indent toolbar items unless the window’s [titleVisibility](../nswindow/titlevisibility-swift.property.md) property is equal to [NSWindow.TitleVisibility.hidden](../nswindow/titlevisibility-swift.enum/hidden.md).

## See Also

### Configuring a title bar accessory view controller

- [fullScreenMinHeight](fullscreenminheight.md): The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.

# layoutAttribute (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The location of the accessory view, in relation to the window’s title bar.

## Declaration

```objectivec
@property NSLayoutAttribute layoutAttribute;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [NSLayoutAttributeBottom](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/bottom), which means that the accessory view should display below the title bar. You can also set this property to [NSLayoutAttributeRight](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) or (in apps linked on macOS 10.11 or later) [NSLayoutAttributeLeft](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/left). All other values are invalid and will cause an assertion to be raised.

> **Note**

>  In an app linked on macOS 10.11 or later, setting [layoutAttribute](layoutattribute.md) to [NSLayoutAttributeRight](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/right) does not right indent toolbar items unless the window’s [titleVisibility](../nswindow/titlevisibility-swift.property.md) property is equal to [NSWindowTitleHidden](../nswindow/titlevisibility-swift.enum/hidden.md).

## See Also

### Configuring a title bar accessory view controller

- [fullScreenMinHeight](fullscreenminheight.md): The visual minimum height of an accessory view that displays below the title bar when the window is in full screen mode.
