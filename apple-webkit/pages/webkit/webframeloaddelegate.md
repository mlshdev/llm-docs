> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframeloaddelegate](https://developer.apple.com/documentation/webkit/webframeloaddelegate)

# WebFrameLoadDelegate (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```swift
protocol WebFrameLoadDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [webView(\_:didCancelClientRedirectFor:)](webframeloaddelegate/webview%28__didcancelclientredirectfor_%29.md): Deprecated. Called when a client redirect is cancelled.
- [webView(\_:didChangeLocationWithinPageFor:)](webframeloaddelegate/webview%28__didchangelocationwithinpagefor_%29.md): Deprecated. Called when the scroll position within a frame changes.
- [webView(\_:didClearWindowObject:for:)](webframeloaddelegate/webview%28__didclearwindowobject_for_%29.md): Deprecated. Called when the JavaScript window object in a frame is ready for loading.
- [webView(\_:didCommitLoadFor:)](webframeloaddelegate/webview%28__didcommitloadfor_%29.md): Deprecated. Called when content starts arriving for a page load.
- [webView(\_:didCreateJavaScriptContext:for:)](webframeloaddelegate/webview%28__didcreatejavascriptcontext_for_%29.md): Deprecated. Notifies the delegate that a new JavaScript context has been created.
- [webView(\_:didFailLoadWithError:for:)](webframeloaddelegate/webview%28__didfailloadwitherror_for_%29.md): Deprecated. Called when an error occurs loading a committed data source.
- [webView(\_:didFailProvisionalLoadWithError:for:)](webframeloaddelegate/webview%28__didfailprovisionalloadwitherror_for_%29.md): Deprecated. Called if an error occurs when starting to load data for a page.
- [webView(\_:didFinishLoadFor:)](webframeloaddelegate/webview%28__didfinishloadfor_%29.md): Deprecated. Called when a page load completes.
- [webView(\_:didReceiveIcon:for:)](webframeloaddelegate/webview%28__didreceiveicon_for_%29.md): Deprecated. Called when a page icon changes.
- [webView(\_:didReceiveServerRedirectForProvisionalLoadFor:)](webframeloaddelegate/webview%28__didreceiveserverredirectforprovisionalloadfor_%29.md): Deprecated. Called when a provisional data source for a frame receives a server redirect.
- [webView(\_:didReceiveTitle:for:)](webframeloaddelegate/webview%28__didreceivetitle_for_%29.md): Deprecated. Called when the page title of a frame loads or changes.
- [webView(\_:didStartProvisionalLoadFor:)](webframeloaddelegate/webview%28__didstartprovisionalloadfor_%29.md): Deprecated. Called when a page load is in progress in a given frame.
- [webView(\_:willClose:)](webframeloaddelegate/webview%28__willclose_%29.md): Deprecated. Called when a frame will be closed.
- [webView(\_:willPerformClientRedirectTo:delay:fire:for:)](webframeloaddelegate/webview%28__willperformclientredirectto_delay_fire_for_%29.md): Deprecated. Called when a frame receives a client redirect and before it is fired.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.

# WebFrameLoadDelegate (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** macOS 10.3+ (deprecated in 10.14)

## Declaration

```objectivec
@protocol WebFrameLoadDelegate <NSObject>
```

## Topics

### Instance Methods

- [webView:didCancelClientRedirectForFrame:](webframeloaddelegate/webview%28__didcancelclientredirectfor_%29.md): Deprecated. Called when a client redirect is cancelled.
- [webView:didChangeLocationWithinPageForFrame:](webframeloaddelegate/webview%28__didchangelocationwithinpagefor_%29.md): Deprecated. Called when the scroll position within a frame changes.
- [webView:didClearWindowObject:forFrame:](webframeloaddelegate/webview%28__didclearwindowobject_for_%29.md): Deprecated. Called when the JavaScript window object in a frame is ready for loading.
- [webView:didCommitLoadForFrame:](webframeloaddelegate/webview%28__didcommitloadfor_%29.md): Deprecated. Called when content starts arriving for a page load.
- [webView:didCreateJavaScriptContext:forFrame:](webframeloaddelegate/webview%28__didcreatejavascriptcontext_for_%29.md): Deprecated. Notifies the delegate that a new JavaScript context has been created.
- [webView:didFailLoadWithError:forFrame:](webframeloaddelegate/webview%28__didfailloadwitherror_for_%29.md): Deprecated. Called when an error occurs loading a committed data source.
- [webView:didFailProvisionalLoadWithError:forFrame:](webframeloaddelegate/webview%28__didfailprovisionalloadwitherror_for_%29.md): Deprecated. Called if an error occurs when starting to load data for a page.
- [webView:didFinishLoadForFrame:](webframeloaddelegate/webview%28__didfinishloadfor_%29.md): Deprecated. Called when a page load completes.
- [webView:didReceiveIcon:forFrame:](webframeloaddelegate/webview%28__didreceiveicon_for_%29.md): Deprecated. Called when a page icon changes.
- [webView:didReceiveServerRedirectForProvisionalLoadForFrame:](webframeloaddelegate/webview%28__didreceiveserverredirectforprovisionalloadfor_%29.md): Deprecated. Called when a provisional data source for a frame receives a server redirect.
- [webView:didReceiveTitle:forFrame:](webframeloaddelegate/webview%28__didreceivetitle_for_%29.md): Deprecated. Called when the page title of a frame loads or changes.
- [webView:didStartProvisionalLoadForFrame:](webframeloaddelegate/webview%28__didstartprovisionalloadfor_%29.md): Deprecated. Called when a page load is in progress in a given frame.
- [webView:willCloseFrame:](webframeloaddelegate/webview%28__willclose_%29.md): Deprecated. Called when a frame will be closed.
- [webView:willPerformClientRedirectToURL:delay:fireDate:forFrame:](webframeloaddelegate/webview%28__willperformclientredirectto_delay_fire_for_%29.md): Deprecated. Called when a frame receives a client redirect and before it is fired.
- [webView:windowScriptObjectAvailable:](webframeloaddelegate/webview_windowscriptobjectavailable_.md): Deprecated. Called when a frame’s scripting object for a page is available. Use the [webView:didClearWindowObject:forFrame:](webframeloaddelegate/webview%28__didclearwindowobject_for_%29.md) method instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
