> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/preferredtextfieldwidth](https://developer.apple.com/documentation/appkit/nsformcell/preferredtextfieldwidth)

# preferredTextFieldWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The preferred text field width.

## Declaration

```swift
var preferredTextFieldWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The preferred width is reflected in the cell’s `cellSize`, which will be large enough to accommodate the title, bezel, and a text field of width `preferredTextWidth`. It is also reflected in the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the [NSForm](../nsform.md) object. That is, under Auto Layout, the form will try to size itself so that the text field cell is the given width, according to the usual content size constraint priorities.

If the width is negative, the cel size matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

This property can aid migration to Auto Layout, and is sufficient for simple cases. However, for new apps, it’s recommended that you use an [NSTextField](../nstextfield.md) instance directly instead of a form.

The default value of this property is `-1`.

# preferredTextFieldWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The preferred text field width.

## Declaration

```objectivec
@property CGFloat preferredTextFieldWidth;
```

<a id="Discussion"></a>

## Discussion

The preferred width is reflected in the cell’s `cellSize`, which will be large enough to accommodate the title, bezel, and a text field of width `preferredTextWidth`. It is also reflected in the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the [NSForm](../nsform.md) object. That is, under Auto Layout, the form will try to size itself so that the text field cell is the given width, according to the usual content size constraint priorities.

If the width is negative, the cel size matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

This property can aid migration to Auto Layout, and is sufficient for simple cases. However, for new apps, it’s recommended that you use an [NSTextField](../nstextfield.md) instance directly instead of a form.

The default value of this property is `-1`.
