> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasskiterror/code/notentitlederror](https://developer.apple.com/documentation/passkit/pkpasskiterror/code/notentitlederror)

# PKPassKitError.Code.notEntitledError (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Error caused by absence of the required entitlements for the given operation.

## Declaration

```swift
case notEntitledError
```

<a id="Discussion"></a>

## Discussion

Apps require appropriate entitlements to read, update or delete passes. To add these entitlements, enable the Wallet capabilities in Xcode.

## See Also

### Error codes

- [PKPassKitError.Code.unknownError](unknownerror.md): Unknown error.
- [PKPassKitError.Code.invalidDataError](invaliddataerror.md): Invalid pass data.
- [PKPassKitError.Code.unsupportedVersionError](unsupportedversionerror.md): Unsupported pass version.
- [PKPassKitError.Code.invalidSignature](invalidsignature.md): Invalid pass signature.

# PKNotEntitledError (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

Error caused by absence of the required entitlements for the given operation.

## Declaration

```objectivec
PKNotEntitledError
```

<a id="Discussion"></a>

## Discussion

Apps require appropriate entitlements to read, update or delete passes. To add these entitlements, enable the Wallet capabilities in Xcode.

## See Also

### Error codes

- [PKUnknownError](unknownerror.md): Unknown error.
- [PKInvalidDataError](invaliddataerror.md): Invalid pass data.
- [PKUnsupportedVersionError](unsupportedversionerror.md): Unsupported pass version.
- [PKInvalidSignature](invalidsignature.md): Invalid pass signature.
