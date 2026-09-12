> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webdatasource/representation](https://developer.apple.com/documentation/webkit/webdatasource/representation)

# representation (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s representation depending on its MIME type.

## Declaration

```swift
var representation: (any WebDocumentRepresentation)! { get }
```

<a id="Discussion"></a>

## Discussion

`nil` if the data source is in the process of being loaded and this method is invoked before loading is complete.

You can specify the mapping between a representation and MIME type using the \`\`WebView/registerClass(\_:representationClass:forMIMEType:)\`\`\`WebView\` class method.

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [isLoading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.

# representation (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** macOS 10.3+ (deprecated in 10.14)

The data source’s representation depending on its MIME type.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) id<WebDocumentRepresentation> representation;
```

<a id="Discussion"></a>

## Discussion

`nil` if the data source is in the process of being loaded and this method is invoked before loading is complete.

You can specify the mapping between a representation and MIME type using the \`\`WebView/registerClass(\_:representationClass:forMIMEType:)\`\`\`WebView\` class method.

## See Also

### Querying page data and state

- [data](data.md): Deprecated. The raw data that represents the data source’s content.
- [loading](isloading.md): Deprecated. A Boolean that indicates whether the data source is loading its content.
- [pageTitle](pagetitle.md): Deprecated. The title of the data source’s page.
- [textEncodingName](textencodingname.md): Deprecated. The text encoding for the data source’s web view, if set, or the text encoding of the response.
