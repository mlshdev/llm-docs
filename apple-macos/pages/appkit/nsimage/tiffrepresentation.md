> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/tiffrepresentation](https://developer.apple.com/documentation/appkit/nsimage/tiffrepresentation)

# tiffRepresentation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A data object containing TIFF data for all of the image representations in the image.

## Declaration

```swift
var tiffRepresentation: Data? { get }
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to write the TIFF data to a file. For each image representation, this property uses the TIFF compression option associated with that representation or `NSTIFFCompressionNone`, if no option is set.

If one of the receiver’s image representations does not support the creation of TIFF data natively (PDF and EPS images, for example), this property creates the TIFF data from that representation’s cached content. This property contains `nil` if the TIFF data cannot be created.

Additional image formats can be saved by using the `NSBitmapImageRep` method [representation(using:properties:)](../nsbitmapimagerep/representation%28using_properties_%29.md).

## See Also

### Related Documentation

- [representation(using:properties:)](../nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [tiffRepresentation(using:factor:)](../nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [tiffRepresentation](../nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.

### Producing TIFF Data for Images

- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.

# TIFFRepresentation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A data object containing TIFF data for all of the image representations in the image.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSData * TIFFRepresentation;
```

<a id="Discussion"></a>

## Discussion

Use the value of this property to write the TIFF data to a file. For each image representation, this property uses the TIFF compression option associated with that representation or `NSTIFFCompressionNone`, if no option is set.

If one of the receiver’s image representations does not support the creation of TIFF data natively (PDF and EPS images, for example), this property creates the TIFF data from that representation’s cached content. This property contains `nil` if the TIFF data cannot be created.

Additional image formats can be saved by using the `NSBitmapImageRep` method [representationUsingType:properties:](../nsbitmapimagerep/representation%28using_properties_%29.md).

## See Also

### Related Documentation

- [representationUsingType:properties:](../nsbitmapimagerep/representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [TIFFRepresentationUsingCompression:factor:](../nsbitmapimagerep/tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [TIFFRepresentation](../nsbitmapimagerep/tiffrepresentation.md): A TIFF representation of the bitmap image data.

### Producing TIFF Data for Images

- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
