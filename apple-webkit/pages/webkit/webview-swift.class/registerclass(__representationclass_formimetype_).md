> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/registerclass(_:representationclass:formimetype:)](https://developer.apple.com/documentation/webkit/webview-swift.class/registerclass(_:representationclass:formimetype:))

# registerClass(\_:representationClass:forMIMEType:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Specifies the view and representation objects to be used for specific MIME types.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func registerClass(_ viewClass: AnyClass!, representationClass: AnyClass!, forMIMEType MIMEType: String!)
```

## Parameters

- `viewClass`: A class conforming to the [WebDocumentView](../webdocumentview.md) protocol that displays the specified MIME types.
- `representationClass`: The class conforming to [WebDocumentRepresentation](../webdocumentrepresentation.md) protocol that represents the specified MIME types.
- `MIMEType`: The MIME type of the content.

  This may be a primary MIME type or subtype. For example, if `MIMEType` is “video/” the specified view and representation objects are used for all video types. More specific subtype mappings, such as “image/gif”, takes precedence over primary type matching, such as “image/”.

<a id="Discussion"></a>

## Discussion

After invoking this method, when `MIMEType` content is encountered, instances of `representationClass` and `viewClass` are created to handle and display it.

## See Also

### Registering Document Views and Representations

- [registerURLScheme(asLocal:)](registerurlscheme%28aslocal_%29.md): Deprecated. Adds the specified URL scheme to the list of local schemes.

# registerViewClass:representationClass:forMIMEType: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Specifies the view and representation objects to be used for specific MIME types.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (void) registerViewClass:(Class) viewClass representationClass:(Class) representationClass forMIMEType:(NSString *) MIMEType;
```

## Parameters

- `viewClass`: A class conforming to the [WebDocumentView](../webdocumentview.md) protocol that displays the specified MIME types.
- `representationClass`: The class conforming to [WebDocumentRepresentation](../webdocumentrepresentation.md) protocol that represents the specified MIME types.
- `MIMEType`: The MIME type of the content.

  This may be a primary MIME type or subtype. For example, if `MIMEType` is “video/” the specified view and representation objects are used for all video types. More specific subtype mappings, such as “image/gif”, takes precedence over primary type matching, such as “image/”.

<a id="Discussion"></a>

## Discussion

After invoking this method, when `MIMEType` content is encountered, instances of `representationClass` and `viewClass` are created to handle and display it.

## See Also

### Registering Document Views and Representations

- [registerURLSchemeAsLocal:](registerurlscheme%28aslocal_%29.md): Deprecated. Adds the specified URL scheme to the list of local schemes.
