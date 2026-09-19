> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsatstypesetter/texttab(forglyphlocation:writingdirection:maxlocation:)

# textTab(forGlyphLocation:writingDirection:maxLocation:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text tab closest to the specified glyph location and not beyond a maximum position.

## Declaration

```swift
func textTab(forGlyphLocation glyphLocation: CGFloat, writingDirection direction: NSWritingDirection, maxLocation: CGFloat) -> NSTextTab?
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method whenever it finds a tab character. To determine the width to advance the next glyph, the typesetter examines the [NSParagraphStyle](../nsparagraphstyle.md) tab array and the default tab interval.

# textTabForGlyphLocation:writingDirection:maxLocation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the text tab closest to the specified glyph location and not beyond a maximum position.

## Declaration

```objectivec
- (NSTextTab *) textTabForGlyphLocation:(CGFloat) glyphLocation writingDirection:(NSWritingDirection) direction maxLocation:(CGFloat) maxLocation;
```

<a id="Discussion"></a>

## Discussion

The typesetter calls this method whenever it finds a tab character. To determine the width to advance the next glyph, the typesetter examines the [NSParagraphStyle](../nsparagraphstyle.md) tab array and the default tab interval.
