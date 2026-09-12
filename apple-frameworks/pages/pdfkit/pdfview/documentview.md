> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/documentview](https://developer.apple.com/documentation/pdfkit/pdfview/documentview)

# documentView (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The innermost view used by `PDFView` or by your `PDFView` subclass.

## Declaration

```swift
var documentView: UIView? { get }
```

```swift
var documentView: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

The innermost view is the one displaying the visible document pages. This method is useful when converting coordinates from one view to another.

## See Also

### Specializing the View

- [layoutDocumentView()](layoutdocumentview%28%29.md): Performs layout of the inner views.
- [Draw Operations](../draw-operations.md): Draw in a PDF page.

# documentView (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The innermost view used by `PDFView` or by your `PDFView` subclass.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIView * documentView;
```

```objectivec
@property (nonatomic, readonly, nullable) NSView * documentView;
```

<a id="Discussion"></a>

## Discussion

The innermost view is the one displaying the visible document pages. This method is useful when converting coordinates from one view to another.

## See Also

### Specializing the View

- [layoutDocumentView](layoutdocumentview%28%29.md): Performs layout of the inner views.
- [Draw Operations](../draw-operations.md): Draw in a PDF page.
