> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkhttpcookiestoreobserver](https://developer.apple.com/documentation/webkit/wkhttpcookiestoreobserver)

# WKHTTPCookieStoreObserver (Swift)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The methods to adopt in an object that monitors changes to a webpage’s cookies.

## Declaration

```swift
@MainActor protocol WKHTTPCookieStoreObserver : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the methods of the [WKHTTPCookieStoreObserver](wkhttpcookiestoreobserver.md) protocol to track changes to cookies associated with a webpage. To observe the actual cookie changes, call the [add(\_:)](wkhttpcookiestore/add%28__%29.md) method of the [WKHTTPCookieStore](wkhttpcookiestore.md) you use to manage cookies. When a cookie changes, the cookie store notifies all observers of the changes.

## Topics

### Responding to Cookie Changes

- [cookiesDidChange(in:)](wkhttpcookiestoreobserver/cookiesdidchange%28in_%29.md): Tells the delegate that the cookies in the specified cookie store changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing cookie store changes

- [add(\_:)](wkhttpcookiestore/add%28__%29.md): Adds an observer to the cookie store.
- [remove(\_:)](wkhttpcookiestore/remove%28__%29.md): Removes an observer from the cookie store.

# WKHTTPCookieStoreObserver (Objective-C)

**Framework:** WebKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

The methods to adopt in an object that monitors changes to a webpage’s cookies.

## Declaration

```objectivec
@protocol WKHTTPCookieStoreObserver <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the methods of the [WKHTTPCookieStoreObserver](wkhttpcookiestoreobserver.md) protocol to track changes to cookies associated with a webpage. To observe the actual cookie changes, call the [addObserver:](wkhttpcookiestore/add%28__%29.md) method of the [WKHTTPCookieStore](wkhttpcookiestore.md) you use to manage cookies. When a cookie changes, the cookie store notifies all observers of the changes.

## Topics

### Responding to Cookie Changes

- [cookiesDidChangeInCookieStore:](wkhttpcookiestoreobserver/cookiesdidchange%28in_%29.md): Tells the delegate that the cookies in the specified cookie store changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Observing cookie store changes

- [addObserver:](wkhttpcookiestore/add%28__%29.md): Adds an observer to the cookie store.
- [removeObserver:](wkhttpcookiestore/remove%28__%29.md): Removes an observer from the cookie store.
