> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/retagging(with:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/retagging(with:))

# retagging(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Changes the color space tag of the bitmap image representation.

## Declaration

```swift
func retagging(with newSpace: NSColorSpace) -> NSBitmapImageRep?
```

## Parameters

- `newSpace`: The desired color space.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md), or `nil`, if the conversion fails. If the original [NSBitmapImageRep](../nsbitmapimagerep.md) already uses that color space, it is returned as is.

<a id="Discussion"></a>

## Discussion

This method will definitely fail if you pass a color space that has a different color space model than the receiver. That is, if your original image is sRGB, you can only retag with some other RGB colorspace.

## See Also

### Managing Color Spaces

- [converting(to:renderingIntent:)](converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [colorSpace](colorspace.md): The color space of the bitmap.

# bitmapImageRepByRetaggingWithColorSpace: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Changes the color space tag of the bitmap image representation.

## Declaration

```objectivec
- (NSBitmapImageRep *) bitmapImageRepByRetaggingWithColorSpace:(NSColorSpace *) newSpace;
```

## Parameters

- `newSpace`: The desired color space.

<a id="return-value"></a>

## Return Value

An [NSBitmapImageRep](../nsbitmapimagerep.md), or `nil`, if the conversion fails. If the original [NSBitmapImageRep](../nsbitmapimagerep.md) already uses that color space, it is returned as is.

<a id="Discussion"></a>

## Discussion

This method will definitely fail if you pass a color space that has a different color space model than the receiver. That is, if your original image is sRGB, you can only retag with some other RGB colorspace.

## See Also

### Managing Color Spaces

- [bitmapImageRepByConvertingToColorSpace:renderingIntent:](converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [colorSpace](colorspace.md): The color space of the bitmap.
