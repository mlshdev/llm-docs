> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentview](https://developer.apple.com/documentation/webkit/webdocumentview)

# WebDocumentView (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.

## Declaration

```swift
protocol WebDocumentView : NSObjectProtocol
```

## Topics

### Setting the data source

- [setDataSource(\_:)](webdocumentview/setdatasource%28__%29.md): Deprecated. Invoked when the data source for this document has been changed.
- [dataSourceUpdated(\_:)](webdocumentview/datasourceupdated%28__%29.md): Deprecated. Invoked when additional data has been received.

### Controlling the layout

- [setNeedsLayout(\_:)](webdocumentview/setneedslayout%28__%29.md): Deprecated. Sets whether or not the receiver should change its layout.
- [layout()](webdocumentview/layout%28%29.md): Deprecated. Invoked when the receiver should change its layout immediately.

### Attaching to a window

- [viewDidMoveToHostWindow()](webdocumentview/viewdidmovetohostwindow%28%29.md): Deprecated. Invoked when a web view’s host window is set.
- [viewWillMove(toHostWindow:)](webdocumentview/viewwillmove%28tohostwindow_%29.md): Deprecated. Invoked when a web view’s host window is about to change.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.

# WebDocumentView (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.

## Declaration

```objectivec
@protocol WebDocumentView <NSObject>
```

## Topics

### Setting the data source

- [setDataSource:](webdocumentview/setdatasource%28__%29.md): Deprecated. Invoked when the data source for this document has been changed.
- [dataSourceUpdated:](webdocumentview/datasourceupdated%28__%29.md): Deprecated. Invoked when additional data has been received.

### Controlling the layout

- [setNeedsLayout:](webdocumentview/setneedslayout%28__%29.md): Deprecated. Sets whether or not the receiver should change its layout.
- [layout](webdocumentview/layout%28%29.md): Deprecated. Invoked when the receiver should change its layout immediately.

### Attaching to a window

- [viewDidMoveToHostWindow](webdocumentview/viewdidmovetohostwindow%28%29.md): Deprecated. Invoked when a web view’s host window is set.
- [viewWillMoveToHostWindow:](webdocumentview/viewwillmove%28tohostwindow_%29.md): Deprecated. Invoked when a web view’s host window is about to change.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.
