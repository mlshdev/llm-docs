> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appclip/apactivationpayloaderror](https://developer.apple.com/documentation/appclip/apactivationpayloaderror)

# APActivationPayloadError

**Framework:** App Clips  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An error that an App Clip activation payload returns.

## Declaration

```swift
struct APActivationPayloadError
```

## Topics

### Getting information about the error

- [errorDomain](apactivationpayloaderror/errordomain.md)

### Interpreting errors

- [doesNotMatch](apactivationpayloaderror/doesnotmatch.md): The provided URL doesn’t match the invocation URL you registered for the App Clip.
- [disallowed](apactivationpayloaderror/disallowed.md): The user denied location access, or the source of the App Clip invocation wasn’t an NFC tag or visual code.
- [APActivationPayloadError.Code](apactivationpayloaderror/code.md): Error codes that an App Clip activation payload returns.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding errors

- [APActivationPayloadErrorDomain](apactivationpayloaderrordomain.md): A string that identifies the activation payload’s error domain.
- [APActivationPayloadError.Code](apactivationpayloaderror/code.md): Error codes that an App Clip activation payload returns.
