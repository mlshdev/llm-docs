> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextension/matchpattern/error](https://developer.apple.com/documentation/webkit/wkwebextension/matchpattern/error)

# WKWebExtension.MatchPattern.Error

**Framework:** WebKit  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Constants that indicate errors in the [WKWebExtension.MatchPattern](../matchpattern.md) domain.

## Declaration

```swift
struct Error
```

## Topics

### Type Properties

- [errorDomain](error/errordomain.md)
- [invalidHost](error/invalidhost.md): Indicates that the host component was invalid.
- [invalidPath](error/invalidpath.md): Indicates that the path component was invalid.
- [invalidScheme](error/invalidscheme.md): Indicates that the scheme component was invalid.
- [unknown](error/unknown.md): Indicates that an unknown error occurred.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [WKWebExtension.MatchPattern.Error.Code](error/code.md): Constants that indicate errors in the [WKWebExtension.MatchPattern](../matchpattern.md) domain.
- [errorDomain](errordomain.md): A string that identifies the error domain.
