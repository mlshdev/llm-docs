> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatewithquickdrawinstance(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatewithquickdrawinstance(_:_:_:_:))

# CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Returns a font reference for the given QuickDraw instance.

> Quickdraw font references are deprecated

## Declaration

```swift
func CTFontCreateWithQuickdrawInstance(_ name: ConstStr255Param?, _ identifier: Int16, _ style: UInt8, _ size: CGFloat) -> CTFont
```

## Parameters

- `name`: The QuickDraw font name. If zero length, `identifier` must be specified.
- `identifier`: The QuickDraw font identifier. Can be `0`, but if so, `name` must be specified.
- `style`: The QuickDraw font style.
- `size`: The point size for the font reference. If `0.0` is specified, the default size of 12.0 is used.

<a id="return-value"></a>

## Return Value

The best font instance matching the QuickDraw instance information.

<a id="Discussion"></a>

## Discussion

This function is provided for compatibility support between Core Text and clients needing to support QuickDraw-style font references. QuickDraw is a deprecated technology in macOS 10.4 and later.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont(\_:\_:)](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont(\_:\_:\_:\_:)](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont(\_:\_:)](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont(\_:\_:\_:\_:)](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.

# CTFontCreateWithQuickdrawInstance (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Returns a font reference for the given QuickDraw instance.

> Quickdraw font references are deprecated

## Declaration

```objectivec
extern CTFontRefCTFontCreateWithQuickdrawInstance(ConstStr255Param name, int16_t identifier, uint8_t style, CGFloat size);
```

## Parameters

- `name`: The QuickDraw font name. If zero length, `identifier` must be specified.
- `identifier`: The QuickDraw font identifier. Can be `0`, but if so, `name` must be specified.
- `style`: The QuickDraw font style.
- `size`: The point size for the font reference. If `0.0` is specified, the default size of 12.0 is used.

<a id="return-value"></a>

## Return Value

The best font instance matching the QuickDraw instance information.

<a id="Discussion"></a>

## Discussion

This function is provided for compatibility support between Core Text and clients needing to support QuickDraw-style font references. QuickDraw is a deprecated technology in macOS 10.4 and later.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
