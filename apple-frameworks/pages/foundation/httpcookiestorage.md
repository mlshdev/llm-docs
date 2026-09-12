> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage](https://developer.apple.com/documentation/foundation/httpcookiestorage)

# HTTPCookieStorage (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container that manages the storage of cookies.

## Declaration

```swift
class HTTPCookieStorage
```

<a id="overview"></a>

## Overview

Each stored cookie is represented by an instance of the [HTTPCookie](httpcookie.md) class.

<a id="Sharing-cookie-storage"></a>

### Sharing cookie storage

The persistent cookie storage returned by [shared](httpcookiestorage/shared.md) may be available to app extensions or other apps, subject to the following guidelines:

- iOS — Each app and app extension has a unique data container, meaning  they have separate cookie stores. You can obtain a common cookie storage by using the [sharedCookieStorage(forGroupContainerIdentifier:)](httpcookiestorage/sharedcookiestorage%28forgroupcontaineridentifier_%29.md) method.
- macOS (non-sandboxed) — As of macOS 10.11, each app has its own cookie storage. Prior to macOS 10.11, a common cookie store is shared among the user’s apps.
- macOS (sandboxed) — Same as iOS.
- [UIWebView](../uikit/uiwebview.md) — `UIWebView` instances within an app inherit the parent app’s shared cookie storage.
- [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) — Each `WKWebView` instance has its own cookie storage. See the [WKHTTPCookieStore](https://developer.apple.com/documentation/webkit/wkhttpcookiestore) class for more information.

Session cookies (where the cookie object’s [isSessionOnly](httpcookie/issessiononly.md) property is [true](https://developer.apple.com/documentation/swift/true)) are local to a single process and are not shared.

> **Note**

>  In cases where a cookie storage is shared between processes, changes made to the cookie accept policy affect all currently running apps using the cookie storage.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [HTTPCookieStorage](httpcookiestorage.md) class is usable as-is, but you can subclass it. For example, you can override the storage methods like [storeCookies(\_:for:)](httpcookiestorage/storecookies%28__for_%29.md), [getCookiesFor(\_:completionHandler:)](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md) to screen which cookies are stored, or reimplement the storage mechanism for security or other reasons.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to equivalent methods that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Retrieving cookies — Override [getCookiesFor(\_:completionHandler:)](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md), instead of or in addition to [cookies(for:)](httpcookiestorage/cookies%28for_%29.md).
- Adding cookies — Override [storeCookies(\_:for:)](httpcookiestorage/storecookies%28__for_%29.md), instead of or in addition to [setCookies(\_:for:mainDocumentURL:)](httpcookiestorage/setcookies%28__for_maindocumenturl_%29.md).

## Topics

### Getting the shared cookie storage object

- [shared](httpcookiestorage/shared.md): The shared cookie storage instance.
- [sharedCookieStorage(forGroupContainerIdentifier:)](httpcookiestorage/sharedcookiestorage%28forgroupcontaineridentifier_%29.md): Returns the cookie storage instance for the container associated with the specified app group identifier.

### Getting and setting the cookie accept policy

- [cookieAcceptPolicy](httpcookiestorage/cookieacceptpolicy.md): The cookie storage’s cookie accept policy.
- [HTTPCookie.AcceptPolicy](httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [HTTPCookieStorage](httpcookiestorage.md) class.

### Adding and removing cookies

- [removeCookies(since:)](httpcookiestorage/removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie(\_:)](httpcookiestorage/deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie(\_:)](httpcookiestorage/setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies(\_:for:mainDocumentURL:)](httpcookiestorage/setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies(\_:for:)](httpcookiestorage/storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

### Retrieving cookies

- [cookies](httpcookiestorage/cookies.md): The cookie storage’s cookies.
- [getCookiesFor(\_:completionHandler:)](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookies(for:)](httpcookiestorage/cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookies(using:)](httpcookiestorage/sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

### Tracking cookie storage changes

- [NSHTTPCookieManagerCookiesChanged](nsnotification/name-swift.struct/nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
- [HTTPCookieStorage.CookiesChangedMessage](httpcookiestorage/cookieschangedmessage.md): A message a cookie storage instance sends when its cookies change.
- [NSHTTPCookieManagerAcceptPolicyChanged](nsnotification/name-swift.struct/nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Cookies

- [HTTPCookie](httpcookie.md): A representation of an HTTP cookie.

# NSHTTPCookieStorage (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container that manages the storage of cookies.

## Declaration

```objectivec
@interface NSHTTPCookieStorage : NSObject
```

<a id="overview"></a>

## Overview

Each stored cookie is represented by an instance of the [NSHTTPCookie](httpcookie.md) class.

<a id="Sharing-cookie-storage"></a>

### Sharing cookie storage

The persistent cookie storage returned by [sharedHTTPCookieStorage](httpcookiestorage/shared.md) may be available to app extensions or other apps, subject to the following guidelines:

- iOS — Each app and app extension has a unique data container, meaning  they have separate cookie stores. You can obtain a common cookie storage by using the [sharedCookieStorageForGroupContainerIdentifier:](httpcookiestorage/sharedcookiestorage%28forgroupcontaineridentifier_%29.md) method.
- macOS (non-sandboxed) — As of macOS 10.11, each app has its own cookie storage. Prior to macOS 10.11, a common cookie store is shared among the user’s apps.
- macOS (sandboxed) — Same as iOS.
- [UIWebView](../uikit/uiwebview.md) — `UIWebView` instances within an app inherit the parent app’s shared cookie storage.
- [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) — Each `WKWebView` instance has its own cookie storage. See the [WKHTTPCookieStore](https://developer.apple.com/documentation/webkit/wkhttpcookiestore) class for more information.

Session cookies (where the cookie object’s [sessionOnly](httpcookie/issessiononly.md) property is [true](https://developer.apple.com/documentation/swift/true)) are local to a single process and are not shared.

> **Note**

>  In cases where a cookie storage is shared between processes, changes made to the cookie accept policy affect all currently running apps using the cookie storage.

<a id="Subclassing-notes"></a>

### Subclassing notes

The [NSHTTPCookieStorage](httpcookiestorage.md) class is usable as-is, but you can subclass it. For example, you can override the storage methods like [storeCookies:forTask:](httpcookiestorage/storecookies%28__for_%29.md), [getCookiesForTask:completionHandler:](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md) to screen which cookies are stored, or reimplement the storage mechanism for security or other reasons.

When overriding methods of this class, be aware that methods that take a `task` parameter are preferred by the system to equivalent methods that do not. Therefore, you should override the task-based methods when subclassing, as follows:

- Retrieving cookies — Override [getCookiesForTask:completionHandler:](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md), instead of or in addition to [cookiesForURL:](httpcookiestorage/cookies%28for_%29.md).
- Adding cookies — Override [storeCookies:forTask:](httpcookiestorage/storecookies%28__for_%29.md), instead of or in addition to [setCookies:forURL:mainDocumentURL:](httpcookiestorage/setcookies%28__for_maindocumenturl_%29.md).

## Topics

### Getting the shared cookie storage object

- [sharedHTTPCookieStorage](httpcookiestorage/shared.md): The shared cookie storage instance.
- [sharedCookieStorageForGroupContainerIdentifier:](httpcookiestorage/sharedcookiestorage%28forgroupcontaineridentifier_%29.md): Returns the cookie storage instance for the container associated with the specified app group identifier.

### Getting and setting the cookie accept policy

- [cookieAcceptPolicy](httpcookiestorage/cookieacceptpolicy.md): The cookie storage’s cookie accept policy.
- [NSHTTPCookieAcceptPolicy](httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [NSHTTPCookieStorage](httpcookiestorage.md) class.

### Adding and removing cookies

- [removeCookiesSinceDate:](httpcookiestorage/removecookies%28since_%29.md): Removes cookies that were stored after a given date.
- [deleteCookie:](httpcookiestorage/deletecookie%28__%29.md): Deletes the specified cookie from the cookie storage.
- [setCookie:](httpcookiestorage/setcookie%28__%29.md): Stores a specified cookie in the cookie storage if the cookie accept policy permits.
- [setCookies:forURL:mainDocumentURL:](httpcookiestorage/setcookies%28__for_maindocumenturl_%29.md): Adds an array of cookies to the cookie storage if the storage’s cookie acceptance policy permits.
- [storeCookies:forTask:](httpcookiestorage/storecookies%28__for_%29.md): Stores an array of cookies in the cookie storage, on behalf of the provided task, if the cookie accept policy permits.

### Retrieving cookies

- [cookies](httpcookiestorage/cookies.md): The cookie storage’s cookies.
- [getCookiesForTask:completionHandler:](httpcookiestorage/getcookiesfor%28__completionhandler_%29.md): Fetches cookies relevant to the specified task and passes them to the completion handler.
- [cookiesForURL:](httpcookiestorage/cookies%28for_%29.md): Returns all the cookie storage’s cookies that are sent to a specified URL.
- [sortedCookiesUsingDescriptors:](httpcookiestorage/sortedcookies%28using_%29.md): Returns all of the cookie storage’s cookies, sorted according to a given set of sort descriptors.

### Tracking cookie storage changes

- [NSHTTPCookieManagerCookiesChangedNotification](nsnotification/name-swift.struct/nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
- [NSHTTPCookieManagerAcceptPolicyChangedNotification](nsnotification/name-swift.struct/nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Cookies

- [NSHTTPCookie](httpcookie.md): A representation of an HTTP cookie.
