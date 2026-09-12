> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpasserror/code/invalidconfigurationerror](https://developer.apple.com/documentation/passkit/pkaddsecureelementpasserror/code/invalidconfigurationerror)

# PKAddSecureElementPassError.Code.invalidConfigurationError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+ · watchOS 6.2+

The configuration for the pass is invalid for either Wallet or the reader.

## Declaration

```swift
case invalidConfigurationError
```

## See Also

### Error codes

- [PKAddSecureElementPassError.Code.deviceNotReadyError](devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassError.Code.deviceNotSupportedError](devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassError.Code.genericError](genericerror.md): Represents the default error case.
- [PKAddSecureElementPassError.Code.osVersionNotSupportedError](osversionnotsupportederror.md)
- [PKAddSecureElementPassError.Code.unavailableError](unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassError.Code.userCanceledError](usercancelederror.md): The user canceled adding the pass.
- [unknownError](unknownerror.md): Deprecated.

# PKAddSecureElementPassInvalidConfigurationError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+ · watchOS 6.2+

The configuration for the pass is invalid for either Wallet or the reader.

## Declaration

```objectivec
PKAddSecureElementPassInvalidConfigurationError
```

## See Also

### Error codes

- [PKAddSecureElementPassDeviceNotReadyError](devicenotreadyerror.md): The reader for the pass isn’t ready to start pairing.
- [PKAddSecureElementPassDeviceNotSupportedError](devicenotsupportederror.md): The reader for the pass isn’t supported or has an invalid version.
- [PKAddSecureElementPassGenericError](genericerror.md): Represents the default error case.
- [PKAddSecureElementPassOSVersionNotSupportedError](osversionnotsupportederror.md)
- [PKAddSecureElementPassUnavailableError](unavailableerror.md): Provisioning for secure element passes isn’t available on the device, or the app is missing the entitlement.
- [PKAddSecureElementPassUserCanceledError](usercancelederror.md): The user canceled adding the pass.
