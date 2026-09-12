> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/tiffcompression](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/tiffcompression)

# NSBitmapImageRep.TIFFCompression (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that represent the supported TIFF data-compression schemes.

## Declaration

```swift
enum TIFFCompression
```

## Topics

### Constants

- [NSBitmapImageRep.TIFFCompression.none](tiffcompression/none.md): No compression.
- [NSBitmapImageRep.TIFFCompression.ccittfax3](tiffcompression/ccittfax3.md): CCITT Fax Group 3 compression.
- [NSBitmapImageRep.TIFFCompression.ccittfax4](tiffcompression/ccittfax4.md): CCITT Fax Group 4 compression.
- [NSBitmapImageRep.TIFFCompression.lzw](tiffcompression/lzw.md): LZW compression.
- [NSBitmapImageRep.TIFFCompression.jpeg](tiffcompression/jpeg.md): JPEG compression. No longer supported for input or output.
- [NSBitmapImageRep.TIFFCompression.next](tiffcompression/next.md): NeXT compressed. Supported for input only.
- [NSBitmapImageRep.TIFFCompression.packBits](tiffcompression/packbits.md): PackBits compression.
- [NSBitmapImageRep.TIFFCompression.oldJPEG](tiffcompression/oldjpeg.md): Old JPEG compression. No longer supported for input or output.

### Initializers

- [init(rawValue:)](tiffcompression/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# NSTIFFCompression (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Constants that represent the supported TIFF data-compression schemes.

## Declaration

```objectivec
enum NSTIFFCompression : NSUInteger;
```

## Topics

### Constants

- [NSTIFFCompressionNone](tiffcompression/none.md): No compression.
- [NSTIFFCompressionCCITTFAX3](tiffcompression/ccittfax3.md): CCITT Fax Group 3 compression.
- [NSTIFFCompressionCCITTFAX4](tiffcompression/ccittfax4.md): CCITT Fax Group 4 compression.
- [NSTIFFCompressionLZW](tiffcompression/lzw.md): LZW compression.
- [NSTIFFCompressionJPEG](tiffcompression/jpeg.md): JPEG compression. No longer supported for input or output.
- [NSTIFFCompressionNEXT](tiffcompression/next.md): NeXT compressed. Supported for input only.
- [NSTIFFCompressionPackBits](tiffcompression/packbits.md): PackBits compression.
- [NSTIFFCompressionOldJPEG](tiffcompression/oldjpeg.md): Old JPEG compression. No longer supported for input or output.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
