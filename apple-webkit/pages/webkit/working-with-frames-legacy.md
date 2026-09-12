> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/working-with-frames-legacy](https://developer.apple.com/documentation/webkit/working-with-frames-legacy)

# Working with Frames (legacy) (Swift)

**Framework:** WebKit  
**Kind:** API Collection

## Topics

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.

## See Also

### WebKit Legacy APIs

- [Document Object Models API (Legacy)](document-object-models-api-legacy.md)
- [Setting Up a Web View (Legacy)](setting-up-a-web-view-legacy.md)
- [Accessing Previous Webpages (Legacy)](accessing-previous-webpages-legacy.md)
- [Archiving Webpages (Legacy)](archiving-webpages-legacy.md)
- [Loading Resources (Legacy)](loading-resources-legacy.md)
- [Downloading Information (Legacy)](downloading-information-legacy.md)
- [Opening a File (Legacy)](opening-a-file-legacy.md)
- [Setting Policies (Legacy)](setting-policies-legacy.md)
- [Implementing Plugins (Legacy)](implementing-plugins-legacy.md)
- [Incorporating Scripts (Legacy)](incorporating-scripts-legacy.md)
- [Working With Document Web Views (Legacy)](working-with-document-web-views-legacy.md)

# Working with Frames (legacy) (Objective-C)

**Framework:** WebKit  
**Kind:** API Collection

## Topics

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.

## See Also

### WebKit Legacy APIs

- [Document Object Models API (Legacy)](document-object-models-api-legacy.md)
- [Setting Up a Web View (Legacy)](setting-up-a-web-view-legacy.md)
- [Accessing Previous Webpages (Legacy)](accessing-previous-webpages-legacy.md)
- [Archiving Webpages (Legacy)](archiving-webpages-legacy.md)
- [Loading Resources (Legacy)](loading-resources-legacy.md)
- [Downloading Information (Legacy)](downloading-information-legacy.md)
- [Opening a File (Legacy)](opening-a-file-legacy.md)
- [Setting Policies (Legacy)](setting-policies-legacy.md)
- [Implementing Plugins (Legacy)](implementing-plugins-legacy.md)
- [Incorporating Scripts (Legacy)](incorporating-scripts-legacy.md)
- [Working With Document Web Views (Legacy)](working-with-document-web-views-legacy.md)
