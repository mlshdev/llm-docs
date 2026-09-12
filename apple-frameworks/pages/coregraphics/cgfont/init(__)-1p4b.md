> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/init(_:)-1p4b](https://developer.apple.com/documentation/coregraphics/cgfont/init(_:)-1p4b)

# init(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font object corresponding to the font specified by a PostScript or full name.

## Declaration

```swift
init?(_ name: CFString)
```

## Parameters

- `name`: The PostScript or full name of a font.

<a id="return-value"></a>

## Return Value

The font object or `NULL` if the font can’t be created. In Objective-C, you’re responsible for releasing this object using [CGFontRelease](../cgfontrelease.md).

<a id="Discussion"></a>

## Discussion

Before drawing text in a Core Graphics context, you must set the font in the current graphics state by calling the function [setFont(\_:)](../cgcontext/setfont%28__%29.md).

## See Also

### Creating Font Objects

- [init(\_:)](init%28__%29-9aour.md): Creates a font object from data supplied from a data provider.

# CGFontCreateWithFontName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font object corresponding to the font specified by a PostScript or full name.

## Declaration

```objectivec
extern CGFontRefCGFontCreateWithFontName(CFStringRef name);
```

## Parameters

- `name`: The PostScript or full name of a font.

<a id="return-value"></a>

## Return Value

The font object or `NULL` if the font can’t be created. In Objective-C, you’re responsible for releasing this object using [CGFontRelease](../cgfontrelease.md).

<a id="Discussion"></a>

## Discussion

Before drawing text in a Core Graphics context, you must set the font in the current graphics state by calling the function [CGContextSetFont](../cgcontext/setfont%28__%29.md).

## See Also

### Creating Font Objects

- [CGFontCreateWithDataProvider](init%28__%29-9aour.md): Creates a font object from data supplied from a data provider.
- [CGFontCreateWithPlatformFont](../cgfontcreatewithplatformfont.md): Deprecated. Creates a font object from an Apple Type Services (ATS) font.
