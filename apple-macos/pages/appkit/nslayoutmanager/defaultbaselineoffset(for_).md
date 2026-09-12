> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/defaultbaselineoffset(for:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultbaselineoffset(for:))

# defaultBaselineOffset(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

## Declaration

```swift
func defaultBaselineOffset(for theFont: NSFont) -> CGFloat
```

## Parameters

- `theFont`: The font for which to return the default baseline offset.

<a id="return-value"></a>

## Return Value

The default baseline offset for a line of text drawn using `theFont`.

<a id="Discussion"></a>

## Discussion

The value returned may vary according to the layout manager’s typesetter behavior.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSLayoutManager.TypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeight(for:)](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.

# defaultBaselineOffsetForFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

## Declaration

```objectivec
- (CGFloat) defaultBaselineOffsetForFont:(NSFont *) theFont;
```

## Parameters

- `theFont`: The font for which to return the default baseline offset.

<a id="return-value"></a>

## Return Value

The default baseline offset for a line of text drawn using `theFont`.

<a id="Discussion"></a>

## Discussion

The value returned may vary according to the layout manager’s typesetter behavior.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSTypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultLineHeightForFont:](defaultlineheight%28for_%29.md): Returns the default line height for a line of text that uses a specified font.
