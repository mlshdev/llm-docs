> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/value(forproperty:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/value(forproperty:))

# value(forProperty:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the specified property.

## Declaration

```swift
func value(forProperty property: NSBitmapImageRep.PropertyKey) -> Any?
```

## Parameters

- `property`: A string constant used as a key for an image property. These properties are described in [NSBitmapImageRep.PropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A value specific to `property`, or `nil` if the property is not set for the bitmap.

<a id="Discussion"></a>

## Discussion

Image properties can affect how an image is read in and saved to file. When retrieving the bitmap image properties defined in [NSBitmapImageRep.PropertyKey](propertykey.md), be sure to check the return value of this method for a `nil` value. If a particular value is not set for the image, this method may return `nil`.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes(\_:count:)](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedName(forTIFFCompressionType:)](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressed(using:)](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression(\_:factor:)](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression(\_:factor:)](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty(\_:withValue:)](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [NSBitmapImageRep.TIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRep.PropertyKey](propertykey.md): Constants that identify bitmap image representation properties.

# valueForProperty: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value for the specified property.

## Declaration

```objectivec
- (id) valueForProperty:(NSBitmapImageRepPropertyKey) property;
```

## Parameters

- `property`: A string constant used as a key for an image property. These properties are described in [NSBitmapImageRepPropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A value specific to `property`, or `nil` if the property is not set for the bitmap.

<a id="Discussion"></a>

## Discussion

Image properties can affect how an image is read in and saved to file. When retrieving the bitmap image properties defined in [NSBitmapImageRepPropertyKey](propertykey.md), be sure to check the return value of this method for a `nil` value. If a particular value is not set for the image, this method may return `nil`.

## See Also

### Managing Compression Types

- [getTIFFCompressionTypes:count:](gettiffcompressiontypes%28__count_%29.md): Returns by indirection an array of all available compression types that can be used when writing a TIFF image.
- [localizedNameForTIFFCompressionType:](localizedname%28fortiffcompressiontype_%29.md): Returns an autoreleased string containing the localized name for the specified compression type.
- [canBeCompressedUsing:](canbecompressed%28using_%29.md): Tests whether the bitmap image representation can be compressed by the specified compression scheme.
- [setCompression:factor:](setcompression%28__factor_%29.md): Sets the bitmap image representation’s compression type and compression factor.
- [getCompression:factor:](getcompression%28__factor_%29.md): Returns by indirection the bitmap image representation’s compression type and compression factor.
- [setProperty:withValue:](setproperty%28__withvalue_%29.md): Sets the specified property of the bitmap image representation to the specified value.
- [NSTIFFCompression](tiffcompression.md): Constants that represent the supported TIFF data-compression schemes.
- [NSBitmapImageRepPropertyKey](propertykey.md): Constants that identify bitmap image representation properties.
