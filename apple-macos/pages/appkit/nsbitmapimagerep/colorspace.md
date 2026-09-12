> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/colorspace](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/colorspace)

# colorSpace (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The color space of the bitmap.

## Declaration

```swift
var colorSpace: NSColorSpace { get }
```

## See Also

### Managing Color Spaces

- [converting(to:renderingIntent:)](converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [retagging(with:)](retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.

# colorSpace (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The color space of the bitmap.

## Declaration

```objectivec
@property (strong, readonly) NSColorSpace * colorSpace;
```

## See Also

### Managing Color Spaces

- [bitmapImageRepByConvertingToColorSpace:renderingIntent:](converting%28to_renderingintent_%29.md): Converts the bitmap image representation to the specified color space.
- [bitmapImageRepByRetaggingWithColorSpace:](retagging%28with_%29.md): Changes the color space tag of the bitmap image representation.
