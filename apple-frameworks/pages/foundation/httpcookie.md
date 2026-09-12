> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie](https://developer.apple.com/documentation/foundation/httpcookie)

# HTTPCookie (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of an HTTP cookie.

## Declaration

```swift
class HTTPCookie
```

<a id="overview"></a>

## Overview

An [HTTPCookie](httpcookie.md) object is immutable, initialized from a dictionary that contains the attributes of the cookie. This class supports two different cookie versions:

- Version 0: The original cookie format defined by Netscape. Most cookies are in this format.
- Version 1: The cookie format defined in [RFC 6265](https://tools.ietf.org/html/rfc6265), HTTP State Management Mechanism.

## Topics

### Creating cookies

- [cookies(withResponseHeaderFields:for:)](httpcookie/cookies%28withresponseheaderfields_for_%29.md): Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.
- [init(properties:)](httpcookie/init%28properties_%29.md): Initializes an HTTP cookie object with the given cookie properties.

### Converting cookies to request headers

- [requestHeaderFields(with:)](httpcookie/requestheaderfields%28with_%29.md): Converts an array of cookies to a dictionary of header fields.

### Getting cookie host properties

- [domain](httpcookie/domain.md): The domain of the cookie.
- [path](httpcookie/path.md): The cookie’s path.
- [portList](httpcookie/portlist.md): The cookie’s port list.

### Getting cookie metadata

- [name](httpcookie/name.md): The cookie’s name.
- [value](httpcookie/value.md): The cookie’s string value.
- [version](httpcookie/version.md): The cookie’s version.

### Determining cookie lifespan

- [expiresDate](httpcookie/expiresdate.md): The cookie’s expiration date.
- [isSessionOnly](httpcookie/issessiononly.md): A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).

### Securing cookies

- [isHTTPOnly](httpcookie/ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [isSecure](httpcookie/issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](httpcookie/samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [HTTPCookieStringPolicy](httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

### Accessing cookie properties as key-value pairs

- [properties](httpcookie/properties.md): The cookie’s properties.
- [HTTPCookiePropertyKey](httpcookiepropertykey.md): Constants that define the supported keys in a cookie attributes dictionary.

### Getting user-readable cookie metadata

- [comment](httpcookie/comment.md): The cookie’s comment string.
- [commentURL](httpcookie/commenturl.md): The cookie’s comment URL.

### Accepting cookies

- [HTTPCookie.AcceptPolicy](httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [HTTPCookieStorage](httpcookiestorage.md) class.

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

- [HTTPCookieStorage](httpcookiestorage.md): A container that manages the storage of cookies.

# NSHTTPCookie (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of an HTTP cookie.

## Declaration

```objectivec
@interface NSHTTPCookie : NSObject
```

<a id="overview"></a>

## Overview

An [NSHTTPCookie](httpcookie.md) object is immutable, initialized from a dictionary that contains the attributes of the cookie. This class supports two different cookie versions:

- Version 0: The original cookie format defined by Netscape. Most cookies are in this format.
- Version 1: The cookie format defined in [RFC 6265](https://tools.ietf.org/html/rfc6265), HTTP State Management Mechanism.

## Topics

### Creating cookies

- [cookiesWithResponseHeaderFields:forURL:](httpcookie/cookies%28withresponseheaderfields_for_%29.md): Creates an array of HTTP cookies that corresponds to the provided response header fields for the provided URL.
- [cookieWithProperties:](nshttpcookie/cookiewithproperties_.md): Creates and initializes an HTTP cookie object using the provided properties.
- [initWithProperties:](httpcookie/init%28properties_%29.md): Initializes an HTTP cookie object with the given cookie properties.

### Converting cookies to request headers

- [requestHeaderFieldsWithCookies:](httpcookie/requestheaderfields%28with_%29.md): Converts an array of cookies to a dictionary of header fields.

### Getting cookie host properties

- [domain](httpcookie/domain.md): The domain of the cookie.
- [path](httpcookie/path.md): The cookie’s path.
- [portList](httpcookie/portlist.md): The cookie’s port list.

### Getting cookie metadata

- [name](httpcookie/name.md): The cookie’s name.
- [value](httpcookie/value.md): The cookie’s string value.
- [version](httpcookie/version.md): The cookie’s version.

### Determining cookie lifespan

- [expiresDate](httpcookie/expiresdate.md): The cookie’s expiration date.
- [sessionOnly](httpcookie/issessiononly.md): A Boolean value that indicates whether the cookie should be discarded at the end of the session (regardless of expiration date).

### Securing cookies

- [HTTPOnly](httpcookie/ishttponly.md): A Boolean value that indicates whether the cookie should only be sent to HTTP servers.
- [secure](httpcookie/issecure.md): A Boolean value that indicates whether the cookie may only be sent over secure channels.
- [sameSitePolicy](httpcookie/samesitepolicy.md): A Boolean value that indicates whether to restrict the cookie to requests sent back to the same site that created it.
- [NSHTTPCookieStringPolicy](httpcookiestringpolicy.md): Values that indicate whether to restrict the cookie to requests sent back to the same site that created it.

### Accessing cookie properties as key-value pairs

- [properties](httpcookie/properties.md): The cookie’s properties.
- [NSHTTPCookiePropertyKey](httpcookiepropertykey.md): Constants that define the supported keys in a cookie attributes dictionary.

### Getting user-readable cookie metadata

- [comment](httpcookie/comment.md): The cookie’s comment string.
- [commentURL](httpcookie/commenturl.md): The cookie’s comment URL.

### Accepting cookies

- [NSHTTPCookieAcceptPolicy](httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [NSHTTPCookieStorage](httpcookiestorage.md) class.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Cookies

- [NSHTTPCookieStorage](httpcookiestorage.md): A container that manages the storage of cookies.
