> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/loadrequest(_:)](https://developer.apple.com/documentation/uikit/uiwebview/loadrequest(_:))

# loadRequest(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Connects to a given URL by initiating an asynchronous client request.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
func loadRequest(_ request: URLRequest)
```

## Parameters

- `request`: A URL request identifying the location of the content to load.

<a id="Discussion"></a>

## Discussion

Don’t use this method to load local HTML files; instead, use [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md). To stop this load, use the [stopLoading()](stoploading%28%29.md) method. To see whether the receiver is done loading the content, use the [isLoading](isloading.md) property.

## See Also

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [isLoading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# loadRequest: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Connects to a given URL by initiating an asynchronous client request.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) loadRequest:(NSURLRequest *) request;
```

## Parameters

- `request`: A URL request identifying the location of the content to load.

<a id="Discussion"></a>

## Discussion

Don’t use this method to load local HTML files; instead, use [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md). To stop this load, use the [stopLoading](stoploading%28%29.md) method. To see whether the receiver is done loading the content, use the [loading](isloading.md) property.

## See Also

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [loading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
