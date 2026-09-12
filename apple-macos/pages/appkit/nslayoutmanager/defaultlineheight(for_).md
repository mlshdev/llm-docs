> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/defaultlineheight(for:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultlineheight(for:))

# defaultLineHeight(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the default line height for a line of text that uses a specified font.

## Declaration

```swift
func defaultLineHeight(for theFont: NSFont) -> CGFloat
```

## Parameters

- `theFont`: The font for which to determine the default line height.

<a id="return-value"></a>

## Return Value

The default line height for a line of text drawn using `theFont`.

<a id="Discussion"></a>

## Discussion

The value returned may vary according to the layout manager’s typesetter behavior.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSLayoutManager.TypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultBaselineOffset(for:)](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.

# defaultLineHeightForFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the default line height for a line of text that uses a specified font.

## Declaration

```objectivec
- (CGFloat) defaultLineHeightForFont:(NSFont *) theFont;
```

## Parameters

- `theFont`: The font for which to determine the default line height.

<a id="return-value"></a>

## Return Value

The default line height for a line of text drawn using `theFont`.

<a id="Discussion"></a>

## Discussion

The value returned may vary according to the layout manager’s typesetter behavior.

## See Also

### Managing the typesetter

- [typesetter](typesetter.md): The current typesetter.
- [typesetterBehavior](typesetterbehavior-swift.property.md): The default typesetter behavior.
- [NSTypesetterBehavior](typesetterbehavior-swift.enum.md): Constants that determine the layout manager’s behavior during layout.
- [defaultBaselineOffsetForFont:](defaultbaselineoffset%28for_%29.md): Returns the default baseline offset that the layout manager’s typesetter uses for the specified font.
