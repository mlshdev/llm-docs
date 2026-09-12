> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumenttext](https://developer.apple.com/documentation/webkit/webdocumenttext)

# WebDocumentText (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.

## Declaration

```swift
protocol WebDocumentText : NSObjectProtocol
```

## Topics

### Getting document content

- [string()](webdocumenttext/string%28%29.md): Deprecated. Returns the entire content of the web document as a string.
- [attributedString()](webdocumenttext/attributedstring%28%29.md): Deprecated. Returns the entire content of the web document as an attributed string.

### Selecting and deselecting text

- [selectAll()](webdocumenttext/selectall%28%29.md): Deprecated. Selects all the text in the web document.
- [deselectAll()](webdocumenttext/deselectall%28%29.md): Deprecated. Deselects the currently selected text in the web document.
- [selectedString()](webdocumenttext/selectedstring%28%29.md): Deprecated. Returns the currently selected text in the web document as a string.
- [selectedAttributedString()](webdocumenttext/selectedattributedstring%28%29.md): Deprecated. Returns the currently selected text in the web document as an attributed string.

### Text encoding

- [supportsTextEncoding()](webdocumenttext/supportstextencoding%28%29.md): Deprecated. Returns a Boolean value that indicates whether the web document supports text encoding.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.

# WebDocumentText (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.

## Declaration

```objectivec
@protocol WebDocumentText <NSObject>
```

## Topics

### Getting document content

- [string](webdocumenttext/string%28%29.md): Deprecated. Returns the entire content of the web document as a string.
- [attributedString](webdocumenttext/attributedstring%28%29.md): Deprecated. Returns the entire content of the web document as an attributed string.

### Selecting and deselecting text

- [selectAll](webdocumenttext/selectall%28%29.md): Deprecated. Selects all the text in the web document.
- [deselectAll](webdocumenttext/deselectall%28%29.md): Deprecated. Deselects the currently selected text in the web document.
- [selectedString](webdocumenttext/selectedstring%28%29.md): Deprecated. Returns the currently selected text in the web document as a string.
- [selectedAttributedString](webdocumenttext/selectedattributedstring%28%29.md): Deprecated. Returns the currently selected text in the web document as an attributed string.

### Text encoding

- [supportsTextEncoding](webdocumenttext/supportstextencoding%28%29.md): Deprecated. Returns a Boolean value that indicates whether the web document supports text encoding.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentSearching](webdocumentsearching.md): Deprecated. `WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.
