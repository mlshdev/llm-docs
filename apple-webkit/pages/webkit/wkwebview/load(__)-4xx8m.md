> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/load(_:)-4xx8m](https://developer.apple.com/documentation/webkit/wkwebview/load(_:)-4xx8m)

# load(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func load(_ url: URL) -> WKNavigation?
```

## Parameters

- `url`: The URL to which to navigate.

<a id="return-value"></a>

## Return Value

A new navigation for the given request.

<a id="discussion"></a>

## Discussion

Navigates to a requested URL.

## See Also

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](load%28__%29-5siv6.md)
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest(\_:allowingReadAccessTo:)](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL(\_:allowingReadAccessTo:)](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest(\_:responseHTML:)](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [isLoading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

# loadURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (WKNavigation *) loadURL:(NSURL *) url;
```

## Parameters

- `url`: The URL to which to navigate.

<a id="return-value"></a>

## Return Value

A new navigation for the given request.

<a id="discussion"></a>

## Discussion

Navigates to a requested URL.

## See Also

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](load%28__%29-5siv6.md)
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest:allowingReadAccessToURL:](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL:allowingReadAccessToURL:](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest:responseHTMLString:](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [loading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.
