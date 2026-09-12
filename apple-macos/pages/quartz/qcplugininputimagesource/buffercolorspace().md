> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/buffercolorspace()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/buffercolorspace())

# bufferColorSpace() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image buffer representation.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func bufferColorSpace() -> Unmanaged<CGColorSpace>!
```

<a id="return-value"></a>

## Return Value

The color space of the image buffer.

## See Also

### Getting Image Buffer Information

- [imageBounds()](imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide()](bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh()](bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat()](bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferBaseAddress()](bufferbaseaddress%28%29.md): Deprecated. Returns the base address of the image buffer.
- [bufferBytesPerRow()](bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.

# bufferColorSpace (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the color space of the image buffer representation.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (CGColorSpaceRef) bufferColorSpace;
```

<a id="return-value"></a>

## Return Value

The color space of the image buffer.

## See Also

### Getting Image Buffer Information

- [imageBounds](imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide](bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh](bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat](bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferBaseAddress](bufferbaseaddress%28%29.md): Deprecated. Returns the base address of the image buffer.
- [bufferBytesPerRow](bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.
