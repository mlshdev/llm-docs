> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfauthenticationerror-swift.struct/code](https://developer.apple.com/documentation/safariservices/sfauthenticationerror-swift.struct/code)

# SFAuthenticationError.Code (Swift)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Messages that describe an authentication error.

> Use [ASWebAuthenticationSessionError.Code](../../authenticationservices/aswebauthenticationsessionerror/code.md) instead.

## Declaration

```swift
enum Code
```

```swift
enum SFAuthenticationError
```

## Topics

### Enumeration Cases

- [SFAuthenticationError.Code.canceledLogin](code/canceledlogin.md): Deprecated.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [SFContentBlockerErrorDomain](../sfcontentblockererrordomain.md): Deprecated. The domain for content blocker errors.
- [SFContentBlockerErrorCode](../sfcontentblockererrorcode.md): Deprecated. Messages that describe a content blocker error.
- [SFAuthenticationSession](../sfauthenticationsession.md): Deprecated. A class that manages sharing a one-time login between Safari and an app, which can also provide automatic login for associated apps.
- [SFAuthenticationError](../sfauthenticationerror-swift.struct.md): Deprecated. An authentication error.
- [SFAuthenticationErrorDomain](../sfauthenticationerrordomain.md): Deprecated. The domain for authentication errors.

# SFAuthenticationError (Objective-C)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 12.0) · iPadOS 11.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Messages that describe an authentication error.

> Use [ASWebAuthenticationSessionErrorCode](../../authenticationservices/aswebauthenticationsessionerror/code.md) instead.

## Declaration

```objectivec
enum SFAuthenticationError : NSInteger;
```

## Topics

### Enumeration Cases

- [SFAuthenticationErrorCanceledLogin](code/canceledlogin.md): Deprecated.

## See Also

### Deprecated

- [SFContentBlockerErrorDomain](../sfcontentblockererrordomain.md): Deprecated. The domain for content blocker errors.
- [SFContentBlockerErrorCode](../sfcontentblockererrorcode.md): Deprecated. Messages that describe a content blocker error.
- [SFAuthenticationSession](../sfauthenticationsession.md): Deprecated. A class that manages sharing a one-time login between Safari and an app, which can also provide automatic login for associated apps.
- [SFAuthenticationErrorDomain](../sfauthenticationerrordomain.md): Deprecated. The domain for authentication errors.
