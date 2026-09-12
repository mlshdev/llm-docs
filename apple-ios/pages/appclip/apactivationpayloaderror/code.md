> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/appclip/apactivationpayloaderror/code](https://developer.apple.com/documentation/appclip/apactivationpayloaderror/code)

# APActivationPayloadError.Code (Swift)

**Framework:** App Clips  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Error codes that an App Clip activation payload returns.

## Declaration

```swift
enum Code
```

## Topics

### Error types

- [APActivationPayloadError.Code.doesNotMatch](code/doesnotmatch.md): The provided URL doesn’t match the registered App Clip URL.
- [APActivationPayloadError.Code.disallowed](code/disallowed.md): The user denied location access, or the source of the App Clip invocation wasn’t from an NFC tag or visual code.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Understanding errors

- [APActivationPayloadErrorDomain](../apactivationpayloaderrordomain.md): A string that identifies the activation payload’s error domain.
- [APActivationPayloadError](../apactivationpayloaderror.md): An error that an App Clip activation payload returns.

# APActivationPayloadErrorCode (Objective-C)

**Framework:** App Clips  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Error codes that an App Clip activation payload returns.

## Declaration

```objectivec
enum APActivationPayloadErrorCode : NSInteger;
```

## Topics

### Error types

- [APActivationPayloadErrorCodeDoesNotMatch](code/doesnotmatch.md): The provided URL doesn’t match the registered App Clip URL.
- [APActivationPayloadErrorCodeDisallowed](code/disallowed.md): The user denied location access, or the source of the App Clip invocation wasn’t from an NFC tag or visual code.

## See Also

### Understanding errors

- [APActivationPayloadErrorDomain](../apactivationpayloaderrordomain.md): A string that identifies the activation payload’s error domain.
