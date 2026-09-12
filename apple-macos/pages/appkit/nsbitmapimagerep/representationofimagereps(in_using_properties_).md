> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbitmapimagerep/representationofimagereps(in:using:properties:)](https://developer.apple.com/documentation/appkit/nsbitmapimagerep/representationofimagereps(in:using:properties:))

# representationOfImageReps(in:using:properties:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.

## Declaration

```swift
class func representationOfImageReps(in imageReps: [NSImageRep], using storageType: NSBitmapImageRep.FileType, properties: [NSBitmapImageRep.PropertyKey : Any]) -> Data?
```

## Parameters

- `imageReps`: An array of [NSBitmapImageRep](../nsbitmapimagerep.md) objects.
- `storageType`: An [NSBitmapImageRep.FileType](filetype.md) constant specifying a file type for bitmap images.
- `properties`: A dictionary that contains key-value pairs specifying image properties. These string constants used as keys and the valid values are described in [NSBitmapImageRep.PropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A data object containing the bitmap image data in the specified format. You can write this data to a file or use it to create a new [NSBitmapImageRep](../nsbitmapimagerep.md) object.

## See Also

### Producing Other Representations of Images

- [tiffRepresentationOfImageReps(in:)](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [tiffRepresentationOfImageReps(in:using:factor:)](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [tiffRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [tiffRepresentation(using:factor:)](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representation(using:properties:)](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.

# representationOfImageRepsInArray:usingType:properties: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Formats the specified bitmap images using the specified storage type and properties and returns them in a data object.

## Declaration

```objectivec
+ (NSData *) representationOfImageRepsInArray:(NSArray<NSImageRep *> *) imageReps usingType:(NSBitmapImageFileType) storageType properties:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `imageReps`: An array of [NSBitmapImageRep](../nsbitmapimagerep.md) objects.
- `storageType`: An [NSBitmapImageFileType](filetype.md) constant specifying a file type for bitmap images.
- `properties`: A dictionary that contains key-value pairs specifying image properties. These string constants used as keys and the valid values are described in [NSBitmapImageRepPropertyKey](propertykey.md).

<a id="return-value"></a>

## Return Value

A data object containing the bitmap image data in the specified format. You can write this data to a file or use it to create a new [NSBitmapImageRep](../nsbitmapimagerep.md) object.

## See Also

### Producing Other Representations of Images

- [TIFFRepresentationOfImageRepsInArray:](tiffrepresentationofimagereps%28in_%29.md): Returns a TIFF representation of the specified images.
- [TIFFRepresentationOfImageRepsInArray:usingCompression:factor:](tiffrepresentationofimagereps%28in_using_factor_%29.md): Returns a TIFF representation of the specified images using the specified compression scheme and factor.
- [TIFFRepresentation](tiffrepresentation.md): A TIFF representation of the bitmap image data.
- [TIFFRepresentationUsingCompression:factor:](tiffrepresentation%28using_factor_%29.md): Returns a TIFF representation of the image using the specified compression.
- [representationUsingType:properties:](representation%28using_properties_%29.md): Formats the bitmap representation’s image data using the specified storage type and properties and returns it in a data object.
- [NSDrawBitmap](../nsdrawbitmap%28______________________%29.md): Draws a bitmap image.
