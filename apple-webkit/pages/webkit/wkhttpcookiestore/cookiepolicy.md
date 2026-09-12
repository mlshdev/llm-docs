> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore/cookiepolicy](https://developer.apple.com/documentation/webkit/wkhttpcookiestore/cookiepolicy)

# WKHTTPCookieStore.CookiePolicy (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration with cases that indicate whether a cookie store allows cookie storage.

## Declaration

```swift
enum CookiePolicy
```

## Topics

### Specifying a cookie policy

- [WKHTTPCookieStore.CookiePolicy.allow](cookiepolicy/allow.md): A case that indicates the cookie store allows cookie storage.
- [WKHTTPCookieStore.CookiePolicy.disallow](cookiepolicy/disallow.md): A case that indicates the cookie store does not allow cookie storage.

### Initializers

- [init(rawValue:)](cookiepolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# WKCookiePolicy (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

An enumeration with cases that indicate whether a cookie store allows cookie storage.

## Declaration

```objectivec
enum WKCookiePolicy : NSInteger;
```

## Topics

### Specifying a cookie policy

- [WKCookiePolicyAllow](cookiepolicy/allow.md): A case that indicates the cookie store allows cookie storage.
- [WKCookiePolicyDisallow](cookiepolicy/disallow.md): A case that indicates the cookie store does not allow cookie storage.

## See Also

### Web data management

- [WKWebsiteDataStore](../wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](../wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKHTTPCookieStore](../wkhttpcookiestore.md): An object that manages the HTTP cookies associated with a particular web view.
- [WKURLSchemeHandler](../wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](../wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](../nsreadaccessurldocumentoption.md)
