> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource](https://developer.apple.com/documentation/webkit/webdatasource)

# WebDataSource (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the  [registerClass(\_:representationClass:forMIMEType:)](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.

## Declaration

```swift
class WebDataSource
```

<a id="overview"></a>

## Overview

`WebDataSource` objects have an associated initial request, possibly a modified request, and a response object. Since the data source may be in the process of being loaded, you should check the state of a data source using [isLoading](webdatasource/isloading.md) before accessing its data. Use [data](webdatasource/data.md) to get the raw data. Use the [representation](webdatasource/representation.md) method to get the actual representation object and query it for more details.

## Topics

### Initializing an instance

- [init(request:)](webdatasource/init%28request_%29.md): Deprecated. initializes a data source with a URL request.

### Querying page data and state

- [data](webdatasource/data.md): Deprecated. The raw data that represents the data source’s content.
- [isLoading](webdatasource/isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](webdatasource/pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](webdatasource/representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](webdatasource/textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

### Getting the request and response

- [initialRequest](webdatasource/initialrequest.md): Deprecated. A reference to the original request that was used to load the web content.
- [request](webdatasource/request.md): Deprecated. The request that was used to create the data source.
- [response](webdatasource/response.md): Deprecated. The response for this data source.

### Getting the web frame

- [webFrame](webdatasource/webframe.md): Deprecated. The web frame that represents this data source.

### Getting an unreachable URL

- [unreachableURL](webdatasource/unreachableurl.md): Deprecated. The data source’s unreachable URL.

### Getting a web archive

- [webArchive](webdatasource/webarchive.md): Deprecated. A web archive representing the data source, its subresources, and subframes.

### Accessing subresources

- [mainResource](webdatasource/mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource(\_:)](webdatasource/addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresource(for:)](webdatasource/subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](webdatasource/subresources.md): Deprecated. The data source’s subresources that have finished downloading.

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

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.

# WebDataSource (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** macOS 10.3+ (deprecated in 10.14)

`WebDataSource` encapsulates the web content to be displayed in a web frame view. A `WebDataSource` object has a representation object, conforming to the `WebDocumentRepresentation` protocol, that holds the data in an appropriate format depending on the MIME type. You can extend WebKit to support new MIME types by implementing your own view and representation classes, and specifying the mapping between them using the  [registerViewClass:representationClass:forMIMEType:](webview-swift.class/registerclass%28__representationclass_formimetype_%29.md) `WebView` class method.

## Declaration

```objectivec
@interface WebDataSource : NSObject
```

<a id="overview"></a>

## Overview

`WebDataSource` objects have an associated initial request, possibly a modified request, and a response object. Since the data source may be in the process of being loaded, you should check the state of a data source using [loading](webdatasource/isloading.md) before accessing its data. Use [data](webdatasource/data.md) to get the raw data. Use the [representation](webdatasource/representation.md) method to get the actual representation object and query it for more details.

## Topics

### Initializing an instance

- [initWithRequest:](webdatasource/init%28request_%29.md): Deprecated. initializes a data source with a URL request.

### Querying page data and state

- [data](webdatasource/data.md): Deprecated. The raw data that represents the data source’s content.
- [loading](webdatasource/isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](webdatasource/pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](webdatasource/representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](webdatasource/textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

### Getting the request and response

- [initialRequest](webdatasource/initialrequest.md): Deprecated. A reference to the original request that was used to load the web content.
- [request](webdatasource/request.md): Deprecated. The request that was used to create the data source.
- [response](webdatasource/response.md): Deprecated. The response for this data source.

### Getting the web frame

- [webFrame](webdatasource/webframe.md): Deprecated. The web frame that represents this data source.

### Getting an unreachable URL

- [unreachableURL](webdatasource/unreachableurl.md): Deprecated. The data source’s unreachable URL.

### Getting a web archive

- [webArchive](webdatasource/webarchive.md): Deprecated. A web archive representing the data source, its subresources, and subframes.

### Accessing subresources

- [mainResource](webdatasource/mainresource.md): Deprecated. A`WebResource` object representing the data source.
- [addSubresource:](webdatasource/addsubresource%28__%29.md): Deprecated. Adds a resource to the data source’s list of subresources.
- [subresourceForURL:](webdatasource/subresource%28for_%29.md): Deprecated. Returns a subresource for the given URL.
- [subresources](webdatasource/subresources.md): Deprecated. The data source’s subresources that have finished downloading.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Working with Frames (Legacy)

- [WebFrame](webframe.md): Deprecated. A `WebFrame` object encapsulates the data displayed in a `WebFrameView` object. There is one `WebFrame` object per frame displayed in a `WebView`. An entire webpage is represented by a hierarchy of `WebFrame` objects in which the root object is called the **main frame**.
- [WebFrameView](webframeview.md): Deprecated. `WebFrameView` objects and their subviews display the web content contained in a frame. You never create instances of `WebFrameView` directly—`WebView` objects create and manage a hierarchy of `WebFrameView` objects, one for each frame. `WebFrameView` objects use a scroll view whose document view conforms to the [WebDocumentView](webdocumentview.md) protocol.
- [WebFrameLoadDelegate](webframeloaddelegate.md): Deprecated.
