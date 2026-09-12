> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer/allowsfontsubpixelquantization](https://developer.apple.com/documentation/quartzcore/catextlayer/allowsfontsubpixelquantization)

# allowsFontSubpixelQuantization (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines whether to allow subpixel quantization for the graphics context used for text rendering.

## Declaration

```swift
var allowsFontSubpixelQuantization: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When enabled, the graphics context used for text rendering may quantize the subpixel positions of glyphs.

## See Also

### Text Visual Properties

- [font](font.md): The font used to render the receiver’s text.
- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](foregroundcolor.md): The color used to render the receiver’s text. Animatable.

# allowsFontSubpixelQuantization (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Determines whether to allow subpixel quantization for the graphics context used for text rendering.

## Declaration

```objectivec
@property BOOL allowsFontSubpixelQuantization;
```

<a id="Discussion"></a>

## Discussion

When enabled, the graphics context used for text rendering may quantize the subpixel positions of glyphs.

## See Also

### Text Visual Properties

- [font](font.md): The font used to render the receiver’s text.
- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [foregroundColor](foregroundcolor.md): The color used to render the receiver’s text. Animatable.
