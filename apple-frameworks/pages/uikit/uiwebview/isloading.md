> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/isloading](https://developer.apple.com/documentation/uikit/uiwebview/isloading)

# isLoading (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver is done loading content.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
var isLoading: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the receiver is still loading content; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest(\_:)](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# loading (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

A Boolean value indicating whether the receiver is done loading content.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLoading) BOOL loading;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the receiver is still loading content; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest:](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
