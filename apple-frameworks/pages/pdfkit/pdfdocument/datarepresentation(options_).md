> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfdocument/datarepresentation(options:)](https://developer.apple.com/documentation/pdfkit/pdfdocument/datarepresentation(options:))

# dataRepresentation(options:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns a representation of the document as an `NSData` object with additional options applied, such as filters.

## Declaration

```swift
func dataRepresentation(options: [AnyHashable : Any] = [:]) -> Data?
```

## See Also

### Creating Data Representations

- [dataRepresentation()](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.

# dataRepresentationWithOptions: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 11.0+ · visionOS 1.0+

Returns a representation of the document as an `NSData` object with additional options applied, such as filters.

## Declaration

```objectivec
- (NSData *) dataRepresentationWithOptions:(NSDictionary *) options;
```

## See Also

### Creating Data Representations

- [dataRepresentation](datarepresentation%28%29.md): Returns a representation of the document as an `NSData` object.
