> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/getpixel(_:atx:y:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/getpixel(_:atx:y:))

# getPixel(\_:atX:y:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection the pixel data for the specified location in the bitmap image representation.

## Declaration

```swift
func getPixel(_ p: UnsafeMutablePointer<Int>, atX x: Int, y: Int)
```

## Parameters

- `p`: On return, an array of integers containing raw pixel data in the appropriate order according to the object’s bitmap format. Smaller integer samples, such as 4-bit, are returned as an integer. Floating point values are cast to integer values and returned.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

<a id="discussion"></a>

## Discussion

The origin is in the top-left corner.

## See Also

### Related Documentation

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.

### Managing Pixel Values

- [setColor(\_:atX:y:)](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAt(x:y:)](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel(\_:atX:y:)](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.

# getPixel:atX:y: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection the pixel data for the specified location in the bitmap image representation.

## Declaration

```objectivec
- (void) getPixel:(NSUInteger[]) p atX:(NSInteger) x y:(NSInteger) y;
```

## Parameters

- `p`: On return, an array of integers containing raw pixel data in the appropriate order according to the object’s bitmap format. Smaller integer samples, such as 4-bit, are returned as an integer. Floating point values are cast to integer values and returned.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

<a id="discussion"></a>

## Discussion

The origin is in the top-left corner.

## See Also

### Related Documentation

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.

### Managing Pixel Values

- [setColor:atX:y:](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [colorAtX:y:](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel:atX:y:](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
