> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/cryptokiterror/underlyingcorecryptoerror(error:)

# CryptoKitError.underlyingCoreCryptoError(error:)

**Framework:** Apple CryptoKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The underlying corecrypto library is unable to complete the requested action.

## Declaration

```swift
case underlyingCoreCryptoError(error: Int32)
```

## See Also

### Reporting errors

- [CryptoKitError.incorrectKeySize](incorrectkeysize.md): The key size is incorrect.
- [CryptoKitError.invalidParameter](invalidparameter.md): The parameter is invalid.
- [CryptoKitError.incorrectParameterSize](incorrectparametersize.md): The parameter size is incorrect.
- [CryptoKitError.authenticationFailure](authenticationfailure.md): The authentication tag or signature is incorrect.
- [CryptoKitError.wrapFailure](wrapfailure.md): The framework can’t wrap the specified key.
- [CryptoKitError.unwrapFailure](unwrapfailure.md): The framework can’t unwrap the specified key.
