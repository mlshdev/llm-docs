> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/getcompression(_:factor:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/getcompression(_:factor:))

# getCompression(\_:factor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection the bitmap image representation’s compression type and compression factor.

## Declaration

```swift
func getCompression(_ compression: UnsafeMutablePointer<NSBitmapImageRep.TIFFCompression>?, factor: UnsafeMutablePointer<Float>?)
```

## Parameters

- `compression`: On return, an `enum` constant that represents the compression type used on the data; it corresponds to one of the values returned by the class method [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md).
- `factor`: A float value that is specific to the compression type. Many types of compression don’t support varying degrees of compression and thus ignore `factor`. JPEG compression allows a compression factor ranging from 0.0 to 1.0, with 0.0 being the lowest and 1.0 being the highest.

<a id="Discussion"></a>

## Discussion

Use this method to get information on the compression type for the source image data.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# getCompression:factor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns by indirection the bitmap image representation’s compression type and compression factor.

## Declaration

```objectivec
- (void) getCompression:(NSTIFFCompression *) compression factor:(float *) factor;
```

## Parameters

- `compression`: On return, an `enum` constant that represents the compression type used on the data; it corresponds to one of the values returned by the class method [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md).
- `factor`: A float value that is specific to the compression type. Many types of compression don’t support varying degrees of compression and thus ignore `factor`. JPEG compression allows a compression factor ranging from 0.0 to 1.0, with 0.0 being the lowest and 1.0 being the highest.

<a id="Discussion"></a>

## Discussion

Use this method to get information on the compression type for the source image data.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
