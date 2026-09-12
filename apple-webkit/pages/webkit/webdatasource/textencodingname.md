> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/textencodingname](https://developer.apple.com/documentation/webkit/webdatasource/textencodingname)

# textEncodingName (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The text encoding for the data source’s web view, if set, or the text encoding of the response.

## Declaration

```swift
var textEncodingName: String! { get }
```

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.

# textEncodingName (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The text encoding for the data source’s web view, if set, or the text encoding of the response.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * textEncodingName;
```

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [loading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
