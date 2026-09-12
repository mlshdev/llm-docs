> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/tiffrepresentation(using:factor:)](https://developer.apple.com/documentation/appkit/nsimage/tiffrepresentation(using:factor:))

# tiffRepresentation(using:factor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.

## Declaration

```swift
func tiffRepresentation(using comp: NSBitmapImageRep.TIFFCompression, factor: Float) -> Data?
```

## Parameters

- `comp`: The type of compression to use. For a list of values, see the constants in `NSBitmapImageRep`.
- `factor`: Provides a hint for compression types that implement variable compression ratios. Currently, only JPEG compression uses a compression factor.

<a id="return-value"></a>

## Return Value

A data object containing the TIFF data, or `nil` if the TIFF data could not be created.

<a id="Discussion"></a>

## Discussion

You can use the returned data object to write the TIFF data to a file. If the specified compression isn’t applicable, no compression is used. If a problem is encountered during generation of the TIFF data, this method may raise an exception.

If one of the receiver’s image representations does not support the creation of TIFF data natively (PDF and EPS images, for example), this method creates the TIFF data from that representation’s cached content.

Additional image formats can be saved by using the `NSBitmapImageRep` method [representation(using:properties:)](../nsbitmapimagerep/representation%28using_properties_%29.md).

## See Also

### Related Documentation

- [representation(using:properties:)](../nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [tiffRepresentation(using:factor:)](../nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [tiffRepresentation](../nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.

### Producing TIFF Data for Images

- [tiffRepresentation](tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

# TIFFRepresentationUsingCompression:factor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.

## Declaration

```objectivec
- (NSData *) TIFFRepresentationUsingCompression:(NSTIFFCompression) comp factor:(float) factor;
```

## Parameters

- `comp`: The type of compression to use. For a list of values, see the constants in `NSBitmapImageRep`.
- `factor`: Provides a hint for compression types that implement variable compression ratios. Currently, only JPEG compression uses a compression factor.

<a id="return-value"></a>

## Return Value

A data object containing the TIFF data, or `nil` if the TIFF data could not be created.

<a id="Discussion"></a>

## Discussion

You can use the returned data object to write the TIFF data to a file. If the specified compression isn’t applicable, no compression is used. If a problem is encountered during generation of the TIFF data, this method may raise an exception.

If one of the receiver’s image representations does not support the creation of TIFF data natively (PDF and EPS images, for example), this method creates the TIFF data from that representation’s cached content.

Additional image formats can be saved by using the `NSBitmapImageRep` method [representationUsingType:properties:](../nsbitmapimagerep/representation%28using_properties_%29.md).

## See Also

### Related Documentation

- [representationUsingType:properties:](../nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [TIFFRepresentationUsingCompression:factor:](../nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [TIFFRepresentation](../nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.

### Producing TIFF Data for Images

- [TIFFRepresentation](tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.
