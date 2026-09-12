> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpasserror/code/genericerror](https://developer.apple.com/documentation/passkit/pkaddsecureelementpasserror/code/genericerror)

# PKAddSecureElementPassError.Code.genericError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+ · watchOS 11.0+

Represents the default error case.

## Declaration

```swift
case genericError
```

## See Also

### Error codes

- [PKAddSecureElementPassError.Code.deviceNotReadyError](devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassError.Code.deviceNotSupportedError](devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassError.Code.invalidConfigurationError](invalidconfigurationerror.md): The configuration for the pass is invalid for either Wallet or the reader.
- [PKAddSecureElementPassError.Code.osVersionNotSupportedError](osversionnotsupportederror.md)
- [PKAddSecureElementPassError.Code.unavailableError](unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassError.Code.userCanceledError](usercancelederror.md): The user canceled adding the pass.
- [unknownError](unknownerror.md): Deprecated.

# PKAddSecureElementPassGenericError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS · visionOS 2.0+ · watchOS 11.0+

Represents the default error case.

## Declaration

```objectivec
PKAddSecureElementPassGenericError
```

## See Also

### Error codes

- [PKAddSecureElementPassDeviceNotReadyError](devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassDeviceNotSupportedError](devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassInvalidConfigurationError](invalidconfigurationerror.md): The configuration for the pass is invalid for either Wallet or the reader.
- [PKAddSecureElementPassOSVersionNotSupportedError](osversionnotsupportederror.md)
- [PKAddSecureElementPassUnavailableError](unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassUserCanceledError](usercancelederror.md): The user canceled adding the pass.
