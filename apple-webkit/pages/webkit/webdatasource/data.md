> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/data](https://developer.apple.com/documentation/webkit/webdatasource/data)

# data (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The raw data that represents the data source’s content.

## Declaration

```swift
var data: Data! { get }
```

<a id="Discussion"></a>

## Discussion

The format of the data is dependent on the data source’s MIME type (obtained from the response).

## See Also

### Querying page data and state

- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

# data (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The raw data that represents the data source’s content.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSData * data;
```

<a id="Discussion"></a>

## Discussion

The format of the data is dependent on the data source’s MIME type (obtained from the response).

## See Also

### Querying page data and state

- [loading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.
