> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meerror-swift.struct/code](https://developer.apple.com/documentation/mediaextension/meerror-swift.struct/code)

# MEError.Code (Swift)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

An enumeration that models media extension error codes.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MEError.Code.allocationFailure](code/allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [MEError.Code.endOfStream](code/endofstream.md): An error code that indicates the extension reached the end of the source file.
- [MEError.Code.internalFailure](code/internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [MEError.Code.invalidParameter](code/invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [MEError.Code.locationNotAvailable](code/locationnotavailable.md): An error code that indicates specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable for reading directly from a file.
- [MEError.Code.noSamples](code/nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [MEError.Code.noSuchEdit](code/nosuchedit.md): An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.
- [MEError.Code.parsingFailure](code/parsingfailure.md): An error code that indicates the extension encountered an error while parsing the media.
- [MEError.Code.permissionDenied](code/permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [MEError.Code.propertyNotSupported](code/propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [MEError.Code.referenceMissing](code/referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [MEError.Code.unsupportedFeature](code/unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.

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

### Errors

- [MediaExtensionErrorDomain](../mediaextensionerrordomain.md): The domain of the error.
- [MEError](../meerror-swift.struct.md): A MediaExtension framework error.

# MEError (Objective-C)

**Framework:** MediaExtension  
**Kind:** Enumeration  
**Availability:** macOS 14.0+

An enumeration that models media extension error codes.

## Declaration

```objectivec
enum MEError : NSInteger;
```

## Topics

### Error codes

- [MEErrorAllocationFailure](code/allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [MEErrorEndOfStream](code/endofstream.md): An error code that indicates the extension reached the end of the source file.
- [MEErrorInternalFailure](code/internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [MEErrorInvalidParameter](code/invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [MEErrorLocationNotAvailable](code/locationnotavailable.md): An error code that indicates specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable for reading directly from a file.
- [MEErrorNoSamples](code/nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [MEErrorNoSuchEdit](code/nosuchedit.md): An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.
- [MEErrorParsingFailure](code/parsingfailure.md): An error code that indicates the extension encountered an error while parsing the media.
- [MEErrorPermissionDenied](code/permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [MEErrorPropertyNotSupported](code/propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [MEErrorReferenceMissing](code/referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [MEErrorUnsupportedFeature](code/unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.

## See Also

### Errors

- [MediaExtensionErrorDomain](../mediaextensionerrordomain.md): The domain of the error.
