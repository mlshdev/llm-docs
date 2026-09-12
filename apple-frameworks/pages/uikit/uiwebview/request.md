> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/request](https://developer.apple.com/documentation/uikit/uiwebview/request)

# request (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

The URL request identifying the location of the content to load.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
var request: URLRequest? { get }
```

## See Also

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest(\_:)](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [isLoading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# request (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

The URL request identifying the location of the content to load.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSURLRequest * request;
```

## See Also

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest:](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [loading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
