> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcpresentmentintentassertion/error](https://developer.apple.com/documentation/corenfc/nfcpresentmentintentassertion/error)

# NFCPresentmentIntentAssertion.Error

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An error type that indicates problems with the presentment intent assertion.

## Declaration

```swift
enum Error
```

## Topics

### Presentment intent assertion errors

- [NFCPresentmentIntentAssertion.Error.systemEligibilityFailed](error/systemeligibilityfailed.md): The current system isn’t eligible to use this service.
- [NFCPresentmentIntentAssertion.Error.systemNotAvailable](error/systemnotavailable.md): The system is unavailable because it’s in the cool-down period.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing presentment intention validity

- [isValid](isvalid.md): A Boolean property that indicates whether the presentment intent assertion instance is still valid.
