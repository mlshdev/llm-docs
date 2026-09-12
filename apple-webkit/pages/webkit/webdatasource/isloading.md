> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/isloading](https://developer.apple.com/documentation/webkit/webdatasource/isloading)

# isLoading (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the data source is loading its content.

## Declaration

```swift
var isLoading: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the data source is in the process of loading its content; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

# loading (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

A Boolean that indicates whether the data source is loading its content.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLoading) BOOL loading;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the data source is in the process of loading its content; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [representation](representation.md): Deprecated. The data source’s representation depending on its MIME type.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.
