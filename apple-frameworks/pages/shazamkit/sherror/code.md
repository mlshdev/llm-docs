> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/sherror/code](https://developer.apple.com/documentation/shazamkit/sherror/code)

# SHError.Code (Swift)

**Framework:** ShazamKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Codes for the errors that Shazam produces.

## Declaration

```swift
enum Code
```

## Topics

### Matching errors

- [SHError.Code.matchAttemptFailed](code/matchattemptfailed.md): The error code to indicate when a Shazam Music catalog server issue prevents finding a match.

### Signature errors

- [SHError.Code.signatureInvalid](code/signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
- [SHError.Code.signatureDurationInvalid](code/signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.

### Audio format errors

- [SHError.Code.invalidAudioFormat](code/invalidaudioformat.md): The error code to indicate an unsupported audio format.
- [SHError.Code.audioDiscontinuity](code/audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.

### Catalog errors

- [SHError.Code.customCatalogInvalidURL](code/customcataloginvalidurl.md): The error code to indicate that the format for the custom catalog URL is invalid.
- [SHError.Code.customCatalogInvalid](code/customcataloginvalid.md): The error code to indicate when the custom catalog fails to load due to an invalid format.

### Library sync errors

- [SHError.Code.mediaItemFetchFailed](code/mediaitemfetchfailed.md): The error code to indicate when the system fails to fetch one or more media items.
- [SHError.Code.mediaLibrarySyncFailed](code/medialibrarysyncfailed.md): The error code to indicate when the system fails to add one or more media items to the user’s Shazam library.

### Framework errors

- [SHError.Code.internalError](code/internalerror.md): The error code to indicate a generic framework error.

### Querying the error domain

- [SHErrorDomain](../sherrordomain.md): The error domain for specific errors for ShazamKit.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting an error

- [Error Constants](../error-constants.md): Error code constants for framework operations.

# SHErrorCode (Objective-C)

**Framework:** ShazamKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Codes for the errors that Shazam produces.

## Declaration

```objectivec
enum SHErrorCode : NSInteger;
```

## Topics

### Matching errors

- [SHErrorCodeMatchAttemptFailed](code/matchattemptfailed.md): The error code to indicate when a Shazam Music catalog server issue prevents finding a match.

### Signature errors

- [SHErrorCodeSignatureInvalid](code/signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
- [SHErrorCodeSignatureDurationInvalid](code/signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.

### Audio format errors

- [SHErrorCodeInvalidAudioFormat](code/invalidaudioformat.md): The error code to indicate an unsupported audio format.
- [SHErrorCodeAudioDiscontinuity](code/audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.

### Catalog errors

- [SHErrorCodeCustomCatalogInvalidURL](code/customcataloginvalidurl.md): The error code to indicate that the format for the custom catalog URL is invalid.
- [SHErrorCodeCustomCatalogInvalid](code/customcataloginvalid.md): The error code to indicate when the custom catalog fails to load due to an invalid format.

### Library sync errors

- [SHErrorCodeMediaItemFetchFailed](code/mediaitemfetchfailed.md): The error code to indicate when the system fails to fetch one or more media items.
- [SHErrorCodeMediaLibrarySyncFailed](code/medialibrarysyncfailed.md): The error code to indicate when the system fails to add one or more media items to the user’s Shazam library.

### Framework errors

- [SHErrorCodeInternalError](code/internalerror.md): The error code to indicate a generic framework error.

### Querying the error domain

- [SHErrorDomain](../sherrordomain.md): The error domain for specific errors for ShazamKit.

## See Also

### Inspecting an error

- [Error Constants](../error-constants.md): Error code constants for framework operations.
