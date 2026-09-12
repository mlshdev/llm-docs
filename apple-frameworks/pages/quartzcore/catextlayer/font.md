> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer/font](https://developer.apple.com/documentation/quartzcore/catextlayer/font)

# font (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The font used to render the receiver’s text.

## Declaration

```swift
var font: CFTypeRef? { get set }
```

<a id="Discussion"></a>

## Discussion

May be either a [CTFont](../../coretext/ctfont.md), a [CGFont](../../coregraphics/cgfont.md), an instance of `NSFont` (macOS only), or a string naming the font. In iOS, you cannot assign a [UIFont](../../uikit/uifont.md) object to this property. Defaults to Helvetica.

The `font` property is only used when the [string](string.md) property is not an `NSAttributedString`.

> **Note**

>  If the font property is a `CTFontRef`, a `CGFontRef`, or an instance of `NSFont`, the font size of the property is ignored.

## See Also

### Text Visual Properties

- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](foregroundcolor.md): The color used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.

# font (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The font used to render the receiver’s text.

## Declaration

```objectivec
@property (nullable) CFTypeRef font;
```

<a id="Discussion"></a>

## Discussion

May be either a [CTFontRef](../../coretext/ctfont.md), a [CGFontRef](../../coregraphics/cgfont.md), an instance of `NSFont` (macOS only), or a string naming the font. In iOS, you cannot assign a [UIFont](../../uikit/uifont.md) object to this property. Defaults to Helvetica.

The `font` property is only used when the [string](string.md) property is not an `NSAttributedString`.

> **Note**

>  If the font property is a `CTFontRef`, a `CGFontRef`, or an instance of `NSFont`, the font size of the property is ignored.

## See Also

### Text Visual Properties

- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](foregroundcolor.md): The color used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.
