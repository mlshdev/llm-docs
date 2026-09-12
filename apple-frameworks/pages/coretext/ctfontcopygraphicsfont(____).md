> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcopygraphicsfont(_:_:)](https://developer.apple.com/documentation/coretext/ctfontcopygraphicsfont(_:_:))

# CTFontCopyGraphicsFont(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Core Graphics font reference and attributes.

## Declaration

```swift
func CTFontCopyGraphicsFont(_ font: CTFont, _ attributes: UnsafeMutablePointer<Unmanaged<CTFontDescriptor>?>?) -> CGFont
```

## Parameters

- `font`: The font reference.
- `attributes`: On output, points to a font descriptor containing additional attributes from the font. Can be `NULL`. Must be released by the caller.

<a id="return-value"></a>

## Return Value

A [CGFont](../coregraphics/cgfont.md) object for the given font reference.

## See Also

### Converting Fonts

- [CTFontCreateWithGraphicsFont(\_:\_:\_:\_:)](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont(\_:\_:)](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont(\_:\_:\_:\_:)](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:)](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

# CTFontCopyGraphicsFont (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Core Graphics font reference and attributes.

## Declaration

```objectivec
extern CGFontRefCTFontCopyGraphicsFont(CTFontRef font, CTFontDescriptorRef*attributes);
```

## Parameters

- `font`: The font reference.
- `attributes`: On output, points to a font descriptor containing additional attributes from the font. Can be `NULL`. Must be released by the caller.

<a id="return-value"></a>

## Return Value

A [CGFontRef](../coregraphics/cgfont.md) object for the given font reference.

## See Also

### Converting Fonts

- [CTFontCreateWithGraphicsFont](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.
