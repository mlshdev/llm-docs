> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/init(_:)-9aour](https://developer.apple.com/documentation/coregraphics/cgfont/init(_:)-9aour)

# init(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font object from data supplied from a data provider.

## Declaration

```swift
init?(_ provider: CGDataProvider)
```

## Parameters

- `provider`: A data provider.

<a id="return-value"></a>

## Return Value

The font object or `NULL` if the font can’t be created. In Objective-C, you’re responsible for releasing this object using [CGFontRelease](../cgfontrelease.md).

<a id="Discussion"></a>

## Discussion

Before drawing text in a Core Graphics context, you must set the font in the current graphics state by calling the function [setFontSize(\_:)](../cgcontext/setfontsize%28__%29.md).

## See Also

### Creating Font Objects

- [init(\_:)](init%28__%29-1p4b.md): Creates a font object corresponding to the font specified by a PostScript or full name.

# CGFontCreateWithDataProvider (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a font object from data supplied from a data provider.

## Declaration

```objectivec
extern CGFontRefCGFontCreateWithDataProvider(CGDataProviderRef provider);
```

## Parameters

- `provider`: A data provider.

<a id="return-value"></a>

## Return Value

The font object or `NULL` if the font can’t be created. In Objective-C, you’re responsible for releasing this object using [CGFontRelease](../cgfontrelease.md).

<a id="Discussion"></a>

## Discussion

Before drawing text in a Core Graphics context, you must set the font in the current graphics state by calling the function [CGContextSetFontSize](../cgcontext/setfontsize%28__%29.md).

## See Also

### Creating Font Objects

- [CGFontCreateWithFontName](init%28__%29-1p4b.md): Creates a font object corresponding to the font specified by a PostScript or full name.
- [CGFontCreateWithPlatformFont](../cgfontcreatewithplatformfont.md): Deprecated. Creates a font object from an Apple Type Services (ATS) font.
