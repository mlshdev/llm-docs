> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/sherror/mediaitemfetchfailed](https://developer.apple.com/documentation/shazamkit/sherror/mediaitemfetchfailed)

# mediaItemFetchFailed

**Framework:** ShazamKit  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The error code to indicate when the system fails to fetch one or more media items.

## Declaration

```swift
static var mediaItemFetchFailed: SHError.Code { get }
```

## See Also

### Constants

- [matchAttemptFailed](matchattemptfailed.md): The error code to indicate when a Shazam Music catalog server issue prevents finding a match.
- [signatureInvalid](signatureinvalid.md): The error code to indicate that the system is unable to generate a signature from the audio.
- [signatureDurationInvalid](signaturedurationinvalid.md): The error code to indicate that the length of the generated signature is too long or too short to make a match in the catalog.
- [invalidAudioFormat](invalidaudioformat.md): The error code to indicate an unsupported audio format.
- [internalError](internalerror.md): The error code to indicate a generic framework error.
- [audioDiscontinuity](audiodiscontinuity.md): The error code to indicate the use of noncontiguous audio to request a match.
- [customCatalogInvalidURL](customcataloginvalidurl.md): The error code to indicate that the format for the custom catalog URL is invalid.
- [customCatalogInvalid](customcataloginvalid.md): The error code to indicate when the custom catalog fails to load due to an invalid format.
- [mediaLibrarySyncFailed](medialibrarysyncfailed.md): The error code that indicates when the system fails to add media items to or remove items from the user’s Shazam library.
