> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/document](https://developer.apple.com/documentation/pdfkit/pdfpage/document)

# document (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the `PDFDocument` object with which the page is associated.

## Declaration

```swift
weak var document: PDFDocument? { get }
```

## See Also

### Getting Information About a Page

- [label](label.md): Returns the label for the page.
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds(\_:for:)](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.

# document (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the `PDFDocument` object with which the page is associated.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) PDFDocument * document;
```

## See Also

### Getting Information About a Page

- [label](label.md): Returns the label for the page.
- [boundsForBox:](bounds%28for_%29.md): Returns the bounds for the specified PDF display box.
- [setBounds:forBox:](setbounds%28__for_%29.md): Sets the bounds for the specified box.
- [rotation](rotation.md): Sets the rotation angle for the page in degrees.
