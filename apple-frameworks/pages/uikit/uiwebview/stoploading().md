> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/stoploading()](https://developer.apple.com/documentation/uikit/uiwebview/stoploading())

# stopLoading() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0)

Stops the loading of any web content managed by the receiver.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```swift
func stopLoading()
```

<a id="Discussion"></a>

## Discussion

Stops any content in the process of being loaded by the main frame or any of its children frames. Does nothing if no content is being loaded.

## See Also

### Loading content

- [load(\_:mimeType:textEncodingName:baseURL:)](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString(\_:baseURL:)](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest(\_:)](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [isLoading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [reload()](reload%28%29.md): Deprecated. Reloads the current page.

# stopLoading (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0)

Stops the loading of any web content managed by the receiver.

> For more information, see [UIWebView](../uiwebview.md).

## Declaration

```objectivec
- (void) stopLoading;
```

<a id="Discussion"></a>

## Discussion

Stops any content in the process of being loaded by the main frame or any of its children frames. Does nothing if no content is being loaded.

## See Also

### Loading content

- [loadData:MIMEType:textEncodingName:baseURL:](load%28__mimetype_textencodingname_baseurl_%29.md): Deprecated. Sets the main page contents, MIME type, content encoding, and base URL.
- [loadHTMLString:baseURL:](loadhtmlstring%28__baseurl_%29.md): Deprecated. Sets the main page content and base URL.
- [loadRequest:](loadrequest%28__%29.md): Deprecated. Connects to a given URL by initiating an asynchronous client request.
- [request](request.md): Deprecated. The URL request identifying the location of the content to load.
- [loading](isloading.md): Deprecated. A Boolean value indicating whether the receiver is done loading content.
- [reload](reload%28%29.md): Deprecated. Reloads the current page.
