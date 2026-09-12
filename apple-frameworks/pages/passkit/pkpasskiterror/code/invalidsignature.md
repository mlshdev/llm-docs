> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasskiterror/code/invalidsignature](https://developer.apple.com/documentation/passkit/pkpasskiterror/code/invalidsignature)

# PKPassKitError.Code.invalidSignature (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Invalid pass signature.

## Declaration

```swift
case invalidSignature
```

<a id="Discussion"></a>

## Discussion

For example, the pass type identifier in the certificate and the pass do not match, or the certificate has expired or was revoked.

## See Also

### Error codes

- [PKPassKitError.Code.unknownError](unknownerror.md): Unknown error.
- [PKPassKitError.Code.invalidDataError](invaliddataerror.md): Invalid pass data.
- [PKPassKitError.Code.unsupportedVersionError](unsupportedversionerror.md): Unsupported pass version.
- [PKPassKitError.Code.notEntitledError](notentitlederror.md): Error caused by absence of the required entitlements for the given operation.

# PKInvalidSignature (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Invalid pass signature.

## Declaration

```objectivec
PKInvalidSignature
```

<a id="Discussion"></a>

## Discussion

For example, the pass type identifier in the certificate and the pass do not match, or the certificate has expired or was revoked.

## See Also

### Error codes

- [PKUnknownError](unknownerror.md): Unknown error.
- [PKInvalidDataError](invaliddataerror.md): Invalid pass data.
- [PKUnsupportedVersionError](unsupportedversionerror.md): Unsupported pass version.
- [PKNotEntitledError](notentitlederror.md): Error caused by absence of the required entitlements for the given operation.
