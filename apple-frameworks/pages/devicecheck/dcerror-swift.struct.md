> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicecheck/dcerror-swift.struct](https://developer.apple.com/documentation/devicecheck/dcerror-swift.struct)

# DCError

**Framework:** DeviceCheck  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 9.0+

A type that indicates when DeviceCheck encounters an error.

## Declaration

```swift
struct DCError
```

## Topics

### Errors

- [featureUnsupported](dcerror-swift.struct/featureunsupported.md): DeviceCheck is not available on this device.
- [invalidInput](dcerror-swift.struct/invalidinput.md): An error code that indicates when your app provides data that isn’t formatted correctly.
- [invalidKey](dcerror-swift.struct/invalidkey.md): An error caused by a failed attempt to use the App Attest key.
- [serverUnavailable](dcerror-swift.struct/serverunavailable.md): An error that indicates a failed attempt to contact the App Attest service during an attestation.
- [unknownSystemFailure](dcerror-swift.struct/unknownsystemfailure.md): A failure has occurred, such as the failure to generate a token.
- [DCError.Code](dcerror-swift.struct/code.md): DeviceCheck error codes.

### Error information

- [errorDomain](dcerror-swift.struct/errordomain.md): The error domain for errors associated with DeviceCheck APIs.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [DCError.Code](dcerror-swift.struct/code.md): DeviceCheck error codes.
- [DCErrorDomain](dcerrordomain.md): The error domain for errors associated with DeviceCheck APIs.
