> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionconfiguration/httpcookiestorage](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/httpcookiestorage)

# httpCookieStorage (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie store for storing cookies within this session.

## Declaration

```swift
var httpCookieStorage: HTTPCookieStorage? { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the cookie storage object used by all tasks within sessions based on this configuration.

To disable cookie storage, set this property to `nil`.

For default and background sessions, the default value is the [shared](../httpcookiestorage/shared.md) cookie storage object.

For [ephemeral](ephemeral.md) sessions, the default value is a private cookie storage object that stores data in memory only, and is destroyed when you invalidate the session.

## See Also

### Setting cookie policies

- [httpCookieAcceptPolicy](httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [httpShouldSetCookies](httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [HTTPCookie](../httpcookie.md): A representation of an HTTP cookie.

# HTTPCookieStorage (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie store for storing cookies within this session.

## Declaration

```objectivec
@property (retain, nullable) NSHTTPCookieStorage * HTTPCookieStorage;
```

<a id="Discussion"></a>

## Discussion

This property determines the cookie storage object used by all tasks within sessions based on this configuration.

To disable cookie storage, set this property to `nil`.

For default and background sessions, the default value is the [sharedHTTPCookieStorage](../httpcookiestorage/shared.md) cookie storage object.

For [ephemeralSessionConfiguration](ephemeral.md) sessions, the default value is a private cookie storage object that stores data in memory only, and is destroyed when you invalidate the session.

## See Also

### Setting cookie policies

- [HTTPCookieAcceptPolicy](httpcookieacceptpolicy.md): A policy constant that determines when cookies should be accepted.
- [HTTPShouldSetCookies](httpshouldsetcookies.md): A Boolean value that determines whether requests should contain cookies from the cookie store.
- [NSHTTPCookie](../httpcookie.md): A representation of an HTTP cookie.
