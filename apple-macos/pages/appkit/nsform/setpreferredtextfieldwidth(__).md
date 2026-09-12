> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsform/setpreferredtextfieldwidth(_:)](https://developer.apple.com/documentation/appkit/nsform/setpreferredtextfieldwidth(_:))

# setPreferredTextFieldWidth(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Sets the preferred text field width used by Auto Layout.

## Declaration

```swift
func setPreferredTextFieldWidth(_ preferredWidth: CGFloat)
```

## Parameters

- `preferredWidth`: The preferred width.

<a id="Discussion"></a>

## Discussion

The preferred width is reflected in the cell’s [cellSize](../nscell/cellsize.md), which will be large enough to accommodate the title, bezel, and a text field of width preferredTextWidth. It is also reflected in the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the form. That is, under Auto Layout, the form will try to size itself so that the text field cell is the given width, according to the usual content size constraint priorities.

If the width is negative, the [cellSize](../nscell/cellsize.md) matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

The preferred width is reflected in the cell’s cellSize, which will be large enough to accommodate the title, bezel, and a text field of width [preferredTextFieldWidth()](preferredtextfieldwidth%28%29.md).

This method can aid migration to Auto Layout, and is sufficient for simple cases. However, for new apps, use [NSTextField](../nstextfield.md) objects directly instead of `NSForm`.

The default is -1.

## See Also

### Auto Layout Sizing

- [preferredTextFieldWidth()](preferredtextfieldwidth%28%29.md): Deprecated. The preferred width of the form’s cells when using Auto Layout.

# setPreferredTextFieldWidth: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

Sets the preferred text field width used by Auto Layout.

## Declaration

```objectivec
- (void) setPreferredTextFieldWidth:(CGFloat) preferredWidth;
```

## Parameters

- `preferredWidth`: The preferred width.

<a id="Discussion"></a>

## Discussion

The preferred width is reflected in the cell’s [cellSize](../nscell/cellsize.md), which will be large enough to accommodate the title, bezel, and a text field of width preferredTextWidth. It is also reflected in the [intrinsicContentSize](../nsview/intrinsiccontentsize.md) of the form. That is, under Auto Layout, the form will try to size itself so that the text field cell is the given width, according to the usual content size constraint priorities.

If the width is negative, the [cellSize](../nscell/cellsize.md) matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

The preferred width is reflected in the cell’s cellSize, which will be large enough to accommodate the title, bezel, and a text field of width [preferredTextFieldWidth](preferredtextfieldwidth%28%29.md).

This method can aid migration to Auto Layout, and is sufficient for simple cases. However, for new apps, use [NSTextField](../nstextfield.md) objects directly instead of `NSForm`.

The default is -1.

## See Also

### Auto Layout Sizing

- [preferredTextFieldWidth](preferredtextfieldwidth%28%29.md): Deprecated. The preferred width of the form’s cells when using Auto Layout.
