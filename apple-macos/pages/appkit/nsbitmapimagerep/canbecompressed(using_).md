> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/canbecompressed(using:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/canbecompressed(using:))

# canBeCompressed(using:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tests whether the bitmap image representation can be compressed by the specified compression scheme.

## Declaration

```swift
func canBeCompressed(using compression: NSBitmapImageRep.TIFFCompression) -> Bool
```

## Parameters

- `compression`: A TIFF compression type. For more information, see the constants in [NSBitmapImageRep.TIFFCompression](tiffcompression.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s data matches `compression` with this type, [false](https://developer.apple.com/documentation/swift/false) if the data doesn’t match `compression` or if `compression` is unsupported.

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if the receiver’s data matches `compression`; for example, if `compression` is [NSBitmapImageRep.TIFFCompression.ccittfax3](tiffcompression/ccittfax3.md), then the data must be 1 bit per sample and 1 sample per pixel.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# canBeCompressedUsing: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tests whether the bitmap image representation can be compressed by the specified compression scheme.

## Declaration

```objectivec
- (BOOL) canBeCompressedUsing:(NSTIFFCompression) compression;
```

## Parameters

- `compression`: A TIFF compression type. For more information, see the constants in [NSTIFFCompression](tiffcompression.md).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s data matches `compression` with this type, [false](https://developer.apple.com/documentation/swift/false) if the data doesn’t match `compression` or if `compression` is unsupported.

<a id="Discussion"></a>

## Discussion

This method returns [true](https://developer.apple.com/documentation/swift/true) if the receiver’s data matches `compression`; for example, if `compression` is [NSTIFFCompressionCCITTFAX3](tiffcompression/ccittfax3.md), then the data must be 1 bit per sample and 1 sample per pixel.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
