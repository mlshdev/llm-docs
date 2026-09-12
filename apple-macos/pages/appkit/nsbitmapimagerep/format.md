> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/format](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/format)

# NSBitmapImageRep.Format (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants that represent bitmap component formats.

## Declaration

```swift
struct Format
```

<a id="overview"></a>

## Overview

You can combine these values and pass them to the  [init(bitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:)](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md) method as the bitmap format. You can access them later in the  [bitmapFormat](bitmapformat.md) property.

## Topics

### Constants

- [alphaFirst](format/alphafirst.md): A format where the alpha value comes first.
- [alphaNonpremultiplied](format/alphanonpremultiplied.md): A format where alpha values are not premultiplied.
- [floatingPointSamples](format/floatingpointsamples.md): A format where samples are specified using floating-point numbers.
- [sixteenBitBigEndian](format/sixteenbitbigendian.md): A 16-bit, big endian format.
- [sixteenBitLittleEndian](format/sixteenbitlittleendian.md): A 16-bit, little endian format.
- [thirtyTwoBitBigEndian](format/thirtytwobitbigendian.md): A 32-bit, big endian format.
- [thirtyTwoBitLittleEndian](format/thirtytwobitlittleendian.md): A 32-bit, little endian format.

### Initializers

- [init(rawValue:)](format/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [isPlanar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.

# NSBitmapFormat (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that represent bitmap component formats.

## Declaration

```objectivec
enum NSBitmapFormat : NSUInteger;
```

<a id="overview"></a>

## Overview

You can combine these values and pass them to the  [initWithBitmapDataPlanes:pixelsWide:pixelsHigh:bitsPerSample:samplesPerPixel:hasAlpha:isPlanar:colorSpaceName:bitmapFormat:bytesPerRow:bitsPerPixel:](init%28bitmapdataplanes_pixelswide_pixelshigh_bitspersample_samplesperpixel_hasalpha_isplanar_colorspacename_bitmapformat_bytesperrow_bitsperpixel_%29.md) method as the bitmap format. You can access them later in the  [bitmapFormat](bitmapformat.md) property.

## Topics

### Constants

- [NSBitmapFormatAlphaFirst](format/alphafirst.md): A format where the alpha value comes first.
- [NSBitmapFormatAlphaNonpremultiplied](format/alphanonpremultiplied.md): A format where alpha values are not premultiplied.
- [NSBitmapFormatFloatingPointSamples](format/floatingpointsamples.md): A format where samples are specified using floating-point numbers.
- [NSBitmapFormatSixteenBitBigEndian](format/sixteenbitbigendian.md): A 16-bit, big endian format.
- [NSBitmapFormatSixteenBitLittleEndian](format/sixteenbitlittleendian.md): A 16-bit, little endian format.
- [NSBitmapFormatThirtyTwoBitBigEndian](format/thirtytwobitbigendian.md): A 32-bit, big endian format.
- [NSBitmapFormatThirtyTwoBitLittleEndian](format/thirtytwobitlittleendian.md): A 32-bit, little endian format.

### Deprecated Constants

- [NSAlphaFirstBitmapFormat](../nsalphafirstbitmapformat.md): Deprecated. A format where the alpha value comes first.
- [NSAlphaNonpremultipliedBitmapFormat](../nsalphanonpremultipliedbitmapformat.md): Deprecated. A format where alpha values are not premultiplied.
- [NSFloatingPointSamplesBitmapFormat](../nsfloatingpointsamplesbitmapformat.md): Deprecated. A format where samples are specified using floating-point numbers.
- [NS16BitLittleEndianBitmapFormat](../ns16bitlittleendianbitmapformat.md): Deprecated. A 16-bit, little endian format.
- [NS32BitLittleEndianBitmapFormat](../ns32bitlittleendianbitmapformat.md): Deprecated. A 32-bit, little endian format.
- [NS16BitBigEndianBitmapFormat](../ns16bitbigendianbitmapformat.md): Deprecated. A 16-bit, big endian format.
- [NS32BitBigEndianBitmapFormat](../ns32bitbigendianbitmapformat.md): Deprecated. A 32-bit, big endian format.

## See Also

### Getting Information About Images

- [bitmapFormat](bitmapformat.md): The format of the bitmap image representation.
- [bitsPerPixel](bitsperpixel.md): The number of bits allocated for each pixel in each plane of data.
- [bytesPerPlane](bytesperplane.md): The number of bytes in each plane or channel of data.
- [bytesPerRow](bytesperrow.md): The minimum number of bytes required to specify a scan line in each data plane.
- [planar](isplanar.md): A Boolean value that indicates whether the image data is in a planar configuration.
- [numberOfPlanes](numberofplanes.md): The number of separate planes into which the image data is organized.
- [samplesPerPixel](samplesperpixel.md): The number of components for each pixel.
