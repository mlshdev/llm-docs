> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/write(to:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/write(to:))

# write(to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a location specified by the passed-in URL.

## Declaration

```swift
func write(to url: URL) -> Bool
```

## See Also

### Related Documentation

- [dataRepresentation()](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [write(toFile:)](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [write(toFile:withOptions:)](write%28tofile_withoptions_%29.md): Writes the document to a file at the specified path with the specified options.
- [write(to:withOptions:)](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.

# writeToURL: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a location specified by the passed-in URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url;
```

## See Also

### Related Documentation

- [dataRepresentation](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [writeToFile:](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [writeToFile:withOptions:](write%28tofile_withoptions_%29.md): Writes the document to a file at the specified path with the specified options.
- [writeToURL:withOptions:](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.
