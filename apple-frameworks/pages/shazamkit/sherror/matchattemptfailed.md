> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/sherror/matchattemptfailed](https://developer.apple.com/documentation/shazamkit/sherror/matchattemptfailed)

# matchAttemptFailed

**Framework:** ShazamKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The error code to indicate when a Shazam Music catalog server issue prevents finding a match.

## Declaration

```swift
static var matchAttemptFailed: SHError.Code { get }
```

## See Also

### Constants

- [signatureInvalid](signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
- [signatureDurationInvalid](signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.
- [invalidAudioFormat](invalidaudioformat.md): The error code to indicate an unsupported audio format.
- [internalError](internalerror.md): The error code to indicate a generic framework error.
- [audioDiscontinuity](audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.
- [customCatalogInvalidURL](customcataloginvalidurl.md): The error code to indicate that the format for the custom catalog URL is invalid.
- [customCatalogInvalid](customcataloginvalid.md): The error code to indicate when the custom catalog fails to load due to an invalid format.
- [mediaItemFetchFailed](mediaitemfetchfailed.md): The error code to indicate when the system fails to fetch one or more media items.
- [mediaLibrarySyncFailed](medialibrarysyncfailed.md): The error code that indicates when the system fails to add media items to or remove items from the user’s Shazam library.
