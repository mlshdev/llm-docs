> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nshttpcookiemanageracceptpolicychanged

# NSHTTPCookieManagerAcceptPolicyChanged (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A notification posted when the acceptance policy of the cookie storage has changed.

> Notification is never posted

## Declaration

```swift
static let NSHTTPCookieManagerAcceptPolicyChanged: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

In macOS, cookies are shared among applications, meaning this notification can be received as a result of another application’s actions. Cookies are not shared among applications in iOS.

The notification’s [object](../../notification/object.md) is the [HTTPCookieStorage](../../httpcookiestorage.md) instance. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.

## See Also

### Tracking cookie storage changes

- [NSHTTPCookieManagerCookiesChanged](nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
- [HTTPCookieStorage.CookiesChangedMessage](../../httpcookiestorage/cookieschangedmessage.md): A message a cookie storage instance sends when its cookies change.

# NSHTTPCookieManagerAcceptPolicyChangedNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.11) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

A notification posted when the acceptance policy of the cookie storage has changed.

> Notification is never posted

## Declaration

```objectivec
extern NSNotificationName const NSHTTPCookieManagerAcceptPolicyChangedNotification;
```

<a id="Discussion"></a>

## Discussion

In macOS, cookies are shared among applications, meaning this notification can be received as a result of another application’s actions. Cookies are not shared among applications in iOS.

The notification’s [object](../../notification/object.md) is the [NSHTTPCookieStorage](../../httpcookiestorage.md) instance. This notification does not contain a [userInfo](../../notification/userinfo.md) dictionary.

## See Also

### Tracking cookie storage changes

- [NSHTTPCookieManagerCookiesChangedNotification](nshttpcookiemanagercookieschanged.md): A notification posted when the cookies stored in the cookie storage have changed.
