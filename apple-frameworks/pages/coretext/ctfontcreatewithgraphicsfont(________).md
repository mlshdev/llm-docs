> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontcreatewithgraphicsfont(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontcreatewithgraphicsfont(_:_:_:_:))

# CTFontCreateWithGraphicsFont(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new font reference from an existing Core Graphics font reference.

## Declaration

```swift
func CTFontCreateWithGraphicsFont(_ graphicsFont: CGFont, _ size: CGFloat, _ matrix: UnsafePointer<CGAffineTransform>?, _ attributes: CTFontDescriptor?) -> CTFont
```

## Parameters

- `graphicsFont`: A valid Core Graphics font reference.
- `size`: The point size for the font reference. If `0.0` is specified the default font size of 12.0 is used.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL`, the identity matrix is used. Optional.
- `attributes`: Additional attributes that should be matched. Optional.

<a id="return-value"></a>

## Return Value

A new font reference for an existing [CGFont](../coregraphics/cgfont.md) object with the specified size, matrix, and additional attributes.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont(\_:\_:)](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontGetPlatformFont(\_:\_:)](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont(\_:\_:\_:\_:)](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance(\_:\_:\_:\_:)](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.

# CTFontCreateWithGraphicsFont (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new font reference from an existing Core Graphics font reference.

## Declaration

```objectivec
extern CTFontRefCTFontCreateWithGraphicsFont(CGFontRef graphicsFont, CGFloat size, const CGAffineTransform *matrix, CTFontDescriptorRef attributes);
```

## Parameters

- `graphicsFont`: A valid Core Graphics font reference.
- `size`: The point size for the font reference. If `0.0` is specified the default font size of 12.0 is used.
- `matrix`: The transformation matrix for the font.  In most cases, set this parameter to be `NULL`.  If `NULL`, the identity matrix is used. Optional.
- `attributes`: Additional attributes that should be matched. Optional.

<a id="return-value"></a>

## Return Value

A new font reference for an existing [CGFontRef](../coregraphics/cgfont.md) object with the specified size, matrix, and additional attributes.

## See Also

### Converting Fonts

- [CTFontCopyGraphicsFont](ctfontcopygraphicsfont%28____%29.md): Returns a Core Graphics font reference and attributes.
- [CTFontGetPlatformFont](ctfontgetplatformfont%28____%29.md): Deprecated. Returns an ATS font reference and attributes.
- [CTFontCreateWithPlatformFont](ctfontcreatewithplatformfont%28________%29.md): Deprecated. Creates a new font reference from an ATS font reference.
- [CTFontCreateWithQuickdrawInstance](ctfontcreatewithquickdrawinstance%28________%29.md): Deprecated. Returns a font reference for the given QuickDraw instance.
