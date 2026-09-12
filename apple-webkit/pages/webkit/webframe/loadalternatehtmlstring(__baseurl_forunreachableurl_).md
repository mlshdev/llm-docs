> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webframe/loadalternatehtmlstring(_:baseurl:forunreachableurl:)](https://developer.apple.com/documentation/webkit/webframe/loadalternatehtmlstring(_:baseurl:forunreachableurl:))

# loadAlternateHTMLString(\_:baseURL:forUnreachableURL:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads alternate content for a frame whose URL is unreachable.

## Declaration

```swift
func loadAlternateHTMLString(_ string: String!, baseURL: URL!, forUnreachableURL unreachableURL: URL!)
```

## Parameters

- `string`: The string to use as the main page for the document.
- `baseURL`: A file that is used to resolve relative URLs within the document.
- `unreachableURL`: The URL for the alternate page content.

<a id="Discussion"></a>

## Discussion

Use this method to display page-level loading errors in a web view. Typically, a `WebFrameLoadDelegate` or `WebPolicyDelegate` object invokes this method from these methods: `webView:didFailProvisionalLoadWithError:forFrame:` (`WebFrameLoadDelegate`), webView:decidePolicyForMIMEType:request:frame:decisionListener: (`WebPolicyDelegate`), or [webView(\_:unableToImplementPolicyWithError:frame:)](../webpolicydelegate/webview%28__unabletoimplementpolicywitherror_frame_%29.md) (`WebPolicyDelegate`). If invoked from one of these methods, the back-forward list is maintained.

## See Also

### Loading Content

- [load(\_:)](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload()](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [load(\_:)](load%28__%29-47p2s.md).
- [reloadFromOrigin()](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [load(\_:)](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.

# loadAlternateHTMLString:baseURL:forUnreachableURL: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Loads alternate content for a frame whose URL is unreachable.

## Declaration

```objectivec
- (void) loadAlternateHTMLString:(NSString *) string baseURL:(NSURL *) baseURL forUnreachableURL:(NSURL *) unreachableURL;
```

## Parameters

- `string`: The string to use as the main page for the document.
- `baseURL`: A file that is used to resolve relative URLs within the document.
- `unreachableURL`: The URL for the alternate page content.

<a id="Discussion"></a>

## Discussion

Use this method to display page-level loading errors in a web view. Typically, a `WebFrameLoadDelegate` or `WebPolicyDelegate` object invokes this method from these methods: `webView:didFailProvisionalLoadWithError:forFrame:` (`WebFrameLoadDelegate`), webView:decidePolicyForMIMEType:request:frame:decisionListener: (`WebPolicyDelegate`), or [webView:unableToImplementPolicyWithError:frame:](../webpolicydelegate/webview%28__unabletoimplementpolicywitherror_frame_%29.md) (`WebPolicyDelegate`). If invoked from one of these methods, the back-forward list is maintained.

## See Also

### Loading Content

- [loadRequest:](load%28__%29-47p2s.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [reload](reload%28%29.md): Deprecated. Reloads the initial request passed as an argument to [loadRequest:](load%28__%29-47p2s.md).
- [reloadFromOrigin](reloadfromorigin%28%29.md): Deprecated. Performs an end-to-end revalidation using cache-validating conditionals if possible.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops any pending loads on the receiver’s data source, and those of its children.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page contents and base URL.
- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadArchive:](load%28__%29-6wkx6.md): Deprecated. Loads an archive into the web frame.
