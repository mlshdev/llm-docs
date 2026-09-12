> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/write(tofile:withoptions:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/write(tofile:withoptions:))

# write(toFile:withOptions:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a file at the specified path with the specified options.

## Declaration

```swift
func write(toFile path: String, withOptions options: [PDFDocumentWriteOption : Any]? = nil) -> Bool
```

<a id="Discussion"></a>

## Discussion

The most commonly-used options are `kCGPDFContextOwnerPassword`, `kCGPDFContextUserPassword`, `kCGPDFContextAllowsCopying` and `kCGPDFContextAllowsPrinting`. For more details about these options, see [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).

## See Also

### Related Documentation

- [dataRepresentation()](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [write(toFile:)](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [write(to:)](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.
- [write(to:withOptions:)](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.

# writeToFile:withOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a file at the specified path with the specified options.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path withOptions:(NSDictionary<NSString *,id> *) options;
```

<a id="Discussion"></a>

## Discussion

The most commonly-used options are `kCGPDFContextOwnerPassword`, `kCGPDFContextUserPassword`, `kCGPDFContextAllowsCopying` and `kCGPDFContextAllowsPrinting`. For more details about these options, see [Auxiliary Dictionary Keys](../../coregraphics/auxiliary-dictionary-keys.md).

## See Also

### Related Documentation

- [dataRepresentation](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [writeToFile:](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [writeToURL:](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.
- [writeToURL:withOptions:](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.
