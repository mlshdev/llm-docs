> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfviewdelegate](https://developer.apple.com/documentation/pdfkit/pdfviewdelegate)

# PDFViewDelegate (Swift)

**Framework:** PDFKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The delegate for the `PDFView` object.

## Declaration

```swift
protocol PDFViewDelegate : NSObjectProtocol
```

## Topics

### Working with Annotation Actions

- [pdfViewPerformFind(\_:)](pdfviewdelegate/pdfviewperformfind%28__%29.md): Performs a find operation.
- [pdfViewPerformGo(toPage:)](pdfviewdelegate/pdfviewperformgo%28topage_%29.md): Performs a go-to operation.
- [pdfViewPerformPrint(\_:)](pdfviewdelegate/pdfviewperformprint%28__%29.md): Prints the current document.
- [pdfViewOpenPDF(\_:forRemoteGoToAction:)](pdfviewdelegate/pdfviewopenpdf%28__forremotegotoaction_%29.md): Opens a specified page.

### Scaling the View

- [pdfViewWillChangeScaleFactor(\_:toScale:)](pdfviewdelegate/pdfviewwillchangescalefactor%28__toscale_%29.md): Overrides changes to the scale factor.

### Linking in a View

- [pdfViewWillClick(onLink:with:)](pdfviewdelegate/pdfviewwillclick%28onlink_with_%29.md): Handle clicks on URL links in a view.

### Printing the View

- [pdfViewPrintJobTitle(\_:)](pdfviewdelegate/pdfviewprintjobtitle%28__%29.md): Overrides the job title used when the `PDFView` is printed.

### Instance Methods

- [pdfViewParentViewController()](pdfviewdelegate/pdfviewparentviewcontroller%28%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [delegate](pdfview/delegate.md): Returns the view’s delegate.

# PDFViewDelegate (Objective-C)

**Framework:** PDFKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.4+ · tvOS · visionOS 1.0+

The delegate for the `PDFView` object.

## Declaration

```objectivec
@protocol PDFViewDelegate <NSObject>
```

## Topics

### Working with Annotation Actions

- [PDFViewPerformFind:](pdfviewdelegate/pdfviewperformfind%28__%29.md): Performs a find operation.
- [PDFViewPerformGoToPage:](pdfviewdelegate/pdfviewperformgo%28topage_%29.md): Performs a go-to operation.
- [PDFViewPerformPrint:](pdfviewdelegate/pdfviewperformprint%28__%29.md): Prints the current document.
- [PDFViewOpenPDF:forRemoteGoToAction:](pdfviewdelegate/pdfviewopenpdf%28__forremotegotoaction_%29.md): Opens a specified page.

### Scaling the View

- [PDFViewWillChangeScaleFactor:toScale:](pdfviewdelegate/pdfviewwillchangescalefactor%28__toscale_%29.md): Overrides changes to the scale factor.

### Linking in a View

- [PDFViewWillClickOnLink:withURL:](pdfviewdelegate/pdfviewwillclick%28onlink_with_%29.md): Handle clicks on URL links in a view.

### Printing the View

- [PDFViewPrintJobTitle:](pdfviewdelegate/pdfviewprintjobtitle%28__%29.md): Overrides the job title used when the `PDFView` is printed.

### Instance Methods

- [PDFViewParentViewController](pdfviewdelegate/pdfviewparentviewcontroller%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Setting the Delegate

- [delegate](pdfview/delegate.md): Returns the view’s delegate.
