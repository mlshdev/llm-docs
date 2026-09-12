> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/representation(using:properties:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/representation(using:properties:))

# representation(using:properties:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.

## Declaration

```swift
func representation(using storageType: NSBitmapImageRep.FileType, properties: [NSBitmapImageRep.PropertyKey : Any]) -> Data?
```

## Parameters

- `storageType`: A constant that specifies a file type for bitmap images. It can be [NSBMPFileType](../nsbmpfiletype.md), [NSGIFFileType](../nsgiffiletype.md), [NSJPEGFileType](../nsjpegfiletype.md), [NSPNGFileType](../nspngfiletype.md), or [NSTIFFFileType](../nstifffiletype.md).
- `properties`: A dictionary that contains key-value pairs specifying image properties. These string constants used as keys and the valid values are described in [NSBitmapImageRep.PropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A data object containing the receiver’s image data in the specified format. You can write this data to a file or use it to create a new [NSBitmapImageRep](../nsbitmapimagerep.md) object.

## See Also

### Related Documentation

- [tiffRepresentation(using:factor:)](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [tiffRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentationOfImageReps(in:using:factor:)](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageReps(in:using:properties:)](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# representationUsingType:properties: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.

## Declaration

```objectivec
- (NSData *) representationUsingType:(NSBitmapImageFileType) storageType properties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `storageType`: A constant that specifies a file type for bitmap images. It can be [NSBMPFileType](../nsbmpfiletype.md), [NSGIFFileType](../nsgiffiletype.md), [NSJPEGFileType](../nsjpegfiletype.md), [NSPNGFileType](../nspngfiletype.md), or [NSTIFFFileType](../nstifffiletype.md).
- `properties`: A dictionary that contains key-value pairs specifying image properties. These string constants used as keys and the valid values are described in [NSBitmapImageRepPropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A data object containing the receiver’s image data in the specified format. You can write this data to a file or use it to create a new [NSBitmapImageRep](../nsbitmapimagerep.md) object.

## See Also

### Related Documentation

- [TIFFRepresentationUsingCompression:factor:](../nsimage/tiffrepresentation%28using_factor_%29.md): Returns a data object that contains TIFF data with the specified compression settings for all of the image representations in the image.
- [TIFFRepresentation](../nsimage/tiffrepresentation.md): A data object containing TIFF data for all of the image representations in the image.

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationOfImageRepsInArray:usingType:properties:](representationofimagereps%28in_using_properties_%29.md): Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
