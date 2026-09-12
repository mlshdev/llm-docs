> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatewithplatformfont(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatewithplatformfont(_:_:_:_:))

# CTFontCreateWithPlatformFont(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Creates a new font reference from an ATS font reference.

> ATS is deprecated

## Declaration

```swift
func CTFontCreateWithPlatformFont(_ platformFont: ATSFontRef, _ size: CGFloat, _ matrix: UnsafePointer<CGAffineTransform>?, _ attributes: CTFontDescriptor?) -> CTFont?
```

## Parameters

- `platformFont`: A valid [ATSFontRef](atsfontref.md) object.
- `size`: The point size for the font reference. If `0.0` is specified the default font size of 12.0 is used.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL`, the identity matrix is used. Optional.
- `attributes`: A [CTFontDescriptor](ctfontdescriptor.md) containing additional attributes that should be matched. Optional.

<a id="return-value"></a>

## Return Value

A new font reference for an [ATSFontRef](atsfontref.md) with the specified size, matrix, and additional attributes.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont(\_:\_:)](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont(\_:\_:\_:\_:)](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont(\_:\_:)](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:)](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

# CTFontCreateWithPlatformFont (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 11.0)

Creates a new font reference from an ATS font reference.

> ATS is deprecated

## Declaration

```objectivec
extern CTFontRefCTFontCreateWithPlatformFont(ATSFontRef platformFont, CGFloat size, const CGAffineTransform *matrix, CTFontDescriptorRef attributes);
```

## Parameters

- `platformFont`: A valid [ATSFontRef](atsfontref.md) object.
- `size`: The point size for the font reference. If `0.0` is specified the default font size of 12.0 is used.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL`, the identity matrix is used. Optional.
- `attributes`: A [CTFontDescriptorRef](ctfontdescriptor.md) containing additional attributes that should be matched. Optional.

<a id="return-value"></a>

## Return Value

A new font reference for an [ATSFontRef](atsfontref.md) with the specified size, matrix, and additional attributes.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontCreateWithGraphicsFont](ctfontcreatewithgraphicsfont%28________%29.md): Creates a new font reference from an existing Core Graphics font reference.
- [CTFontGetPlatformFont](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithQuickdrawInstance](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.
