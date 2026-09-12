> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/converting(to:renderingintent:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/converting(to:renderingintent:))

# converting(to:renderingIntent:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Converts the bitmap image representation to the specified color space.

## Declaration

```swift
func converting(to targetSpace: NSColorSpace, renderingIntent: NSColorRenderingIntent) -> NSBitmapImageRep?
```

## Parameters

- `targetSpace`: The new color space.
- `renderingIntent`: The rendering intent specifies how to handle colors that are not located within the target color space. The supported values are [NSColorRenderingIntent](../nscolorrenderingintent.md).

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md), or `nil`, if the conversion fails. If the original [NSBitmapImageRep](../nsbitmapimagerep.md) already uses that color space, it is returned as is.

## See Also

### Managing Color Spaces

- [retagging(with:)](retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.
- [colorSpace](colorspace.md): The color space of the bitmap.

# bitmapImageRepByConvertingToColorSpace:renderingIntent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Converts the bitmap image representation to the specified color space.

## Declaration

```objectivec
- (NSBitmapImageRep *) bitmapImageRepByConvertingToColorSpace:(NSColorSpace *) targetSpace renderingIntent:(NSColorRenderingIntent) renderingIntent;
```

## Parameters

- `targetSpace`: The new color space.
- `renderingIntent`: The rendering intent specifies how to handle colors that are not located within the target color space. The supported values are [NSColorRenderingIntent](../nscolorrenderingintent.md).

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md), or `nil`, if the conversion fails. If the original [NSBitmapImageRep](../nsbitmapimagerep.md) already uses that color space, it is returned as is.

## See Also

### Managing Color Spaces

- [bitmapImageRepByRetaggingWithColorSpace:](retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.
- [colorSpace](colorspace.md): The color space of the bitmap.
