> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/loadfilerequest(_:allowingreadaccessto:)](https://developer.apple.com/documentation/webkit/wkwebview/loadfilerequest(_:allowingreadaccessto:))

# loadFileRequest(\_:allowingReadAccessTo:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Loads the web content from the file the URL request object specifies and navigates to that content.

## Declaration

```swift
func loadFileRequest(_ request: URLRequest, allowingReadAccessTo readAccessURL: URL) -> WKNavigation
```

## Parameters

- `request`: A URL request that specifies the file to display. The URL in this request must be a file-based URL.
- `readAccessURL`: The URL of a file or directory containing web content that you grant the system permission to read. This URL must be a file-based URL and must not be empty. To prevent WebKit from reading any other content, specify the same value as the URL parameter. To read additional files related to the content file, specify a directory.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

<a id="Discussion"></a>

## Discussion

Provide the source of this load request for app activity data by setting the [attribution](https://developer.apple.com/documentation/foundation/urlrequest/attribution-swift.property) parameter on your request.

## See Also

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](load%28__%29-5siv6.md)
- [load(\_:)](load%28__%29-4xx8m.md)
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileURL(\_:allowingReadAccessTo:)](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest(\_:responseHTML:)](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [isLoading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

# loadFileRequest:allowingReadAccessToURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Loads the web content from the file the URL request object specifies and navigates to that content.

## Declaration

```objectivec
- (WKNavigation *) loadFileRequest:(NSURLRequest *) request allowingReadAccessToURL:(NSURL *) readAccessURL;
```

## Parameters

- `request`: A URL request that specifies the file to display. The URL in this request must be a file-based URL.
- `readAccessURL`: The URL of a file or directory containing web content that you grant the system permission to read. This URL must be a file-based URL and must not be empty. To prevent WebKit from reading any other content, specify the same value as the URL parameter. To read additional files related to the content file, specify a directory.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

<a id="Discussion"></a>

## Discussion

Provide the source of this load request for app activity data by setting the [attribution](https://developer.apple.com/documentation/foundation/urlrequest/attribution-swift.property) parameter on your request.

## See Also

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](load%28__%29-5siv6.md)
- [loadURL:](load%28__%29-4xx8m.md)
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileURL:allowingReadAccessToURL:](loadfileurl%28__allowingreadaccessto_%29.md): Loads the web content from the specified file and navigates to it.
- [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest:responseHTMLString:](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [loading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.
