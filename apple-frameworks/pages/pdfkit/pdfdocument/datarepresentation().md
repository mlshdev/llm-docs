> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/datarepresentation()](https://developer.apple.com/documentation/pdfkit/pdfdocument/datarepresentation())

# dataRepresentation() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a representation of the document as an `NSData` object.

## Declaration

```swift
func dataRepresentation() -> Data?
```

## See Also

### Related Documentation

- [write(toFile:)](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [write(to:)](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.

### Creating Data Representations

- [dataRepresentation(options:)](datarepresentation%28options_%29.md): Returns a representation of the document as an `NSData` object with additional options applied, such as filters.

# dataRepresentation (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns a representation of the document as an `NSData` object.

## Declaration

```objectivec
- (NSData *) dataRepresentation;
```

## See Also

### Related Documentation

- [writeToFile:](write%28tofile_%29.md): Writes the document to a file at the specified path.
- [writeToURL:](write%28to_%29.md): Writes the document to a location specified by the passed-in URL.

### Creating Data Representations

- [dataRepresentationWithOptions:](datarepresentation%28options_%29.md): Returns a representation of the document as an `NSData` object with additional options applied, such as filters.
