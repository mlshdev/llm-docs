> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/shazamkit/sherror/code/signaturedurationinvalid

# SHError.Code.signatureDurationInvalid (Swift)

**Framework:** ShazamKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.

## Declaration

```swift
case signatureDurationInvalid
```

<a id="Discussion"></a>

## Discussion

This error occurs when the length of the generated signature is less than [minimumQuerySignatureDuration](../../shcatalog/minimumquerysignatureduration.md) or greater than [maximumQuerySignatureDuration](../../shcatalog/maximumquerysignatureduration.md) for the session [catalog](../../shsession/catalog.md).

## See Also

### Signature errors

- [SHError.Code.signatureInvalid](signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.

# SHErrorCodeSignatureDurationInvalid (Objective-C)

**Framework:** ShazamKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.

## Declaration

```objectivec
SHErrorCodeSignatureDurationInvalid
```

<a id="Discussion"></a>

## Discussion

This error occurs when the length of the generated signature is less than [minimumQuerySignatureDuration](../../shcatalog/minimumquerysignatureduration.md) or greater than [maximumQuerySignatureDuration](../../shcatalog/maximumquerysignatureduration.md) for the session [catalog](../../shsession/catalog.md).

## See Also

### Signature errors

- [SHErrorCodeSignatureInvalid](signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
