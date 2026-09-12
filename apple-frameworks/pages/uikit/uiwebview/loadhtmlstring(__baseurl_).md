> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/loadhtmlstring(_:baseurl:)](https://developer.apple.com/documentation/uikit/uiwebview/loadhtmlstring(_:baseurl:))

# loadHTMLString(\_:baseURL:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Sets the main page content and base URL.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
func loadHTMLString(_ string: String, baseURL: URL?)
```

## Parameters

- `string`: The content for the main page.
- `baseURL`: The base URL for the content.

<a id="Discussion"></a>

## Discussion

To help you avoid being vulnerable to security attacks, be sure to use this method to load local HTML files; don’t use [loadRequest(\_:)](loadrequest%28__%29.md).

## See Also

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadRequest(\_:)](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [isLoading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading()](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# loadHTMLString:baseURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Sets the main page content and base URL.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) loadHTMLString:(NSString *) string baseURL:(NSURL *) baseURL;
```

## Parameters

- `string`: The content for the main page.
- `baseURL`: The base URL for the content.

<a id="Discussion"></a>

## Discussion

To help you avoid being vulnerable to security attacks, be sure to use this method to load local HTML files; don’t use [loadRequest:](loadrequest%28__%29.md).

## See Also

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadRequest:](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [loading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [stopLoading](stoploading%28%29.md): Deprecated. Stops the loading of any web content managed by the receiver.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
