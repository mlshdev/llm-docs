> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/load(_:)-47p2s](https://developer.apple.com/documentation/webkit/webframe/load(_:)-47p2s)

# load(\_:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Connects to a given URL by initiating an asynchronous client request.

## Declaration

```swift
func load(_ request: URLRequest!)
```

## Parameters

- `request`: A client request.

<a id="Discussion"></a>

## Discussion

Creates a provisional data source that will transition to a committed data source once any data has been received. Use the [dataSource](datasource.md) method to check if a committed data source is available, and the [stopLoading()](stoploading%28%29.md) method to stop the load. This method is typically invoked on the main frame.

## See Also

### Loading Content

- [reload()](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [load(\_:)](load%28__%29-47p2s.md).
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [load(\_:)](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

# loadRequest: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Connects to a given URL by initiating an asynchronous client request.

## Declaration

```objectivec
- (void) loadRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: A client request.

<a id="Discussion"></a>

## Discussion

Creates a provisional data source that will transition to a committed data source once any data has been received. Use the [dataSource](datasource.md) method to check if a committed data source is available, and the [stopLoading](stoploading%28%29.md) method to stop the load. This method is typically invoked on the main frame.

## See Also

### Loading Content

- [reload](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [loadRequest:](load%28__%29-47p2s.md).
- [reloadFromOrigin](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString:baseURL:forUnreachableURL:](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadArchive:](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.
