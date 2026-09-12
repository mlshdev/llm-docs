> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcplugininputimagesource/bufferbaseaddress()](https://developer.apple.com/documentation/quartz/qcplugininputimagesource/bufferbaseaddress())

# bufferBaseAddress() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the base address of the image buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func bufferBaseAddress() -> UnsafeRawPointer!
```

<a id="return-value"></a>

## Return Value

The base address of the buffer.

<a id="Discussion"></a>

## Discussion

The base address is guaranteed to be aligned on a 16-byte boundary.

## See Also

### Getting Image Buffer Information

- [imageBounds()](imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide()](bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh()](bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat()](bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferColorSpace()](buffercolorspace%28%29.md): Deprecated. Returns the color space of the image buffer representation.
- [bufferBytesPerRow()](bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.

# bufferBaseAddress (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the base address of the image buffer.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (const void *) bufferBaseAddress;
```

<a id="return-value"></a>

## Return Value

The base address of the buffer.

<a id="Discussion"></a>

## Discussion

The base address is guaranteed to be aligned on a 16-byte boundary.

## See Also

### Getting Image Buffer Information

- [imageBounds](imagebounds%28%29.md): Deprecated. Returns the actual bounds of the image source expressed in pixels and aligned to integer boundaries.
- [bufferPixelsWide](bufferpixelswide%28%29.md): Deprecated. Returns the width of the image buffer representation.
- [bufferPixelsHigh](bufferpixelshigh%28%29.md): Deprecated. Returns the height of the image buffer representation.
- [bufferPixelFormat](bufferpixelformat%28%29.md): Deprecated. Returns the pixel format of the image buffer representation.
- [bufferColorSpace](buffercolorspace%28%29.md): Deprecated. Returns the color space of the image buffer representation.
- [bufferBytesPerRow](bufferbytesperrow%28%29.md): Deprecated. Returns the bytes per row of the buffer representation.
