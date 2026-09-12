> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebview/loadfileurl(_:allowingreadaccessto:)](https://developer.apple.com/documentation/webkit/wkwebview/loadfileurl(_:allowingreadaccessto:))

# loadFileURL(\_:allowingReadAccessTo:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Loads the web content from the specified file and navigates to it.

## Declaration

```swift
func loadFileURL(_ URL: URL, allowingReadAccessTo readAccessURL: URL) -> WKNavigation?
```

## Parameters

- `URL`: The URL of a file that contains web content. This URL must be a file-based URL.
- `readAccessURL`: The URL of a file or directory containing web content that you grant the system permission to read. This URL must be a file-based URL and must not be empty. To prevent WebKit from reading any other content, specify the same value as the URL parameter. To read additional files related to the content file, specify a directory.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

<a id="Discussion"></a>

## Discussion

This method sets the source of this load request for app activity data to [NSURLRequest.Attribution.developer](https://developer.apple.com/documentation/foundation/nsurlrequest/attribution-swift.enum/developer). To specify the source of this load, use [loadFileRequest(\_:allowingReadAccessTo:)](loadfilerequest%28__allowingreadaccessto_%29.md) instead.

## See Also

### Loading web content

- [load(\_:mimeType:characterEncodingName:baseURL:)](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [load(\_:)](load%28__%29-5siv6.md)
- [load(\_:)](load%28__%29-4xx8m.md)
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest(\_:allowingReadAccessTo:)](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadSimulatedRequest(\_:response:responseData:)](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest(\_:responseHTML:)](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [isLoading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.

# loadFileURL:allowingReadAccessToURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Loads the web content from the specified file and navigates to it.

## Declaration

```objectivec
- (WKNavigation *) loadFileURL:(NSURL *) URL allowingReadAccessToURL:(NSURL *) readAccessURL;
```

## Parameters

- `URL`: The URL of a file that contains web content. This URL must be a file-based URL.
- `readAccessURL`: The URL of a file or directory containing web content that you grant the system permission to read. This URL must be a file-based URL and must not be empty. To prevent WebKit from reading any other content, specify the same value as the URL parameter. To read additional files related to the content file, specify a directory.

<a id="return-value"></a>

## Return Value

A new navigation object you use to track the loading progress of the request.

<a id="Discussion"></a>

## Discussion

This method sets the source of this load request for app activity data to [NSURLRequestAttributionDeveloper](https://developer.apple.com/documentation/foundation/nsurlrequest/attribution-swift.enum/developer). To specify the source of this load, use [loadFileRequest:allowingReadAccessToURL:](loadfilerequest%28__allowingreadaccessto_%29.md) instead.

## See Also

### Loading web content

- [loadData:MIMEType:characterEncodingName:baseURL:](load%28__mimetype_characterencodingname_baseurl_%29.md): Loads the content of the specified data object and navigates to it.
- [loadRequest:](load%28__%29-5siv6.md)
- [loadURL:](load%28__%29-4xx8m.md)
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Loads the contents of the specified HTML string and navigates to it.
- [loadFileRequest:allowingReadAccessToURL:](loadfilerequest%28__allowingreadaccessto_%29.md): Loads the web content from the file the URL request object specifies and navigates to that content.
- [loadSimulatedRequest:response:responseData:](loadsimulatedrequest%28__response_responsedata_%29.md): Loads the web content from the data you provide as if the data were the response to the request.
- [loadSimulatedRequest:responseHTMLString:](loadsimulatedrequest%28__responsehtml_%29.md): Loads the web content from the HTML you provide as if the HTML were the response to the request.
- [loading](isloading.md): A Boolean value that indicates whether the view is currently loading content.
- [estimatedProgress](estimatedprogress.md): An estimate of what fraction of the current navigation has been loaded.
