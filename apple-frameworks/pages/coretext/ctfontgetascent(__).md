> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetascent(_:)](https://developer.apple.com/documentation/coretext/ctfontgetascent(_:))

# CTFontGetAscent(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the scaled font-ascent metric of the given font.

## Declaration

```swift
func CTFontGetAscent(_ font: CTFont) -> CGFloat
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The font-ascent metric scaled according to the point size and matrix of the font reference.

## See Also

### Getting Font Metrics

- [CTFontGetDescent(\_:)](ctfontgetdescent%28__%29.md): Returns the scaled font-descent metric of the given font.
- [CTFontGetLeading(\_:)](ctfontgetleading%28__%29.md): Returns the scaled font-leading metric of the given font.
- [CTFontGetUnitsPerEm(\_:)](ctfontgetunitsperem%28__%29.md): Returns the units-per-em metric of the given font.
- [CTFontGetGlyphCount(\_:)](ctfontgetglyphcount%28__%29.md): Returns the number of glyphs of the given font.
- [CTFontGetBoundingBox(\_:)](ctfontgetboundingbox%28__%29.md): Returns the scaled bounding box of the given font.
- [CTFontGetUnderlinePosition(\_:)](ctfontgetunderlineposition%28__%29.md): Returns the scaled underline position of the given font.
- [CTFontGetUnderlineThickness(\_:)](ctfontgetunderlinethickness%28__%29.md): Returns the scaled underline-thickness metric of the given font.
- [CTFontGetSlantAngle(\_:)](ctfontgetslantangle%28__%29.md): Returns the slant angle of the given font.
- [CTFontGetCapHeight(\_:)](ctfontgetcapheight%28__%29.md): Returns the cap-height metric of the given font.
- [CTFontGetXHeight(\_:)](ctfontgetxheight%28__%29.md): Returns the x-height metric of the given font.

# CTFontGetAscent (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the scaled font-ascent metric of the given font.

## Declaration

```objectivec
extern CGFloat CTFontGetAscent(CTFontRef font);
```

## Parameters

- `font`: The font reference.

<a id="return-value"></a>

## Return Value

The font-ascent metric scaled according to the point size and matrix of the font reference.

## See Also

### Getting Font Metrics

- [CTFontGetDescent](ctfontgetdescent%28__%29.md): Returns the scaled font-descent metric of the given font.
- [CTFontGetLeading](ctfontgetleading%28__%29.md): Returns the scaled font-leading metric of the given font.
- [CTFontGetUnitsPerEm](ctfontgetunitsperem%28__%29.md): Returns the units-per-em metric of the given font.
- [CTFontGetGlyphCount](ctfontgetglyphcount%28__%29.md): Returns the number of glyphs of the given font.
- [CTFontGetBoundingBox](ctfontgetboundingbox%28__%29.md): Returns the scaled bounding box of the given font.
- [CTFontGetUnderlinePosition](ctfontgetunderlineposition%28__%29.md): Returns the scaled underline position of the given font.
- [CTFontGetUnderlineThickness](ctfontgetunderlinethickness%28__%29.md): Returns the scaled underline-thickness metric of the given font.
- [CTFontGetSlantAngle](ctfontgetslantangle%28__%29.md): Returns the slant angle of the given font.
- [CTFontGetCapHeight](ctfontgetcapheight%28__%29.md): Returns the cap-height metric of the given font.
- [CTFontGetXHeight](ctfontgetxheight%28__%29.md): Returns the x-height metric of the given font.
