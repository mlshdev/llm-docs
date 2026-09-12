> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lperror/code](https://developer.apple.com/documentation/linkpresentation/lperror/code)

# LPError.Code (Swift)

**Framework:** Link Presentation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Possible error values that can be returned from LinkPresentation APIs.

## Declaration

```swift
enum Code
```

## Topics

### Error cases

- [LPError.Code.metadataFetchCancelled](code/metadatafetchcancelled.md): An error indicating that the metadata fetch was canceled by the client.
- [LPError.Code.metadataFetchFailed](code/metadatafetchfailed.md): An error indicating that a metadata fetch failed.
- [LPError.Code.metadataFetchTimedOut](code/metadatafetchtimedout.md): An error indicating that the metadata fetch took longer than allowed.
- [LPError.Code.unknown](code/unknown.md): An unknown error.

### Enumeration Cases

- [LPError.Code.metadataFetchNotAllowed](code/metadatafetchnotallowed.md): An error indicating that the metadata fetch was not allowed due to system policies.

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

- [LPError](../lperror.md): An error returned by the LinkPresentation framework.
- [LPErrorDomain](../lperrordomain.md): The domain for Link Presentation errors.

# LPErrorCode (Objective-C)

**Framework:** Link Presentation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Possible error values that can be returned from LinkPresentation APIs.

## Declaration

```objectivec
enum LPErrorCode : NSInteger;
```

## Topics

### Error cases

- [LPErrorMetadataFetchCancelled](code/metadatafetchcancelled.md): An error indicating that the metadata fetch was canceled by the client.
- [LPErrorMetadataFetchFailed](code/metadatafetchfailed.md): An error indicating that a metadata fetch failed.
- [LPErrorMetadataFetchTimedOut](code/metadatafetchtimedout.md): An error indicating that the metadata fetch took longer than allowed.
- [LPErrorUnknown](code/unknown.md): An unknown error.

### Enumeration Cases

- [LPErrorMetadataFetchNotAllowed](code/metadatafetchnotallowed.md): An error indicating that the metadata fetch was not allowed due to system policies.

## See Also

### Errors

- [LPErrorDomain](../lperrordomain.md): The domain for Link Presentation errors.
