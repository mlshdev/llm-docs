> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meerror-swift.struct](https://developer.apple.com/documentation/mediaextension/meerror-swift.struct)

# MEError

**Framework:** MediaExtension  
**Kind:** Structure  
**Availability:** macOS 14.0+

A MediaExtension framework error.

## Declaration

```swift
struct MEError
```

<a id="overview"></a>

## Overview

If a [MediaExtension](../mediaextension.md) method fails, the [NSError](https://developer.apple.com/documentation/foundation/nserror) object contains an [MEError](meerror-swift.struct.md) instance that provides specific information about the failure.

## Topics

### Identifying the error domain and codes

- [allocationFailure](meerror-swift.struct/allocationfailure.md): An error code that indicates the extension can’t allocate memory.
- [endOfStream](meerror-swift.struct/endofstream.md): An error code that indicates the extension reached the end of the source file.
- [internalFailure](meerror-swift.struct/internalfailure.md): An error code that indicates the extension encountered an internal operation failure, such as code loading.
- [invalidParameter](meerror-swift.struct/invalidparameter.md): An error code that indicates the extension received an invalid parameter.
- [locationNotAvailable](meerror-swift.struct/locationnotavailable.md): An error code that indicates a specific sample isn’t contiguous, spans more than one file, or is for some other reason unsuitable to read directly from a file.
- [noSamples](meerror-swift.struct/nosamples.md): An error code that indicates there are no samples in the track or a request to load a sample buffer fails.
- [noSuchEdit](meerror-swift.struct/nosuchedit.md): An error code that indicates the plug-in track reader received a request to return an edit that’s out of range.
- [parsingFailure](meerror-swift.struct/parsingfailure.md): An error code that indicates the extension encountered an error while parsing the media.
- [permissionDenied](meerror-swift.struct/permissiondenied.md): An error code that indicates the extension received a request to perform an invalid operation on a byte source.
- [propertyNotSupported](meerror-swift.struct/propertynotsupported.md): An error code that indicates the extension encountered a property it doesn’t support reading and writing to.
- [referenceMissing](meerror-swift.struct/referencemissing.md): An error code that indicates the decoder received a request to decode a sample without decoding the required reference frame dependencies first.
- [unsupportedFeature](meerror-swift.struct/unsupportedfeature.md): An error code that indicates the extension doesn’t support an aspect of the media.

### Inspecting an error

- [code](https://developer.apple.com/documentation/foundation/nserror/code): The error code.
- [errorCode](https://developer.apple.com/documentation/foundation/customnserror/errorcode): The error code within the given domain.
- [errorUserInfo](https://developer.apple.com/documentation/foundation/customnserror/erroruserinfo): The user-info dictionary.
- [hashValue](https://developer.apple.com/documentation/swift/hashable/hashvalue): The hash value.
- [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo): The user info dictionary.
- [==(\_:\_:)](https://developer.apple.com/documentation/swift/equatable/==%28_:_:%29): Returns a Boolean value indicating whether two values are equal.
- [!=(\_:\_:)](https://developer.apple.com/documentation/swift/equatable/!=%28_:_:%29): Returns a Boolean value indicating whether two values are not equal.
- [hash(into:)](https://developer.apple.com/documentation/swift/hashable/hash%28into:%29): Hashes the essential components of this value by feeding them into the given hasher.
- [MEError.Code](meerror-swift.struct/code.md): An enumeration that models media extension error codes.

### Type Properties

- [errorDomain](meerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [MediaExtensionErrorDomain](mediaextensionerrordomain.md): The domain of the error.
- [MEError.Code](meerror-swift.struct/code.md): An enumeration that models media extension error codes.
