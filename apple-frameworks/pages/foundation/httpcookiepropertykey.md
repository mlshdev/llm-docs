> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiepropertykey](https://developer.apple.com/documentation/foundation/httpcookiepropertykey)

# HTTPCookiePropertyKey (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that define the supported keys in a cookie attributes dictionary.

## Declaration

```swift
struct HTTPCookiePropertyKey
```

## Topics

### Cookie property keys

- [comment](httpcookiepropertykey/comment.md): An `NSString` object containing the comment for the cookie.
- [commentURL](httpcookiepropertykey/commenturl.md): An `NSURL` object or `NSString` object containing the comment URL for the cookie.
- [discard](httpcookiepropertykey/discard.md): An `NSString` object stating whether the cookie should be discarded at the end of the session.
- [domain](httpcookiepropertykey/domain.md): An `NSString` object containing the domain for the cookie.
- [expires](httpcookiepropertykey/expires.md): An `NSDate` object or `NSString` object specifying the expiration date for the cookie.
- [maximumAge](httpcookiepropertykey/maximumage.md): An `NSString` object containing an integer value stating how long in seconds the cookie should be kept, at most.
- [name](httpcookiepropertykey/name.md): An `NSString` object containing the name of the cookie (required).
- [originURL](httpcookiepropertykey/originurl.md): An NSURL or `NSString` object containing the URL that set this cookie.
- [path](httpcookiepropertykey/path.md): An `NSString` object containing the path for the cookie.
- [port](httpcookiepropertykey/port.md): An `NSString` object containing comma-separated integer values specifying the ports for the cookie.
- [sameSitePolicy](httpcookiepropertykey/samesitepolicy.md): A string indicating the same-site policy for the cookie.
- [secure](httpcookiepropertykey/secure.md): An `NSString` object indicating that the cookie should be transmitted only over secure channels.
- [value](httpcookiepropertykey/value.md): An `NSString` object containing the value of the cookie.
- [version](httpcookiepropertykey/version.md): An `NSString` object that specifies the version of the cookie.

### Creating custom cookie property keys

- [init(\_:)](httpcookiepropertykey/init%28__%29.md): Creates an HTTP cookie property key using the given string.
- [init(rawValue:)](httpcookiepropertykey/init%28rawvalue_%29.md): Creates an HTTP cookie property key using the given string.

### Type Properties

- [setByJavaScript](httpcookiepropertykey/setbyjavascript.md): An NSString object indicating that the cookie is set via JavaScript.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing cookie properties as key-value pairs

- [properties](httpcookie/properties.md): The cookie’s properties.

# NSHTTPCookiePropertyKey (Objective-C)

**Framework:** Foundation  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that define the supported keys in a cookie attributes dictionary.

## Declaration

```objectivec
typedef NSString * NSHTTPCookiePropertyKey;
```

## Topics

### Cookie property keys

- [NSHTTPCookieComment](httpcookiepropertykey/comment.md): An `NSString` object containing the comment for the cookie.
- [NSHTTPCookieCommentURL](httpcookiepropertykey/commenturl.md): An `NSURL` object or `NSString` object containing the comment URL for the cookie.
- [NSHTTPCookieDiscard](httpcookiepropertykey/discard.md): An `NSString` object stating whether the cookie should be discarded at the end of the session.
- [NSHTTPCookieDomain](httpcookiepropertykey/domain.md): An `NSString` object containing the domain for the cookie.
- [NSHTTPCookieExpires](httpcookiepropertykey/expires.md): An `NSDate` object or `NSString` object specifying the expiration date for the cookie.
- [NSHTTPCookieMaximumAge](httpcookiepropertykey/maximumage.md): An `NSString` object containing an integer value stating how long in seconds the cookie should be kept, at most.
- [NSHTTPCookieName](httpcookiepropertykey/name.md): An `NSString` object containing the name of the cookie (required).
- [NSHTTPCookieOriginURL](httpcookiepropertykey/originurl.md): An NSURL or `NSString` object containing the URL that set this cookie.
- [NSHTTPCookiePath](httpcookiepropertykey/path.md): An `NSString` object containing the path for the cookie.
- [NSHTTPCookiePort](httpcookiepropertykey/port.md): An `NSString` object containing comma-separated integer values specifying the ports for the cookie.
- [NSHTTPCookieSameSitePolicy](httpcookiepropertykey/samesitepolicy.md): A string indicating the same-site policy for the cookie.
- [NSHTTPCookieSecure](httpcookiepropertykey/secure.md): An `NSString` object indicating that the cookie should be transmitted only over secure channels.
- [NSHTTPCookieValue](httpcookiepropertykey/value.md): An `NSString` object containing the value of the cookie.
- [NSHTTPCookieVersion](httpcookiepropertykey/version.md): An `NSString` object that specifies the version of the cookie.

### Type Properties

- [NSHTTPCookieSetByJavaScript](httpcookiepropertykey/setbyjavascript.md): An NSString object indicating that the cookie is set via JavaScript.

## See Also

### Accessing cookie properties as key-value pairs

- [properties](httpcookie/properties.md): The cookie’s properties.
