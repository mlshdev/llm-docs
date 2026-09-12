> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiepropertykey/version](https://developer.apple.com/documentation/foundation/httpcookiepropertykey/version)

# version (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An `NSString` object that specifies the version of the cookie.

## Declaration

```swift
static let version: HTTPCookiePropertyKey
```

<a id="Discussion"></a>

## Discussion

Must be either `"0"` or `"1"`. The default is `"0"`. This cookie attribute is optional.

## See Also

### Cookie property keys

- [comment](comment.md): An `NSString` object containing the comment for the cookie.
- [commentURL](commenturl.md): An `NSURL` object or `NSString` object containing the comment URL for the cookie.
- [discard](discard.md): An `NSString` object stating whether the cookie should be discarded at the end of the session.
- [domain](domain.md): An `NSString` object containing the domain for the cookie.
- [expires](expires.md): An `NSDate` object or `NSString` object specifying the expiration date for the cookie.
- [maximumAge](maximumage.md): An `NSString` object containing an integer value stating how long in seconds the cookie should be kept, at most.
- [name](name.md): An `NSString` object containing the name of the cookie (required).
- [originURL](originurl.md): An NSURL or `NSString` object containing the URL that set this cookie.
- [path](path.md): An `NSString` object containing the path for the cookie.
- [port](port.md): An `NSString` object containing comma-separated integer values specifying the ports for the cookie.
- [sameSitePolicy](samesitepolicy.md): A string indicating the same-site policy for the cookie.
- [secure](secure.md): An `NSString` object indicating that the cookie should be transmitted only over secure channels.
- [value](value.md): An `NSString` object containing the value of the cookie.

# NSHTTPCookieVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An `NSString` object that specifies the version of the cookie.

## Declaration

```objectivec
extern NSHTTPCookiePropertyKey const NSHTTPCookieVersion;
```

<a id="Discussion"></a>

## Discussion

Must be either `"0"` or `"1"`. The default is `"0"`. This cookie attribute is optional.

## See Also

### Cookie property keys

- [NSHTTPCookieComment](comment.md): An `NSString` object containing the comment for the cookie.
- [NSHTTPCookieCommentURL](commenturl.md): An `NSURL` object or `NSString` object containing the comment URL for the cookie.
- [NSHTTPCookieDiscard](discard.md): An `NSString` object stating whether the cookie should be discarded at the end of the session.
- [NSHTTPCookieDomain](domain.md): An `NSString` object containing the domain for the cookie.
- [NSHTTPCookieExpires](expires.md): An `NSDate` object or `NSString` object specifying the expiration date for the cookie.
- [NSHTTPCookieMaximumAge](maximumage.md): An `NSString` object containing an integer value stating how long in seconds the cookie should be kept, at most.
- [NSHTTPCookieName](name.md): An `NSString` object containing the name of the cookie (required).
- [NSHTTPCookieOriginURL](originurl.md): An NSURL or `NSString` object containing the URL that set this cookie.
- [NSHTTPCookiePath](path.md): An `NSString` object containing the path for the cookie.
- [NSHTTPCookiePort](port.md): An `NSString` object containing comma-separated integer values specifying the ports for the cookie.
- [NSHTTPCookieSameSitePolicy](samesitepolicy.md): A string indicating the same-site policy for the cookie.
- [NSHTTPCookieSecure](secure.md): An `NSString` object indicating that the cookie should be transmitted only over secure channels.
- [NSHTTPCookieValue](value.md): An `NSString` object containing the value of the cookie.
