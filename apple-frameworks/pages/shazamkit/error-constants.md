> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/error-constants](https://developer.apple.com/documentation/shazamkit/error-constants)

# Error Constants (Swift)

**Framework:** ShazamKit  
**Kind:** API Collection

Error code constants for framework operations.

## Topics

### Constants

- [matchAttemptFailed](sherror/matchattemptfailed.md): The error code to indicate when a Shazam Music catalog server issue prevents finding a match.
- [signatureInvalid](sherror/signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
- [signatureDurationInvalid](sherror/signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.
- [invalidAudioFormat](sherror/invalidaudioformat.md): The error code to indicate an unsupported audio format.
- [internalError](sherror/internalerror.md): The error code to indicate a generic framework error.
- [audioDiscontinuity](sherror/audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.
- [customCatalogInvalidURL](sherror/customcataloginvalidurl.md): The error code to indicate that the format for the custom catalog URL is invalid.
- [customCatalogInvalid](sherror/customcataloginvalid.md): The error code to indicate when the custom catalog fails to load due to an invalid format.
- [mediaItemFetchFailed](sherror/mediaitemfetchfailed.md): The error code to indicate when the system fails to fetch one or more media items.
- [mediaLibrarySyncFailed](sherror/medialibrarysyncfailed.md): The error code that indicates when the system fails to add media items to or remove items from the user’s Shazam library.

## See Also

### Inspecting an error

- [SHError.Code](sherror/code.md): Codes for the errors that Shazam produces.

# Error Constants (Objective-C)

**Framework:** ShazamKit  
**Kind:** API Collection

Error code constants for framework operations.

## See Also

### Inspecting an error

- [SHErrorCode](sherror/code.md): Codes for the errors that Shazam produces.
