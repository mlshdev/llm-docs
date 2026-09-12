> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/safariservices/sfcontentblockererrorcode](https://developer.apple.com/documentation/safariservices/sfcontentblockererrorcode)

# SFContentBlockerErrorCode (Swift)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.4+ (deprecated in 13.4)

Messages that describe a content blocker error.

> Use [SFError.Code](sferror/code.md) instead.

## Declaration

```swift
enum SFContentBlockerErrorCode
```

## Topics

### Constants

- [SFContentBlockerErrorCode.noExtensionFound](sfcontentblockererrorcode/noextensionfound.md): Deprecated.
- [SFContentBlockerErrorCode.noAttachmentFound](sfcontentblockererrorcode/noattachmentfound.md): Deprecated.
- [SFContentBlockerErrorCode.loadingInterrupted](sfcontentblockererrorcode/loadinginterrupted.md): Deprecated.

### Initializers

- [init(rawValue:)](sfcontentblockererrorcode/init%28rawvalue_%29.md): Deprecated.

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

- [SFContentBlockerErrorDomain](sfcontentblockererrordomain.md): Deprecated. The domain for content blocker errors.
- [SFAuthenticationSession](sfauthenticationsession.md): Deprecated. A class that manages sharing a one-time login between Safari and an app, which can also provide automatic login for associated apps.
- [SFAuthenticationError](sfauthenticationerror-swift.struct.md): Deprecated. An authentication error.
- [SFAuthenticationError.Code](sfauthenticationerror-swift.struct/code.md): Deprecated. Messages that describe an authentication error.
- [SFAuthenticationErrorDomain](sfauthenticationerrordomain.md): Deprecated. The domain for authentication errors.

# SFContentBlockerErrorCode (Objective-C)

**Framework:** Safari Services  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.4+ (deprecated in 13.4)

Messages that describe a content blocker error.

> Use [SFErrorCode](sferror/code.md) instead.

## Declaration

```objectivec
enum SFContentBlockerErrorCode : NSInteger;
```

## Topics

### Constants

- [SFContentBlockerNoExtensionFound](sfcontentblockererrorcode/noextensionfound.md): Deprecated.
- [SFContentBlockerNoAttachmentFound](sfcontentblockererrorcode/noattachmentfound.md): Deprecated.
- [SFContentBlockerLoadingInterrupted](sfcontentblockererrorcode/loadinginterrupted.md): Deprecated.

## See Also

### Deprecated

- [SFContentBlockerErrorDomain](sfcontentblockererrordomain.md): Deprecated. The domain for content blocker errors.
- [SFAuthenticationSession](sfauthenticationsession.md): Deprecated. A class that manages sharing a one-time login between Safari and an app, which can also provide automatic login for associated apps.
- [SFAuthenticationError](sfauthenticationerror-swift.struct/code.md): Deprecated. Messages that describe an authentication error.
- [SFAuthenticationErrorDomain](sfauthenticationerrordomain.md): Deprecated. The domain for authentication errors.
