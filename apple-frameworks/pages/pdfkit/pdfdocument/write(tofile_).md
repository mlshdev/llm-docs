> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/write(tofile:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/write(tofile:))

# write(toFile:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a file at the specified path.

## Declaration

```swift
func write(toFile path: String) -> Bool
```

## See Also

### Related Documentation

- [dataRepresentation()](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [write(toFile:withOptions:)](write%28tofile_withoptions_%29.md): Writes the document to a file at the specified path with the specified options.
- [write(to:)](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.
- [write(to:withOptions:)](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.

# writeToFile: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Writes the document to a file at the specified path.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path;
```

## See Also

### Related Documentation

- [dataRepresentation](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

### Writing Out the PDF Data

- [writeToFile:withOptions:](write%28tofile_withoptions_%29.md): Writes the document to a file at the specified path with the specified options.
- [writeToURL:](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.
- [writeToURL:withOptions:](write%28to_withoptions_%29.md): Writes the document to the specified URL with the specified options.
- [Data Representations](../data-representations.md): Operations to represent PDF documents as data objects.
