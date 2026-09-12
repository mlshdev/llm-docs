> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/colorat(x:y:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/colorat(x:y:))

# colorAt(x:y:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color of the pixel at the specified coordinates.

## Declaration

```swift
func colorAt(x: Int, y: Int) -> NSColor?
```

## Parameters

- `x`: The x-axis coordinate.
- `y`: The y-axis coordinate.

<a id="return-value"></a>

## Return Value

A color object representing the color at the specified coordinates.

<a id="Discussion"></a>

## Discussion

Calling this method creates a new [NSColor](../nscolor.md) object. The overhead of object creation means this method is best suited for infrequent color sampling. If you instead need to work with large numbers of pixels, access the bitmap data directly using the [bitmapData](bitmapdata.md) property or the [getPixel(\_:atX:y:)](getpixel%28__atx_y_%29.md) method for better performance.

## See Also

### Managing Pixel Values

- [setColor(\_:atX:y:)](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [setPixel(\_:atX:y:)](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel(\_:atX:y:)](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.

# colorAtX:y: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the color of the pixel at the specified coordinates.

## Declaration

```objectivec
- (NSColor *) colorAtX:(NSInteger) x y:(NSInteger) y;
```

## Parameters

- `x`: The x-axis coordinate.
- `y`: The y-axis coordinate.

<a id="return-value"></a>

## Return Value

A color object representing the color at the specified coordinates.

<a id="Discussion"></a>

## Discussion

Calling this method creates a new [NSColor](../nscolor.md) object. The overhead of object creation means this method is best suited for infrequent color sampling. If you instead need to work with large numbers of pixels, access the bitmap data directly using the [bitmapData](bitmapdata.md) property or the [getPixel:atX:y:](getpixel%28__atx_y_%29.md) method for better performance.

## See Also

### Managing Pixel Values

- [setColor:atX:y:](setcolor%28__atx_y_%29.md): Changes the color of the pixel at the specified coordinates.
- [setPixel:atX:y:](setpixel%28__atx_y_%29.md): Sets the bitmap image representation’s pixel at the specified coordinates to the specified raw pixel values.
- [getPixel:atX:y:](getpixel%28__atx_y_%29.md): Returns by indirection the pixel data for the specified location in the bitmap image representation.
