> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsform/preferredtextfieldwidth()

# preferredTextFieldWidth() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

The preferred width of the form’s cells when using Auto Layout.

## Declaration

```swift
func preferredTextFieldWidth() -> CGFloat
```

<a id="return-value"></a>

## Return Value

The field’s width.

<a id="Discussion"></a>

## Discussion

If the width is negative, the [cellSize](../nscell/cellsize.md) matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

The default is -1.

## See Also

### Auto Layout Sizing

- [setPreferredTextFieldWidth(\_:)](setpreferredtextfieldwidth%28__%29.md): Deprecated. Sets the preferred text field width used by Auto Layout.

# preferredTextFieldWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.10)

The preferred width of the form’s cells when using Auto Layout.

## Declaration

```objectivec
- (CGFloat) preferredTextFieldWidth;
```

<a id="return-value"></a>

## Return Value

The field’s width.

<a id="Discussion"></a>

## Discussion

If the width is negative, the [cellSize](../nscell/cellsize.md) matches the historic behavior, which is that it is large enough to accommodate the title, bezel, and the current text.

The default is -1.

## See Also

### Auto Layout Sizing

- [setPreferredTextFieldWidth:](setpreferredtextfieldwidth%28__%29.md): Deprecated. Sets the preferred text field width used by Auto Layout.
