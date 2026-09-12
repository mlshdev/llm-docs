> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lperror](https://developer.apple.com/documentation/linkpresentation/lperror)

# LPError

**Framework:** Link Presentation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An error returned by the LinkPresentation framework.

## Declaration

```swift
struct LPError
```

## Topics

### Error details

- [errorCode](lperror/errorcode.md): A code for the error.
- [errorUserInfo](lperror/erroruserinfo.md)

### Error domain

- [errorDomain](lperror/errordomain.md): The domain for the error.
- [LPErrorDomain](lperrordomain.md): The domain for Link Presentation errors.

### Error codes

- [metadataFetchCancelled](lperror/metadatafetchcancelled.md): An error indicating that the metadata fetch was canceled by the client.
- [metadataFetchFailed](lperror/metadatafetchfailed.md): An error indicating that a metadata fetch failed.
- [metadataFetchTimedOut](lperror/metadatafetchtimedout.md): An error indicating that the metadata fetch took longer than allowed.
- [unknown](lperror/unknown.md)
- [LPError.Code](lperror/code.md): Possible error values that can be returned from LinkPresentation APIs.

### Type Properties

- [metadataFetchNotAllowed](lperror/metadatafetchnotallowed.md)

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

- [LPError.Code](lperror/code.md): Possible error values that can be returned from LinkPresentation APIs.
- [LPErrorDomain](lperrordomain.md): The domain for Link Presentation errors.
