> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestore](https://developer.apple.com/documentation/webkit/wkhttpcookiestore)

# WKHTTPCookieStore (Swift)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An object that manages the HTTP cookies associated with a particular web view.

## Declaration

```swift
@MainActor class WKHTTPCookieStore
```

<a id="overview"></a>

## Overview

Use a [WKHTTPCookieStore](wkhttpcookiestore.md) to specify the initial cookies for your webpages, and to manage cookies for your web content. For example, you might use this object to delete the cookie for the current session when the user logs out. To detect when the webpage changes a cookie, install a cookie observer using the [add(\_:)](wkhttpcookiestore/add%28__%29.md) method.

You don’t create a [WKHTTPCookieStore](wkhttpcookiestore.md) object directly. Instead, retrieve this object from the [WKWebsiteDataStore](wkwebsitedatastore.md) object in your web view’s configuration object.

## Topics

### Managing cookies

- [getAllCookies(\_:)](wkhttpcookiestore/getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [setCookie(\_:completionHandler:)](wkhttpcookiestore/setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.
- [delete(\_:completionHandler:)](wkhttpcookiestore/delete%28__completionhandler_%29.md): Deletes the specified cookie.

### Permitting cookie storage

- [getCookiePolicy(\_:)](wkhttpcookiestore/getcookiepolicy%28__%29.md): Returns a cookie policy that indicates whether the cookie store allows cookie storage.
- [setCookiePolicy(\_:completionHandler:)](wkhttpcookiestore/setcookiepolicy%28__completionhandler_%29.md): Sets a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKHTTPCookieStore.CookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.

### Observing cookie store changes

- [add(\_:)](wkhttpcookiestore/add%28__%29.md): Adds an observer to the cookie store.
- [remove(\_:)](wkhttpcookiestore/remove%28__%29.md): Removes an observer from the cookie store.
- [WKHTTPCookieStoreObserver](wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.

### Instance Methods

- [getCookies(for:completionHandler:)](wkhttpcookiestore/getcookies%28for_completionhandler_%29.md)
- [setCookies(\_:completionHandler:)](wkhttpcookiestore/setcookies%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [readAccessURL](https://developer.apple.com/documentation/foundation/nsattributedstring/documentreadingoptionkey/readaccessurl): The local files WebKit can access when loading content.

# WKHTTPCookieStore (Objective-C)

**Framework:** WebKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

An object that manages the HTTP cookies associated with a particular web view.

## Declaration

```objectivec
@interface WKHTTPCookieStore : NSObject
```

<a id="overview"></a>

## Overview

Use a [WKHTTPCookieStore](wkhttpcookiestore.md) to specify the initial cookies for your webpages, and to manage cookies for your web content. For example, you might use this object to delete the cookie for the current session when the user logs out. To detect when the webpage changes a cookie, install a cookie observer using the [addObserver:](wkhttpcookiestore/add%28__%29.md) method.

You don’t create a [WKHTTPCookieStore](wkhttpcookiestore.md) object directly. Instead, retrieve this object from the [WKWebsiteDataStore](wkwebsitedatastore.md) object in your web view’s configuration object.

## Topics

### Managing cookies

- [getAllCookies:](wkhttpcookiestore/getallcookies%28__%29.md): Fetches all stored cookies asynchronously and delivers them to the specified completion handler.
- [setCookie:completionHandler:](wkhttpcookiestore/setcookie%28__completionhandler_%29.md): Adds a cookie to the cookie store.
- [deleteCookie:completionHandler:](wkhttpcookiestore/delete%28__completionhandler_%29.md): Deletes the specified cookie.

### Permitting cookie storage

- [getCookiePolicy:](wkhttpcookiestore/getcookiepolicy%28__%29.md): Returns a cookie policy that indicates whether the cookie store allows cookie storage.
- [setCookiePolicy:completionHandler:](wkhttpcookiestore/setcookiepolicy%28__completionhandler_%29.md): Sets a cookie policy that indicates whether the cookie store allows cookie storage.
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.

### Observing cookie store changes

- [addObserver:](wkhttpcookiestore/add%28__%29.md): Adds an observer to the cookie store.
- [removeObserver:](wkhttpcookiestore/remove%28__%29.md): Removes an observer from the cookie store.
- [WKHTTPCookieStoreObserver](wkhttpcookiestoreobserver.md): The methods to adopt in an object that monitors changes to a webpage’s cookies.

### Instance Methods

- [getCookiesForURL:completionHandler:](wkhttpcookiestore/getcookies%28for_completionhandler_%29.md)
- [setCookies:completionHandler:](wkhttpcookiestore/setcookies%28__completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Web data management

- [WKWebsiteDataStore](wkwebsitedatastore.md): An object that manages cookies, disk and memory caches, and other types of data for a web view.
- [WKWebsiteDataRecord](wkwebsitedatarecord.md): A record of the data that a particular website stores persistently.
- [WKURLSchemeHandler](wkurlschemehandler.md): A protocol for loading resources with URL schemes that WebKit doesn’t handle.
- [WKURLSchemeTask](wkurlschemetask.md): An interface that WebKit uses to request custom resources from your app.
- [NSReadAccessURLDocumentOption](nsreadaccessurldocumentoption.md)
- [WKCookiePolicy](wkhttpcookiestore/cookiepolicy.md): An enumeration with cases that indicate whether a cookie store allows cookie storage.
