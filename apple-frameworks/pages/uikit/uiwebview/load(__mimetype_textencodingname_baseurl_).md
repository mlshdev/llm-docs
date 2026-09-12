> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/load(_:mimetype:textencodingname:baseurl:)](https://developer.apple.com/documentation/uikit/uiwebview/load(_:mimetype:textencodingname:baseurl:))

# load(\_:mimeType:textEncodingName:baseURL:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Sets the main page contents, MIME type, content encoding, and base URL.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
func load(_ data: Data, mimeType MIMEType: String, textEncodingName: String, baseURL: URL)
```

## Parameters

- `data`: The content for the main page.
- `MIMEType`: The MIME type of the content.
- `textEncodingName`: The IANA encoding name as in `utf-8` or `utf-16`.
- `baseURL`: The base URL for the content.

## See Also

### Loading content

- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest(\_:)](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [isLoading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# loadData:MIMEType:textEncodingName:baseURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Sets the main page contents, MIME type, content encoding, and base URL.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) loadData:(NSData *) data MIMEType:(NSString *) MIMEType textEncodingName:(NSString *) textEncodingName baseURL:(NSURL *) baseURL;
```

## Parameters

- `data`: The content for the main page.
- `MIMEType`: The MIME type of the content.
- `textEncodingName`: The IANA encoding name as in `utf-8` or `utf-16`.
- `baseURL`: The base URL for the content.

## See Also

### Loading content

- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest:](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [loading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
