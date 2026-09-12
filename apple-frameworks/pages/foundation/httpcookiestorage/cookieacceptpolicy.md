> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookiestorage/cookieacceptpolicy](https://developer.apple.com/documentation/foundation/httpcookiestorage/cookieacceptpolicy)

# cookieAcceptPolicy (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie storage’s cookie accept policy.

## Declaration

```swift
var cookieAcceptPolicy: HTTPCookie.AcceptPolicy { get set }
```

<a id="Discussion"></a>

## Discussion

The default cookie accept policy is [HTTPCookie.AcceptPolicy.always](../httpcookie/acceptpolicy/always.md). Changing the cookie policy affects all currently running applications using the cookie storage.

## See Also

### Getting and setting the cookie accept policy

- [HTTPCookie.AcceptPolicy](../httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [HTTPCookieStorage](../httpcookiestorage.md) class.

# cookieAcceptPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The cookie storage’s cookie accept policy.

## Declaration

```objectivec
@property NSHTTPCookieAcceptPolicy cookieAcceptPolicy;
```

<a id="Discussion"></a>

## Discussion

The default cookie accept policy is [NSHTTPCookieAcceptPolicyAlways](../httpcookie/acceptpolicy/always.md). Changing the cookie policy affects all currently running applications using the cookie storage.

## See Also

### Getting and setting the cookie accept policy

- [NSHTTPCookieAcceptPolicy](../httpcookie/acceptpolicy.md): Cookie acceptance policies implemented by the [NSHTTPCookieStorage](../httpcookiestorage.md) class.
