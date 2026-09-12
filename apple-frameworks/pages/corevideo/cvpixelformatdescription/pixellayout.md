> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelformatdescription/pixellayout](https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/pixellayout)

# CVPixelFormatDescription.PixelLayout

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Defines pixel layout of a buffer plane or the entire buffer if the format is non-planar.

## Declaration

```swift
struct PixelLayout
```

<a id="overview"></a>

## Overview

Note: The value of [fillExtendedPixels](pixellayout/fillextendedpixels.md) property is ignored when comparing two pixel layouts for equality.

## Topics

### Initializers

- [init(blockSize:bitsPerBlock:bitsPerComponent:blockAlignment:subsampling:blackBlock:fillExtendedPixels:cgBitmapInfo:)](pixellayout/init%28blocksize_bitsperblock_bitspercomponent_blockalignment_subsampling_blackblock_fillextendedpixels_cgbitmapinfo_%29.md)

### Instance Properties

- [bitsPerBlock](pixellayout/bitsperblock.md): Number of bits per pixel. If [blockSize](pixellayout/blocksize.md) is greater than (1, 1) then this represents bits per block.
- [bitsPerComponent](pixellayout/bitspercomponent.md): The logical bit depth of each component of the plane.
- [blackBlock](pixellayout/blackblock.md): The bit pattern for a block of black pixels. If absent, black is assumed to be all zeros. Otherwise, this should be [bitsPerBlock](pixellayout/bitsperblock.md) bits long. If bitsPerBlock is less than a byte, repeat the bit pattern for the full byte.
- [blockAlignment](pixellayout/blockalignment.md): Alignment requirements on block multiples. v210 would be (8, 1) here for the horizontal case, to match the standard v210 row alignment value of 48.
- [blockSize](pixellayout/blocksize.md): Used to assist with allocating memory for pixel formats that don’t have an integer value for bytes per pixel. Block width/height is essentially the width/height in pixels of the smallest “byte addressable” group of pixels. This works in close conjunction with [bitsPerBlock](pixellayout/bitsperblock.md). Examples: 8-bit luminance only, blockSize.width would be 1, bitsPerBlock would be 8 16-bit 1555 RGB, blockSize.width would be 1, bitsPerBlock would be 16 32-bit 8888 ARGB, blockSize.width would be 1, bitsPerBlock would be 32 2vuy (CbYCrY), blockSize.width would be 2, bitsPerBlock would be 32 1-bit bitmap, blockSize.width would be 8, bitsPerBlock would be 8 v210, blockSize.width would be 6, bitsPerBlock would be 128
- [cgBitmapInfo](pixellayout/cgbitmapinfo.md): CoreGraphics bitmap info used for CG compatibility.
- [fillExtendedPixels](pixellayout/fillextendedpixels.md): Callback which can replicate edge pixels to the extended pixels.
- [subsampling](pixellayout/subsampling.md): Pixel subsampling for this plane.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
