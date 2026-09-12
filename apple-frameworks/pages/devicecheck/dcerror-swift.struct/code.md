> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct/code](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct/code)

# DCError.Code (Swift)

**Framework:** DeviceCheck  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

DeviceCheck error codes.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [DCError.Code.featureUnsupported](code/featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCError.Code.invalidInput](code/invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCError.Code.invalidKey](code/invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [DCError.Code.serverUnavailable](code/serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [DCError.Code.unknownSystemFailure](code/unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.

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

### Errors

- [DCError](../dcerror-swift.struct.md): A type that indicates when DeviceCheck encounters an error.
- [DCErrorDomain](../dcerrordomain.md): The error domain for errors associated with DeviceCheck APIs.

# DCError (Objective-C)

**Framework:** DeviceCheck  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

DeviceCheck error codes.

## Declaration

```objectivec
enum DCError : NSInteger;
```

## Topics

### Error codes

- [DCErrorFeatureUnsupported](code/featureunsupported.md): DeviceCheck is unavailable on this device.
- [DCErrorInvalidInput](code/invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [DCErrorInvalidKey](code/invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [DCErrorServerUnavailable](code/serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [DCErrorUnknownSystemFailure](code/unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.

## See Also

### Errors

- [DCErrorDomain](../dcerrordomain.md): The error domain for errors associated with DeviceCheck APIs.
