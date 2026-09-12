> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslauthenticate](https://developer.apple.com/documentation/security/sslauthenticate)

# SSLAuthenticate (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The flags that represent the requirements for client-side authentication.

## Declaration

```swift
enum SSLAuthenticate
```

## Topics

### Constants

- [SSLAuthenticate.neverAuthenticate](sslauthenticate/neverauthenticate.md): Indicates that client-side authentication is not required. (Default.)
- [SSLAuthenticate.alwaysAuthenticate](sslauthenticate/alwaysauthenticate.md): Indicates that client-side authentication is required.
- [SSLAuthenticate.tryAuthenticate](sslauthenticate/tryauthenticate.md): Indicates that client-side authentication should be attempted. There is no error if the client doesn’t have a certificate.

### Initializers

- [init(rawValue:)](sslauthenticate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SSLAuthenticate (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The flags that represent the requirements for client-side authentication.

## Declaration

```objectivec
enum SSLAuthenticate : int;
```

## Topics

### Constants

- [kNeverAuthenticate](sslauthenticate/neverauthenticate.md): Indicates that client-side authentication is not required. (Default.)
- [kAlwaysAuthenticate](sslauthenticate/alwaysauthenticate.md): Indicates that client-side authentication is required.
- [kTryAuthenticate](sslauthenticate/tryauthenticate.md): Indicates that client-side authentication should be attempted. There is no error if the client doesn’t have a certificate.
