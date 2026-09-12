> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/loadsimulatedrequest(_:responsehtml:)](https://developer.apple.com/documentation/webkit/wkwebview/loadsimulatedrequest(_:responsehtml:))

# loadSimulatedRequest(\_:responseHTML:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Loads the web content from the HTML you provide as if the HTML were the response to the request.

## Declaration

```swift
func loadSimulatedRequest(_ request: URLRequest, responseHTML string: String) -> WKNavigation
```

## Parameters

- `request`: A URL request that specifies the base URL and other loading details the system uses to interpret the HTML you provide.
- `string`: The HTML code you provide in a string to use as the contents of the webpage.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

## See Also

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](load%28__%29-5siv6.md)
- [load(\_:)](load%28__%29-4xx8m.md)
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest(\_:allowingReadAccessTo:)](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL(\_:allowingReadAccessTo:)](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [isLoading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

# loadSimulatedRequest:responseHTMLString: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Loads the web content from the HTML you provide as if the HTML were the response to the request.

## Declaration

```objectivec
- (WKNavigation *) loadSimulatedRequest:(NSURLRequest *) request responseHTMLString:(NSString *) string;
```

## Parameters

- `request`: A URL request that specifies the base URL and other loading details the system uses to interpret the HTML you provide.
- `string`: The HTML code you provide in a string to use as the contents of the webpage.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

## See Also

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](load%28__%29-5siv6.md)
- [loadURL:](load%28__%29-4xx8m.md)
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest:allowingReadAccessToURL:](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadFileURL:allowingReadAccessToURL:](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.
