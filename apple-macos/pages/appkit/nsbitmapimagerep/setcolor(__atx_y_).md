> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/setcolor(_:atx:y:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/setcolor(_:atx:y:))

# setColor(\_:atX:y:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the color of the pixel at the specified coordinates.

## Declaration

```swift
func setColor(_ color: NSColor, atX x: Int, y: Int)
```

## Parameters

- `color`: A color object representing the color to be set.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

## See Also

### Managing Pixel Values

- [colorAt(x:y:)](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel(\_:atX:y:)](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel(\_:atX:y:)](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

# setColor:atX:y: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Changes the color of the pixel at the specified coordinates.

## Declaration

```objectivec
- (void) setColor:(NSColor *) color atX:(NSInteger) x y:(NSInteger) y;
```

## Parameters

- `color`: A color object representing the color to be set.
- `x`: The x-axis coordinate of the pixel.
- `y`: The y-axis coordinate of the pixel.

## See Also

### Managing Pixel Values

- [colorAtX:y:](colorat%28x_y_%29.md): Returns the color of the pixel at the specified coordinates.
- [setPixel:atX:y:](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel:atX:y:](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.
