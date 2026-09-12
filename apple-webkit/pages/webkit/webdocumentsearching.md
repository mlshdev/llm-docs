> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdocumentsearching](https://developer.apple.com/documentation/webkit/webdocumentsearching)

# WebDocumentSearching (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.

## Declaration

```swift
protocol WebDocumentSearching : NSObjectProtocol
```

## Topics

### Searching a document

- [search(for:direction:caseSensitive:wrap:)](webdocumentsearching/search%28for_direction_casesensitive_wrap_%29.md): Deprecated. Searches for a string in a given direction from the current position.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.

# WebDocumentSearching (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDocumentSearching` is an optional protocol for document view objects that support searching. Classes that adopt this protocol should also adopt `WebDocumentView` and inherit from `NSView`.

## Declaration

```objectivec
@protocol WebDocumentSearching <NSObject>
```

## Topics

### Searching a document

- [searchFor:direction:caseSensitive:wrap:](webdocumentsearching/search%28for_direction_casesensitive_wrap_%29.md): Deprecated. Searches for a string in a given direction from the current position.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working With Document Web Views (Legacy)

- [WebDocumentRepresentation](webdocumentrepresentation.md): Deprecated. This protocol is adopted by document representation classes that handle specific MIME types. You can implement your own document view classes and document representation classes to render data for specific MIME types, and register those classes using the `WebFrame` [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method.
- [WebDocumentText](webdocumenttext.md): Deprecated. `WebDocumentText` is an optional protocol for document view objects that display text. This protocol defines methods for accessing document content as strings, and methods for text selection. Classes that adopt this protocol should also adopt [WebDocumentView](webdocumentview.md) and inherit from `NSView`.
- [WebDocumentView](webdocumentview.md): Deprecated. This protocol is adopted by the document view of a `WebFrameView`. You can extend WebKit to support additional MIME types by implementing your own document view and document representation classes to render data for specific MIME types. You register those classes using the WebFrame [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) method. Classes that adopt this protocol are expected to be subclasses of `NSView`.
