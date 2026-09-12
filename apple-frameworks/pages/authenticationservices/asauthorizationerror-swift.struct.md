> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asauthorizationerror-swift.struct](https://developer.apple.com/documentation/authenticationservices/asauthorizationerror-swift.struct)

# ASAuthorizationError

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Errors that can occur during authorization.

## Declaration

```swift
struct ASAuthorizationError
```

## Topics

### Getting the Properties

- [notInteractive](asauthorizationerror-swift.struct/notinteractive.md)

### Error Domain

- [ASAuthorizationErrorDomain](asauthorizationerrordomain.md): The domain of authorization errors.

### Error Codes

- [canceled](asauthorizationerror-swift.struct/canceled.md): The user canceled the authorization attempt.
- [failed](asauthorizationerror-swift.struct/failed.md): The authorization attempt failed.
- [invalidResponse](asauthorizationerror-swift.struct/invalidresponse.md): The authorization request received an invalid response.
- [notHandled](asauthorizationerror-swift.struct/nothandled.md): The authorization request wasn’t handled.
- [unknown](asauthorizationerror-swift.struct/unknown.md): The authorization attempt failed for an unknown reason.
- [credentialExport](asauthorizationerror-swift.struct/credentialexport.md): The credential export request failed.
- [credentialImport](asauthorizationerror-swift.struct/credentialimport.md): The credential import request failed.
- [ASAuthorizationError.Code](asauthorizationerror-swift.struct/code.md): Codes that authorization errors can have.

### Type Properties

- [deviceNotConfiguredForPasskeyCreation](asauthorizationerror-swift.struct/devicenotconfiguredforpasskeycreation.md)
- [errorDomain](asauthorizationerror-swift.struct/errordomain.md)
- [matchedExcludedCredential](asauthorizationerror-swift.struct/matchedexcludedcredential.md)
- [preferSignInWithApple](asauthorizationerror-swift.struct/prefersigninwithapple.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling Authorization Errors

- [authorizationController(controller:didCompleteWithError:)](asauthorizationcontrollerdelegate/authorizationcontroller%28controller_didcompletewitherror_%29.md): Tells the delegate when authorization fails, and provides an error explaining why.
- [ASAuthorizationErrorDomain](asauthorizationerrordomain.md): The domain of authorization errors.
