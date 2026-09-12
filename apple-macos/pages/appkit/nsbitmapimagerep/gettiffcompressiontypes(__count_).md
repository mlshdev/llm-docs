> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/gettiffcompressiontypes(_:count:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/gettiffcompressiontypes(_:count:))

# getTIFFCompressionTypes(\_:count:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns by indirection an array of all available compression types that can be used when writing a TIFF image.

## Declaration

```swift
class func getTIFFCompressionTypes(_ list: UnsafeMutablePointer<UnsafePointer<NSBitmapImageRep.TIFFCompression>?>, count numTypes: UnsafeMutablePointer<Int>)
```

## Parameters

- `list`: On return, a C array of [NSBitmapImageRep.TIFFCompression](tiffcompression.md) constants. This array belongs to the [NSBitmapImageRep](../nsbitmapimagerep.md) class; it shouldn’t be freed or altered. See [NSBitmapImageRep.TIFFCompression](tiffcompression.md) for the supported TIFF compression types.
- `numTypes`: The number of constants in list.

<a id="Discussion"></a>

## Discussion

Note that not all compression types can be used for all images: [NSBitmapImageRep.TIFFCompression.next](tiffcompression/next.md) can be used only to retrieve image data. Because future releases may include other compression types, always use this method to get the available compression types—for example, when you implement a user interface for selecting compression types.

## See Also

### Managing Compression Types

- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# getTIFFCompressionTypes:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns by indirection an array of all available compression types that can be used when writing a TIFF image.

## Declaration

```objectivec
+ (void) getTIFFCompressionTypes:(const NSTIFFCompression **) list count:(NSInteger *) numTypes;
```

## Parameters

- `list`: On return, a C array of [NSTIFFCompression](tiffcompression.md) constants. This array belongs to the [NSBitmapImageRep](../nsbitmapimagerep.md) class; it shouldn’t be freed or altered. See [NSTIFFCompression](tiffcompression.md) for the supported TIFF compression types.
- `numTypes`: The number of constants in list.

<a id="Discussion"></a>

## Discussion

Note that not all compression types can be used for all images: [NSTIFFCompressionNEXT](tiffcompression/next.md) can be used only to retrieve image data. Because future releases may include other compression types, always use this method to get the available compression types—for example, when you implement a user interface for selecting compression types.

## See Also

### Managing Compression Types

- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
