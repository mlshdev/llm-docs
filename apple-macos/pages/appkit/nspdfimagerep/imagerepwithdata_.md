> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfimagerep/imagerepwithdata:](https://developer.apple.com/documentation/appkit/nspdfimagerep/imagerepwithdata:)

# imageRepWithData:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates and returns a representation of an image initialized with the specified PDF data.

## Declaration

```objectivec
+ (instancetype) imageRepWithData:(NSData *) pdfData;
```

## Parameters

- `pdfData`: A data object containing the PDF data for the image.

<a id="return-value"></a>

## Return Value

An initialized [NSPDFImageRep](../nspdfimagerep.md) object, or `nil` if the object could not be initialized. Initialization may fail if the PDF data does not conform to the PDF file format.

## See Also

### Related Documentation

- [PDFRepresentation](pdfrepresentation.md): The PDF representation of the representation’s image.

### Creating Representations of Images from PDF Data

- [initWithData:](init%28data_%29.md): Returns a representation of an image initialized with the specified PDF data.
