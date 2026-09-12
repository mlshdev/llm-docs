> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfontcreatewithplatformfont](https://developer.apple.com/documentation/coregraphics/cgfontcreatewithplatformfont)

# CGFontCreateWithPlatformFont

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Creates a font object from an Apple Type Services (ATS) font.

> Use Core Text, documented in [Core Text](../coretext.md), instead.

## Declaration

```objectivec
extern CGFontRefCGFontCreateWithPlatformFont(void *platformFontReference);
```

## Parameters

- `platformFontReference`: A generic pointer to a font object. The font should be of a type appropriate to the platform on which your program is running. For macOS, you should pass a pointer to an ATS font.

<a id="return-value"></a>

## Return Value

The font object, or `NULL` if the platform font could not be located. In Objective-C, you’re responsible for releasing this object using [CGFontRelease](cgfontrelease.md).

<a id="Discussion"></a>

## Discussion

Before drawing text in a Core Graphics context, you must set the font in the current graphics state. For ATS Fonts, call this function to create a font, and pass it to [CGContextSetFont](cgcontext/setfont%28__%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated because it takes a pointer to an `ATSFontRef` object—itself deprecated—and is used almost solely by QuickDraw-based applications. There’s no direct one-to-one replacement for the function. Clients using ATSUI and QuickDraw should move to Core Text and Core Graphics instead.

## See Also

### Creating Font Objects

- [CGFontCreateWithDataProvider](cgfont/init%28__%29-9aour.md): Creates a font object from data supplied from a data provider.
- [CGFontCreateWithFontName](cgfont/init%28__%29-1p4b.md): Creates a font object corresponding to the font specified by a PostScript or full name.
