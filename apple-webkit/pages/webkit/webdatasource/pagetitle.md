> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/pagetitle](https://developer.apple.com/documentation/webkit/webdatasource/pagetitle)

# pageTitle (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The title of the data source’s page.

## Declaration

```swift
var pageTitle: String! { get }
```

<a id="Discussion"></a>

## Discussion

The associated web view notifies its frame load delegate when the page title is loaded by invoking the `webView:didReceiveTitle:forFrame:` delegate method.

`nil` if the page has no title or the page title hasn’t been loaded yet.

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

# pageTitle (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The title of the data source’s page.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * pageTitle;
```

<a id="Discussion"></a>

## Discussion

The associated web view notifies its frame load delegate when the page title is loaded by invoking the `webView:didReceiveTitle:forFrame:` delegate method.

`nil` if the page has no title or the page title hasn’t been loaded yet.

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [loading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.
