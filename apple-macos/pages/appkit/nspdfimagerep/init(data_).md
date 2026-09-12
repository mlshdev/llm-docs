> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspdfimagerep/init(data:)](https://developer.apple.com/documentation/appkit/nspdfimagerep/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns a representation of an image initialized with the specified PDF data.

## Declaration

```swift
init?(data pdfData: Data)
```

## Parameters

- `pdfData`: A data object containing the PDF data for the image.

<a id="return-value"></a>

## Return Value

An initialized [NSPDFImageRep](../nspdfimagerep.md) object, or `nil` if the object could not be initialized. Initialization may fail if the PDF data does not conform to the PDF file format.

## See Also

### Related Documentation

- [pdfRepresentation](pdfrepresentation.md): The PDF representation of the representation’s image.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a representation of an image initialized with the specified PDF data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) pdfData;
```

## Parameters

- `pdfData`: A data object containing the PDF data for the image.

<a id="return-value"></a>

## Return Value

An initialized [NSPDFImageRep](../nspdfimagerep.md) object, or `nil` if the object could not be initialized. Initialization may fail if the PDF data does not conform to the PDF file format.

## See Also

### Related Documentation

- [PDFRepresentation](pdfrepresentation.md): The PDF representation of the representation’s image.
- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a representation of an image initialized with the specified PDF data.

### Creating Representations of Images from PDF Data

- [imageRepWithData:](imagerepwithdata_.md): Creates and returns a representation of an image initialized with the specified PDF data.
