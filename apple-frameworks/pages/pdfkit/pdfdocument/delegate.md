> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfdocument/delegate

# delegate (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The object acting as the delegate for the `PDFDocument` object.

## Declaration

```swift
weak var delegate: (any PDFDocumentDelegate)? { get set }
```

## See Also

### Setting the Delegate

- [PDFDocumentDelegate](../pdfdocumentdelegate.md): The delegate for the `PDFDocument` object.

# delegate (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The object acting as the delegate for the `PDFDocument` object.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PDFDocumentDelegate> delegate;
```

## See Also

### Setting the Delegate

- [PDFDocumentDelegate](../pdfdocumentdelegate.md): The delegate for the `PDFDocument` object.
