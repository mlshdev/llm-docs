> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/localizedname(fortiffcompressiontype:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/localizedname(fortiffcompressiontype:))

# localizedName(forTIFFCompressionType:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an autoreleased string containing the localized name for the specified compression type.

## Declaration

```swift
class func localizedName(forTIFFCompressionType compression: NSBitmapImageRep.TIFFCompression) -> String?
```

## Parameters

- `compression`: A TIFF compression type. For more information, see the constants in [NSBitmapImageRep.TIFFCompression](tiffcompression.md).

<a id="return-value"></a>

## Return Value

A localized name for `compression` or `nil` if `compression` is unrecognized.

<a id="Discussion"></a>

## Discussion

When implementing a user interface for selecting TIFF compression types, use [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md) to get the list of supported compression types, then use this method to get the localized names for each compression type.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# localizedNameForTIFFCompressionType: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an autoreleased string containing the localized name for the specified compression type.

## Declaration

```objectivec
+ (NSString *) localizedNameForTIFFCompressionType:(NSTIFFCompression) compression;
```

## Parameters

- `compression`: A TIFF compression type. For more information, see the constants in [NSTIFFCompression](tiffcompression.md).

<a id="return-value"></a>

## Return Value

A localized name for `compression` or `nil` if `compression` is unrecognized.

<a id="Discussion"></a>

## Discussion

When implementing a user interface for selecting TIFF compression types, use [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md) to get the list of supported compression types, then use this method to get the localized names for each compression type.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
