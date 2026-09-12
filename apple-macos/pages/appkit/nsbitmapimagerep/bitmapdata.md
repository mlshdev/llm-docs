> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/bitmapdata](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/bitmapdata)

# bitmapData (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A pointer to the bitmap data.

## Declaration

```swift
var bitmapData: UnsafeMutablePointer<UInt8>? { get }
```

<a id="Discussion"></a>

## Discussion

For planar data, the value in this property points to the first plane.

## See Also

### Related Documentation

- [getPixel(\_:atX:y:)](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

### Getting the Bitmap Data

- [getBitmapDataPlanes(\_:)](getbitmapdataplanes%28__%29.md): Returns by indirection bitmap data of the bitmap image representation separated into planes.

# bitmapData (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A pointer to the bitmap data.

## Declaration

```objectivec
@property (readonly, nullable) unsigned char * bitmapData;
```

<a id="Discussion"></a>

## Discussion

For planar data, the value in this property points to the first plane.

## See Also

### Related Documentation

- [getPixel:atX:y:](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

### Getting the Bitmap Data

- [getBitmapDataPlanes:](getbitmapdataplanes%28__%29.md): Returns by indirection bitmap data of the bitmap image representation separated into planes.
