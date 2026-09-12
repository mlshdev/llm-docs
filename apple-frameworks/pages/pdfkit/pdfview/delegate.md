> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/delegate](https://developer.apple.com/documentation/pdfkit/pdfview/delegate)

# delegate (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the view’s delegate.

## Declaration

```swift
weak var delegate: (any PDFViewDelegate)? { get set }
```

## See Also

### Setting the Delegate

- [PDFViewDelegate](../pdfviewdelegate.md): The delegate for the `PDFView` object.

# delegate (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the view’s delegate.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PDFViewDelegate> delegate;
```

## See Also

### Setting the Delegate

- [PDFViewDelegate](../pdfviewdelegate.md): The delegate for the `PDFView` object.
