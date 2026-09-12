> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/sherror/code/signatureinvalid](https://developer.apple.com/documentation/shazamkit/sherror/code/signatureinvalid)

# SHError.Code.signatureInvalid (Swift)

**Framework:** ShazamKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate that the system is unable to generate a signature from the audio.

## Declaration

```swift
case signatureInvalid
```

<a id="Discussion"></a>

## Discussion

The most common cause of this error is silent audio input.

## See Also

### Signature errors

- [SHError.Code.signatureDurationInvalid](signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.

# SHErrorCodeSignatureInvalid (Objective-C)

**Framework:** ShazamKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate that the system is unable to generate a signature from the audio.

## Declaration

```objectivec
SHErrorCodeSignatureInvalid
```

<a id="Discussion"></a>

## Discussion

The most common cause of this error is silent audio input.

## See Also

### Signature errors

- [SHErrorCodeSignatureDurationInvalid](signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.
