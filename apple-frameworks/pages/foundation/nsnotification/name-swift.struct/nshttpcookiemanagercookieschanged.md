> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nshttpcookiemanagercookieschanged

# NSHTTPCookieManagerCookiesChanged (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification posted when the cookies stored in the cookie storage have changed.

## Declaration

```swift
static let NSHTTPCookieManagerCookiesChanged: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../notification/object.md) is the [HTTPCookieStorage](../../httpcookiestorage.md) instance. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.

## See Also

### Tracking cookie storage changes

- [HTTPCookieStorage.CookiesChangedMessage](../../httpcookiestorage/cookieschangedmessage.md): A message a cookie storage instance sends when its cookies change.
- [NSHTTPCookieManagerAcceptPolicyChanged](nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.

# NSHTTPCookieManagerCookiesChangedNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification posted when the cookies stored in the cookie storage have changed.

## Declaration

```objectivec
extern NSNotificationName const NSHTTPCookieManagerCookiesChangedNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../../notification/object.md) is the [NSHTTPCookieStorage](../../httpcookiestorage.md) instance. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.

## See Also

### Tracking cookie storage changes

- [NSHTTPCookieManagerAcceptPolicyChangedNotification](nshttpcookiemanageracceptpolicychanged.md): Deprecated. A notification posted when the acceptance policy of the cookie storage has changed.
