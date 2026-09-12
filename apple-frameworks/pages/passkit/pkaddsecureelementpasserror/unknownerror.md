> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpasserror/unknownerror](https://developer.apple.com/documentation/passkit/pkaddsecureelementpasserror/unknownerror)

# unknownError

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 13.4+ (deprecated in 18.0) · iPadOS 13.4+ (deprecated in 18.0) · Mac Catalyst 13.4+ (deprecated in 18.0) · macOS · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

An error that occurs when PassKit cancels the addition of a Secure Element pass due to an unknown failure.

> Use PKAddSecureElementPassGenericError instead.

## Declaration

```swift
static var unknownError: PKAddSecureElementPassError.Code { get }
```

## See Also

### Identifying errors

- [deviceNotReadyError](devicenotreadyerror.md): The device isn’t ready to add Secure Element passes.
- [deviceNotSupportedError](devicenotsupportederror.md): The device doesn’t support adding Secure Element passes.
- [invalidConfigurationError](invalidconfigurationerror.md): An error that occurs when they system attempts to add a Secure Element pass using an invalid configuration.
- [unavailableError](unavailableerror.md): PassKit is temporarily unable to add Secure Element passes.
- [userCanceledError](usercancelederror.md): An error that occurs when the user cancels the addition of a Secure Element pass.
- [PKAddSecureElementPassError.Code](code.md): Error codes for problems that occur when you add a secure element passes.
