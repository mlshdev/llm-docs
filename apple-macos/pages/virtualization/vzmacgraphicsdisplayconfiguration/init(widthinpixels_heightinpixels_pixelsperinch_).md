> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacgraphicsdisplayconfiguration/init(widthinpixels:heightinpixels:pixelsperinch:)](https://developer.apple.com/documentation/virtualization/vzmacgraphicsdisplayconfiguration/init(widthinpixels:heightinpixels:pixelsperinch:))

# init(widthInPixels:heightInPixels:pixelsPerInch:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Create a display configuration with the specified pixel dimensions and pixel density.

## Declaration

```swift
init(widthInPixels: Int, heightInPixels: Int, pixelsPerInch: Int)
```

## Parameters

- `widthInPixels`: The width of the display, in pixels.
- `heightInPixels`: The height of the display, in pixels.
- `pixelsPerInch`: The pixel density as a number of pixels per inch.

## See Also

### Creating the display configuration

- [init(for:sizeInPoints:)](init%28for_sizeinpoints_%29.md): Create a display configuration suitable for showing on the specified screen.

# initWithWidthInPixels:heightInPixels:pixelsPerInch: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Create a display configuration with the specified pixel dimensions and pixel density.

## Declaration

```objectivec
- (instancetype) initWithWidthInPixels:(NSInteger) widthInPixels heightInPixels:(NSInteger) heightInPixels pixelsPerInch:(NSInteger) pixelsPerInch;
```

## Parameters

- `widthInPixels`: The width of the display, in pixels.
- `heightInPixels`: The height of the display, in pixels.
- `pixelsPerInch`: The pixel density as a number of pixels per inch.

## See Also

### Creating the display configuration

- [initForScreen:sizeInPoints:](init%28for_sizeinpoints_%29.md): Create a display configuration suitable for showing on the specified screen.
