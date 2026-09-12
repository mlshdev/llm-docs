> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meerror-swift.struct/nosuchedit](https://developer.apple.com/documentation/mediaextension/meerror-swift.struct/nosuchedit)

# noSuchEdit

**Framework:** MediaExtension  
**Kind:** Type Property  
**Availability:** macOS 14.0+

An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.

## Declaration

```swift
static var noSuchEdit: MEError.Code { get }
```

## See Also

### Identifying the error domain and codes

- [allocationFailure](allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [endOfStream](endofstream.md): An error code that indicates the extension reached the end of the source file.
- [internalFailure](internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [invalidParameter](invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [locationNotAvailable](locationnotavailable.md): An error code that indicates a specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable to read directly from a file.
- [noSamples](nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [parsingFailure](parsingfailure.md): An error code that indicates the extension encountered an error while parsing the media.
- [permissionDenied](permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [propertyNotSupported](propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [referenceMissing](referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [unsupportedFeature](unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.
