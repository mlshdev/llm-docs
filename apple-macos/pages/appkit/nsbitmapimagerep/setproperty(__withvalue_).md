> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/setproperty(_:withvalue:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/setproperty(_:withvalue:))

# setProperty(\_:withValue:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the specified property of the bitmap image representation to the specified value.

## Declaration

```swift
func setProperty(_ property: NSBitmapImageRep.PropertyKey, withValue value: Any?)
```

## Parameters

- `property`: A string constant used as a key for an image property. These properties are described in [NSBitmapImageRep.PropertyKey](propertykey.md).
- `value`: A value specific to `property`. If `value` is `nil`, the value of the property is cleared.

<a id="Discussion"></a>

## Discussion

The properties can affect how the image is read in and saved to file.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# setProperty:withValue: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the specified property of the bitmap image representation to the specified value.

## Declaration

```objectivec
- (void) setProperty:(NSBitmapImageRepPropertyKey) property withValue:(id) value;
```

## Parameters

- `property`: A string constant used as a key for an image property. These properties are described in [NSBitmapImageRepPropertyKey](propertykey.md).
- `value`: A value specific to `property`. If `value` is `nil`, the value of the property is cleared.

<a id="Discussion"></a>

## Discussion

The properties can affect how the image is read in and saved to file.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value for the specified property.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
