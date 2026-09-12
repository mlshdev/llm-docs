> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/reload()](https://developer.apple.com/documentation/webkit/webframe/reload())

# reload() (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Reloads the initial request passed as an argument to [load(\_:)](load%28__%29-47p2s.md).

## Declaration

```swift
func reload()
```

## See Also

### Loading Content

- [load(\_:)](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString(\_:baseURL:forUnreachableURL:)](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [load(\_:)](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

# reload (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Reloads the initial request passed as an argument to [loadRequest:](load%28__%29-47p2s.md).

## Declaration

```objectivec
- (void) reload;
```

## See Also

### Loading Content

- [loadRequest:](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reloadFromOrigin](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadAlternateHTMLString:baseURL:forUnreachableURL:](loadalternatehtmlstring%28__baseurl_forunreachableurl_%29.md): Deprecated. Loads alternate content for a frame whose URL is unreachable.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadArchive:](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.
