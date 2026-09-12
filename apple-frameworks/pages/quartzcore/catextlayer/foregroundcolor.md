> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catextlayer/foregroundcolor](https://developer.apple.com/documentation/quartzcore/catextlayer/foregroundcolor)

# foregroundColor (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The color used to render the receiver’s text. Animatable.

## Declaration

```swift
var foregroundColor: CGColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to opaque white.

The `foregroundColor` property is only used when the [string](string.md) property is not an `NSAttributedString`.

> **Note**

>  Implicit animation of this property is only enabled in applications compiled for macOS 10.6 and later.

## See Also

### Text Visual Properties

- [font](font.md): The font used to render the receiver’s text.
- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.

# foregroundColor (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The color used to render the receiver’s text. Animatable.

## Declaration

```objectivec
@property (nullable) CGColorRef foregroundColor;
```

<a id="Discussion"></a>

## Discussion

Defaults to opaque white.

The `foregroundColor` property is only used when the [string](string.md) property is not an `NSAttributedString`.

> **Note**

>  Implicit animation of this property is only enabled in applications compiled for macOS 10.6 and later.

## See Also

### Text Visual Properties

- [font](font.md): The font used to render the receiver’s text.
- [fontSize](fontsize.md): The font size used to render the receiver’s text. Animatable.
- [allowsFontSubpixelQuantization](allowsfontsubpixelquantization.md): Determines whether to allow subpixel quantization for the graphics context used for text rendering.
