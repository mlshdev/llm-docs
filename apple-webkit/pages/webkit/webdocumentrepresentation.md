> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentrepresentation](https://developer.apple.com/documentation/webkit/webdocumentrepresentation)

# WebDocumentRepresentation (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.

## Declaration

```swift
protocol WebDocumentRepresentation : NSObjectProtocol
```

## Topics

### Setting the data source

- [setDataSource(\_:)](webdocumentrepresentation/setdatasource%28__%29.md): Deprecated. Sets the receiver’s data source.

### Loading content

- [receivedData(\_:with:)](webdocumentrepresentation/receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [receivedError(\_:with:)](webdocumentrepresentation/receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.
- [finishedLoading(with:)](webdocumentrepresentation/finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.

### Getting document source

- [canProvideDocumentSource()](webdocumentrepresentation/canprovidedocumentsource%28%29.md): Deprecated. Returns whether the receiver can provide content source.
- [documentSource()](webdocumentrepresentation/documentsource%28%29.md): Deprecated. Returns the receiver’s source as text.

### Getting the document title

- [title()](webdocumentrepresentation/title%28%29.md): Deprecated. Returns the receiver’s document title.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.

# WebDocumentRepresentation (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.

## Declaration

```objectivec
@protocol WebDocumentRepresentation <NSObject>
```

## Topics

### Setting the data source

- [setDataSource:](webdocumentrepresentation/setdatasource%28__%29.md): Deprecated. Sets the receiver’s data source.

### Loading content

- [receivedData:withDataSource:](webdocumentrepresentation/receiveddata%28__with_%29.md): Deprecated. Invoked when a data source has received some data.
- [receivedError:withDataSource:](webdocumentrepresentation/receivederror%28__with_%29.md): Deprecated. Invoked when a data source receives an error loading its content.
- [finishedLoadingWithDataSource:](webdocumentrepresentation/finishedloading%28with_%29.md): Deprecated. Invoked when a data source finishes loading its content.

### Getting document source

- [canProvideDocumentSource](webdocumentrepresentation/canprovidedocumentsource%28%29.md): Deprecated. Returns whether the receiver can provide content source.
- [documentSource](webdocumentrepresentation/documentsource%28%29.md): Deprecated. Returns the receiver’s source as text.

### Getting the document title

- [title](webdocumentrepresentation/title%28%29.md): Deprecated. Returns the receiver’s document title.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.
