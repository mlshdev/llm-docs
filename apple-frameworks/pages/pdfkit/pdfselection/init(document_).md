> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/init(document:)](https://developer.apple.com/documentation/pdfkit/pdfselection/init(document:))

# init(document:) (Swift)

**Framework:** PDFKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an empty `PDFSelection` object.

## Declaration

```swift
init(document: PDFDocument)
```

<a id="Discussion"></a>

## Discussion

Typically, you don’t need to create a `PDFSelection` object, but you can use an empty `PDFSelection` object as a container into which you can place selections, using [PDFSelection](../pdfselection.md) and addSelections.

# initWithDocument: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an empty `PDFSelection` object.

## Declaration

```objectivec
- (instancetype) initWithDocument:(PDFDocument *) document;
```

<a id="Discussion"></a>

## Discussion

Typically, you don’t need to create a `PDFSelection` object, but you can use an empty `PDFSelection` object as a container into which you can place selections, using [PDFSelection](../pdfselection.md) and addSelections.
