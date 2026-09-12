> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetplatformfont(_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetplatformfont(_:_:))

# CTFontGetPlatformFont(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Returns an ATS font reference and attributes.

> ATS is deprecated

## Declaration

```swift
func CTFontGetPlatformFont(_ font: CTFont, _ attributes: UnsafeMutablePointer<Unmanaged<CTFontDescriptor>?>?) -> ATSFontRef
```

## Parameters

- `font`: The font reference.
- `attributes`: On output, points to a font descriptor containing additional attributes from the font. Can be `NULL`. Must be released by the caller.

<a id="return-value"></a>

## Return Value

An [ATSFontRef](atsfontref.md) object for the given font reference.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont(\_:\_:)](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont(\_:\_:\_:\_:)](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontCreateWithPlatformFont(\_:\_:\_:\_:)](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:)](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

# CTFontGetPlatformFont (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Returns an ATS font reference and attributes.

> ATS is deprecated

## Declaration

```objectivec
extern ATSFontRef CTFontGetPlatformFont(CTFontRef font, CTFontDescriptorRef*attributes);
```

## Parameters

- `font`: The font reference.
- `attributes`: On output, points to a font descriptor containing additional attributes from the font. Can be `NULL`. Must be released by the caller.

<a id="return-value"></a>

## Return Value

An [ATSFontRef](atsfontref.md) object for the given font reference.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontCreateWithPlatformFont](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.
