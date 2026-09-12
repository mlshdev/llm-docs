> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/isloading](https://developer.apple.com/documentation/webkit/wkwebview/isloading)

# isLoading (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the view is currently loading content.

## Declaration

```swift
var isLoading: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Set to `true` if the receiver is still loading content; otherwise, `false.` The [WKWebView](../wkwebview.md) class is key-value observing (KVO) compliant for this property.

## See Also

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](load%28__%29-5siv6.md)
- [load(\_:)](load%28__%29-4xx8m.md)
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest(\_:allowingReadAccessTo:)](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL(\_:allowingReadAccessTo:)](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest(\_:responseHTML:)](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

# loading (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

A Boolean value that indicates whether the view is currently loading content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLoading) BOOL loading;
```

<a id="Discussion"></a>

## Discussion

Set to `true` if the receiver is still loading content; otherwise, `false.` The [WKWebView](../wkwebview.md) class is key-value observing (KVO) compliant for this property.

## See Also

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](load%28__%29-5siv6.md)
- [loadURL:](load%28__%29-4xx8m.md)
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest:allowingReadAccessToURL:](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL:allowingReadAccessToURL:](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest:responseHTMLString:](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.
