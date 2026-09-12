> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/setpixel(_:atx:y:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/setpixel(_:atx:y:))

# setPixel(\_:atX:y:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.

## Declaration

```swift
func setPixel(_ p: UnsafeMutablePointer<Int>, atX x: Int, y: Int)
```

## Parameters

- `p`: An array of integers representing the raw pixel values. The values must be in an order appropriate to the object’s bitmap format. Small pixel sample values should be passed as an integer value. Floating point values should be cast `int[]`.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

## See Also

### Related Documentation

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.

### Managing Pixel Values

- [setColor(\_:atX:y:)](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAt(x:y:)](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [getPixel(\_:atX:y:)](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

# setPixel:atX:y: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.

## Declaration

```objectivec
- (void) setPixel:(NSUInteger[]) p atX:(NSInteger) x y:(NSInteger) y;
```

## Parameters

- `p`: An array of integers representing the raw pixel values. The values must be in an order appropriate to the object’s bitmap format. Small pixel sample values should be passed as an integer value. Floating point values should be cast `int[]`.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

## See Also

### Related Documentation

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.

### Managing Pixel Values

- [setColor:atX:y:](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAtX:y:](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [getPixel:atX:y:](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.
