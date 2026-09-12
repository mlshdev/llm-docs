> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/load(_:mimetype:textencodingname:baseurl:)](https://developer.apple.com/documentation/webkit/webframe/load(_:mimetype:textencodingname:baseurl:))

# load(\_:mimeType:textEncodingName:baseURL:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the main page contents, MIME type, content encoding, and base URL.

## Declaration

```swift
func load(_ data: Data!, mimeType MIMEType: String!, textEncodingName encodingName: String!, baseURL URL: URL!)
```

## Parameters

- `data`: The data to use for the main page of the document.
- `MIMEType`: The MIME type of the data.
- `encodingName`: The IANA encoding name (for example, “utf-8” or “utf-16”).
- `URL`: A file that is used to resolve relative URLs within the document.

## See Also

### Loading Content

- [load(\_:)](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload()](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [load(\_:)](load%28__%29-47p2s.md).
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [load(\_:)](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

# loadData:MIMEType:textEncodingName:baseURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the main page contents, MIME type, content encoding, and base URL.

## Declaration

```objectivec
- (void) loadData:(NSData *) data MIMEType:(NSString *) MIMEType textEncodingName:(NSString *) encodingName baseURL:(NSURL *) URL;
```

## Parameters

- `data`: The data to use for the main page of the document.
- `MIMEType`: The MIME type of the data.
- `encodingName`: The IANA encoding name (for example, “utf-8” or “utf-16”).
- `URL`: A file that is used to resolve relative URLs within the document.

## See Also

### Loading Content

- [loadRequest:](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [loadRequest:](load%28__%29-47p2s.md).
- [reloadFromOrigin](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString:baseURL:forUnreachableURL:](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [loadArchive:](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.
