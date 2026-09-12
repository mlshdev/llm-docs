> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebsitedatastore/httpcookiestore](https://developer.apple.com/documentation/webkit/wkwebsitedatastore/httpcookiestore)

# httpCookieStore (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The object that manages the HTTP cookies for your website.

## Declaration

```swift
var httpCookieStore: WKHTTPCookieStore { get }
```

<a id="Discussion"></a>

## Discussion

Use the [WKHTTPCookieStore](../wkhttpcookiestore.md) object in this property to manage your website’s cookies. A cookie store object contains methods to add new cookies, and to remove cookies that don’t apply to your content. For example, you might initially use this object to add a cookie for the user’s login credentials and then delete that cookie when the user logs out.

# httpCookieStore (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The object that manages the HTTP cookies for your website.

## Declaration

```objectivec
@property (nonatomic, readonly) WKHTTPCookieStore * httpCookieStore;
```

<a id="Discussion"></a>

## Discussion

Use the [WKHTTPCookieStore](../wkhttpcookiestore.md) object in this property to manage your website’s cookies. A cookie store object contains methods to add new cookies, and to remove cookies that don’t apply to your content. For example, you might initially use this object to add a cookie for the user’s login credentials and then delete that cookie when the user logs out.
