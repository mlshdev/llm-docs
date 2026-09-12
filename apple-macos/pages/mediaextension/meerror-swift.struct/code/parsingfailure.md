> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meerror-swift.struct/code/parsingfailure](https://developer.apple.com/documentation/mediaextension/meerror-swift.struct/code/parsingfailure)

# MEError.Code.parsingFailure (Swift)

**Framework:** MediaExtension  
**Kind:** Case  
**Availability:** macOS 14.0+

An error code that indicates the extension encountered an error while parsing the media.

## Declaration

```swift
case parsingFailure
```

## See Also

### Error codes

- [MEError.Code.allocationFailure](allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [MEError.Code.endOfStream](endofstream.md): An error code that indicates the extension reached the end of the source file.
- [MEError.Code.internalFailure](internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [MEError.Code.invalidParameter](invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [MEError.Code.locationNotAvailable](locationnotavailable.md): An error code that indicates specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable for reading directly from a file.
- [MEError.Code.noSamples](nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [MEError.Code.noSuchEdit](nosuchedit.md): An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.
- [MEError.Code.permissionDenied](permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [MEError.Code.propertyNotSupported](propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [MEError.Code.referenceMissing](referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [MEError.Code.unsupportedFeature](unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.

# MEErrorParsingFailure (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration Case  
**Availability:** macOS 14.0+

An error code that indicates the extension encountered an error while parsing the media.

## Declaration

```objectivec
MEErrorParsingFailure
```

## See Also

### Error codes

- [MEErrorAllocationFailure](allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [MEErrorEndOfStream](endofstream.md): An error code that indicates the extension reached the end of the source file.
- [MEErrorInternalFailure](internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [MEErrorInvalidParameter](invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [MEErrorLocationNotAvailable](locationnotavailable.md): An error code that indicates specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable for reading directly from a file.
- [MEErrorNoSamples](nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [MEErrorNoSuchEdit](nosuchedit.md): An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.
- [MEErrorPermissionDenied](permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [MEErrorPropertyNotSupported](propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [MEErrorReferenceMissing](referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [MEErrorUnsupportedFeature](unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.
