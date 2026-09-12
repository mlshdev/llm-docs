> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/webview-swift.class/registerurlscheme(aslocal:)](https://developer.apple.com/documentation/webkit/webview-swift.class/registerurlscheme(aslocal:))

# registerURLScheme(asLocal:) (Swift)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Adds the specified URL scheme to the list of local schemes.

> No longer supported; please adopt WKWebView.

## Declaration

```swift
class func registerURLScheme(asLocal scheme: String!)
```

## Parameters

- `scheme`: The scheme to add to the list.

<a id="Discussion"></a>

## Discussion

You need to register a scheme as local to access resources with file URLs and to have the same security checks as a local file.

## See Also

### Registering Document Views and Representations

- [registerClass(\_:representationClass:forMIMEType:)](registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.

# registerURLSchemeAsLocal: (Objective-C)

**Framework:** WebKit  
**Kind:** Type Method  
**Availability:** macOS 10.3+ (deprecated in 10.14)

Adds the specified URL scheme to the list of local schemes.

> No longer supported; please adopt WKWebView.

## Declaration

```objectivec
+ (void) registerURLSchemeAsLocal:(NSString *) scheme;
```

## Parameters

- `scheme`: The scheme to add to the list.

<a id="Discussion"></a>

## Discussion

You need to register a scheme as local to access resources with file URLs and to have the same security checks as a local file.

## See Also

### Registering Document Views and Representations

- [registerViewClass:representationClass:forMIMEType:](registerclass%28__representationclass_formimetype_%29.md): Deprecated. Specifies the view and representation objects to be used for specific MIME types.
