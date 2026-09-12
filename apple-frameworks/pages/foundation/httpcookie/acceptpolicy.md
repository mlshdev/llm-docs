> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/httpcookie/acceptpolicy](https://developer.apple.com/documentation/foundation/httpcookie/acceptpolicy)

# HTTPCookie.AcceptPolicy (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cookie acceptance policies implemented by the [HTTPCookieStorage](../httpcookiestorage.md) class.

## Declaration

```swift
enum AcceptPolicy
```

## Topics

### Policies

- [HTTPCookie.AcceptPolicy.always](acceptpolicy/always.md): Accept all cookies.
- [HTTPCookie.AcceptPolicy.never](acceptpolicy/never.md): Reject all cookies.
- [HTTPCookie.AcceptPolicy.onlyFromMainDocumentDomain](acceptpolicy/onlyfrommaindocumentdomain.md): Accept cookies only from the main document domain.

### Initializers

- [init(rawValue:)](acceptpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSHTTPCookieAcceptPolicy (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cookie acceptance policies implemented by the [NSHTTPCookieStorage](../httpcookiestorage.md) class.

## Declaration

```objectivec
enum NSHTTPCookieAcceptPolicy : NSUInteger;
```

## Topics

### Policies

- [NSHTTPCookieAcceptPolicyAlways](acceptpolicy/always.md): Accept all cookies.
- [NSHTTPCookieAcceptPolicyNever](acceptpolicy/never.md): Reject all cookies.
- [NSHTTPCookieAcceptPolicyOnlyFromMainDocumentDomain](acceptpolicy/onlyfrommaindocumentdomain.md): Accept cookies only from the main document domain.
