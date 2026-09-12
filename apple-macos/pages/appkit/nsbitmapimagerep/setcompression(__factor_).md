> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/setcompression(_:factor:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/setcompression(_:factor:))

# setCompression(\_:factor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the bitmap image representation’s compression type and compression factor.

## Declaration

```swift
func setCompression(_ compression: NSBitmapImageRep.TIFFCompression, factor: Float)
```

## Parameters

- `compression`: An `enum` constant that identifies one of the supported compression types as described in [NSBitmapImageRep.TIFFCompression](tiffcompression.md).
- `factor`: A floating point value that is specific to the compression type. Many types of compression don’t support varying degrees of compression and thus ignore `factor`. JPEG compression allows a compression factor ranging from 0.0 to 1.0, with 0.0 being the lowest and 1.0 being the highest.

<a id="Discussion"></a>

## Discussion

When an [NSBitmapImageRep](../nsbitmapimagerep.md) is created, the instance stores the compression type and factor for the source data. The [tiffRepresentation](tiffrepresentation.md) property and [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md) class method try to use the stored compression type and factor. Use this method to change the compression type and factor.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# setCompression:factor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the bitmap image representation’s compression type and compression factor.

## Declaration

```objectivec
- (void) setCompression:(NSTIFFCompression) compression factor:(float) factor;
```

## Parameters

- `compression`: An `enum` constant that identifies one of the supported compression types as described in [NSTIFFCompression](tiffcompression.md).
- `factor`: A floating point value that is specific to the compression type. Many types of compression don’t support varying degrees of compression and thus ignore `factor`. JPEG compression allows a compression factor ranging from 0.0 to 1.0, with 0.0 being the lowest and 1.0 being the highest.

<a id="Discussion"></a>

## Discussion

When an [NSBitmapImageRep](../nsbitmapimagerep.md) is created, the instance stores the compression type and factor for the source data. The [TIFFRepresentation](tiffrepresentation.md) property and [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md) class method try to use the stored compression type and factor. Use this method to change the compression type and factor.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
