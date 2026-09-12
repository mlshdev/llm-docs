> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe](https://developer.apple.com/documentation/webkit/webframe)

# WebFrame (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.

## Declaration

```swift
class WebFrame
```

<a id="overview"></a>

## Overview

Each `WebFrame` also has a `WebDataSource` object that manages the loading of frame content. You use the [load(\_:)](webframe/load%28__%29-47p2s.md) method to initiate an asynchronous client request which will create a provisional data source. The provisional data source will transition to a committed data source once any data has been received.

There are some special, predefined, frame names that you can use when referring to or finding a `WebFrame`. Some of the predefined frame names are: “\_self”, “\_current”, “\_parent”, and “\_top.” See [findNamed(\_:)](webframe/findnamed%28__%29.md) for a description of their meaning. Frame names may also be specified in the HTML source, or set by clients.

However, the group name is an arbitrary identifier used to group related frames. For example, JavaScript running in a frame can access any other frame in the same group. It’s up to the application how it chooses to scope related frames.

## Topics

### Initializing Frames

- [init(name:webFrameView:webView:)](webframe/init%28name_webframeview_webview_%29.md): Deprecated. Initializes the receiver with a frame name, web frame view, and controlling web view.

### Loading Content

- [load(\_:)](webframe/load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload()](webframe/reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [load(\_:)](webframe/load%28__%29-47p2s.md).
- [reloadFromOrigin()](webframe/reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](webframe/stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)](webframe/loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString(\_:baseURL:)](webframe/loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [load(\_:mimeType:textEncodingName:baseURL:)](webframe/load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [load(\_:)](webframe/load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

### Getting the Data Source

- [dataSource](webframe/datasource.md): Deprecated. The committed data source.
- [provisionalDataSource](webframe/provisionaldatasource.md): Deprecated. The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.

### Getting Related Frames and Views

- [parent](webframe/parent.md): Deprecated. The web frame’s parent web frame.
- [childFrames](webframe/childframes.md): Deprecated. The frames of the web frame’s immediate children.
- [frameView](webframe/frameview.md): Deprecated. The web frame’s view object.
- [webView](webframe/webview.md): Deprecated. The view object that manages the web frame.

### Finding Frames

- [findNamed(\_:)](webframe/findnamed%28__%29.md): Deprecated. Returns a web frame that matches the given name.
- [name](webframe/name.md): Deprecated. The web frame’s name.

### Getting DOM Objects

- [domDocument](webframe/domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](webframe/frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](webframe/globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](webframe/javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](webframe/windowobject.md): Deprecated. The JavaScript window object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Working with Frames (Legacy)

- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.

# WebFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.

## Declaration

```objectivec
@interface WebFrame : NSObject
```

<a id="overview"></a>

## Overview

Each `WebFrame` also has a `WebDataSource` object that manages the loading of frame content. You use the [loadRequest:](webframe/load%28__%29-47p2s.md) method to initiate an asynchronous client request which will create a provisional data source. The provisional data source will transition to a committed data source once any data has been received.

There are some special, predefined, frame names that you can use when referring to or finding a `WebFrame`. Some of the predefined frame names are: “\_self”, “\_current”, “\_parent”, and “\_top.” See [findFrameNamed:](webframe/findnamed%28__%29.md) for a description of their meaning. Frame names may also be specified in the HTML source, or set by clients.

However, the group name is an arbitrary identifier used to group related frames. For example, JavaScript running in a frame can access any other frame in the same group. It’s up to the application how it chooses to scope related frames.

## Topics

### Initializing Frames

- [initWithName:webFrameView:webView:](webframe/init%28name_webframeview_webview_%29.md): Deprecated. Initializes the receiver with a frame name, web frame view, and controlling web view.

### Loading Content

- [loadRequest:](webframe/load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload](webframe/reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [loadRequest:](webframe/load%28__%29-47p2s.md).
- [reloadFromOrigin](webframe/reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](webframe/stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString:baseURL:forUnreachableURL:](webframe/loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString:baseURL:](webframe/loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [loadData:MIMEType:textEncodingName:baseURL:](webframe/load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadArchive:](webframe/load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

### Getting the Data Source

- [dataSource](webframe/datasource.md): Deprecated. The committed data source.
- [provisionalDataSource](webframe/provisionaldatasource.md): Deprecated. The provisional data source, or `nil` if either a load request is not in progress or a load request has completed.

### Getting Related Frames and Views

- [parentFrame](webframe/parent.md): Deprecated. The web frame’s parent web frame.
- [childFrames](webframe/childframes.md): Deprecated. The frames of the web frame’s immediate children.
- [frameView](webframe/frameview.md): Deprecated. The web frame’s view object.
- [webView](webframe/webview.md): Deprecated. The view object that manages the web frame.

### Finding Frames

- [findFrameNamed:](webframe/findnamed%28__%29.md): Deprecated. Returns a web frame that matches the given name.
- [name](webframe/name.md): Deprecated. The web frame’s name.

### Getting DOM Objects

- [DOMDocument](webframe/domdocument.md): Deprecated. The web frame’s DOM document.
- [frameElement](webframe/frameelement.md): Deprecated. The web view’s DOM frame element.
- [globalContext](webframe/globalcontext.md): Deprecated. The global JavaScript execution context for bridging between the WebKit and JavaScriptCore C API.
- [javaScriptContext](webframe/javascriptcontext.md): Deprecated. The frame’s global JavaScript execution context.
- [windowObject](webframe/windowobject.md): Deprecated. The JavaScript window object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [WebKit Objective-C Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/DisplayWebContent/DisplayWebContent.html#//apple_ref/doc/uid/10000164i)

### Working with Frames (Legacy)

- [WebDataSource](webdatasource.md): Deprecated. `WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.
