> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/loadhtmlstring(_:baseurl:)](https://developer.apple.com/documentation/webkit/webframe/loadhtmlstring(_:baseurl:))

# loadHTMLString(\_:baseURL:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the main page contents and base URL.

## Declaration

```swift
func loadHTMLString(_ string: String!, baseURL URL: URL!)
```

## Parameters

- `string`: The string to use as the main page for the document.

  Since the string is treated as a webpage with UTF-8 encoding, the default encoding for any script elements referenced by the HTML is also UTF-8. To avoid this, include a character set attribute on the script element.
- `URL`: A file that is used to resolve relative URLs within the document.

## See Also

### Loading Content

- [load(\_:)](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload()](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [load(\_:)](load%28__%29-47p2s.md).
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [load(\_:)](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

# loadHTMLString:baseURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Sets the main page contents and base URL.

## Declaration

```objectivec
- (void) loadHTMLString:(NSString *) string baseURL:(NSURL *) URL;
```

## Parameters

- `string`: The string to use as the main page for the document.

  Since the string is treated as a webpage with UTF-8 encoding, the default encoding for any script elements referenced by the HTML is also UTF-8. To avoid this, include a character set attribute on the script element.
- `URL`: A file that is used to resolve relative URLs within the document.

## See Also

### Loading Content

- [loadRequest:](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [loadRequest:](load%28__%29-47p2s.md).
- [reloadFromOrigin](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString:baseURL:forUnreachableURL:](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadArchive:](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.
