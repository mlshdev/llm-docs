> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmsamplebuffererror_bufferhasnosampletiminginfo](https://developer.apple.com/documentation/coremedia/kcmsamplebuffererror_bufferhasnosampletiminginfo)

# kCMSampleBufferError_BufferHasNoSampleTimingInfo (Swift)

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An error code that indicates a request for sample timing on a buffer failed because the buffer doesn’t contain that information.

## Declaration

```swift
var kCMSampleBufferError_BufferHasNoSampleTimingInfo: OSStatus { get }
```

## See Also

### Error Codes

- [kCMSampleBufferError_AllocationFailed](kcmsamplebuffererror_allocationfailed.md): An error code that indicates the system failed to allocate memory.
- [kCMSampleBufferError_AlreadyHasDataBuffer](kcmsamplebuffererror_alreadyhasdatabuffer.md): An error code that indicates an attempt to set data on a sample buffer failed because that buffer already contains media data.
- [kCMSampleBufferError_ArrayTooSmall](kcmsamplebuffererror_arraytoosmall.md): An error code that indicates the output array isn’t large enough to hold the requested array.
- [kCMSampleBufferError_BufferHasNoSampleSizes](kcmsamplebuffererror_bufferhasnosamplesizes.md): An error code that indicates a request for sample sizes on a buffer failed because the buffer doesn’t provide that information.
- [kCMSampleBufferError_BufferNotReady](kcmsamplebuffererror_buffernotready.md): An error code that indicates the system can’t make the buffer’s data ready for use.
- [kCMSampleBufferError_CannotSubdivide](kcmsamplebuffererror_cannotsubdivide.md): An error code that indicates a sample buffer doesn’t contain sample sizes.
- [kCMSampleBufferError_DataCanceled](kcmsamplebuffererror_datacanceled.md): An error code that indicates a sample buffer canceled its data-loading operation.
- [kCMSampleBufferError_DataFailed](kcmsamplebuffererror_datafailed.md): An error code that indicates a sample buffer failed to load its data.
- [kCMSampleBufferError_InvalidEntryCount](kcmsamplebuffererror_invalidentrycount.md): An error code that indicates a timing or size value isn’t within the allowed range.
- [kCMSampleBufferError_InvalidMediaFormat](kcmsamplebuffererror_invalidmediaformat.md): An error code that indicates the media format doesn’t match the sample buffer’s format description.
- [kCMSampleBufferError_InvalidMediaTypeForOperation](kcmsamplebuffererror_invalidmediatypeforoperation.md): An error code that indicates the media type that the format description defines isn’t a value for the requested operation.
- [kCMSampleBufferError_InvalidSampleData](kcmsamplebuffererror_invalidsampledata.md): An error code that indicates the sample buffer contains bad data.
- [kCMSampleBufferError_Invalidated](kcmsamplebuffererror_invalidated.md): An error code that indicates a sample buffer invalidated its data.
- [kCMSampleBufferError_RequiredParameterMissing](kcmsamplebuffererror_requiredparametermissing.md): An error code that indicates a required parameter’s value is invalid.
- [kCMSampleBufferError_SampleIndexOutOfRange](kcmsamplebuffererror_sampleindexoutofrange.md): An error code that indicates the sample index is outside the range of samples that the buffer contains.

# kCMSampleBufferError_BufferHasNoSampleTimingInfo (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An error code that indicates a request for sample timing on a buffer failed because the buffer doesn’t contain that information.

## Declaration

```objectivec
kCMSampleBufferError_BufferHasNoSampleTimingInfo
```

## See Also

### Error Codes

- [kCMSampleBufferError_AllocationFailed](kcmsamplebuffererror_allocationfailed.md): An error code that indicates the system failed to allocate memory.
- [kCMSampleBufferError_AlreadyHasDataBuffer](kcmsamplebuffererror_alreadyhasdatabuffer.md): An error code that indicates an attempt to set data on a sample buffer failed because that buffer already contains media data.
- [kCMSampleBufferError_ArrayTooSmall](kcmsamplebuffererror_arraytoosmall.md): An error code that indicates the output array isn’t large enough to hold the requested array.
- [kCMSampleBufferError_BufferHasNoSampleSizes](kcmsamplebuffererror_bufferhasnosamplesizes.md): An error code that indicates a request for sample sizes on a buffer failed because the buffer doesn’t provide that information.
- [kCMSampleBufferError_BufferNotReady](kcmsamplebuffererror_buffernotready.md): An error code that indicates the system can’t make the buffer’s data ready for use.
- [kCMSampleBufferError_CannotSubdivide](kcmsamplebuffererror_cannotsubdivide.md): An error code that indicates a sample buffer doesn’t contain sample sizes.
- [kCMSampleBufferError_DataCanceled](kcmsamplebuffererror_datacanceled.md): An error code that indicates a sample buffer canceled its data-loading operation.
- [kCMSampleBufferError_DataFailed](kcmsamplebuffererror_datafailed.md): An error code that indicates a sample buffer failed to load its data.
- [kCMSampleBufferError_InvalidEntryCount](kcmsamplebuffererror_invalidentrycount.md): An error code that indicates a timing or size value isn’t within the allowed range.
- [kCMSampleBufferError_InvalidMediaFormat](kcmsamplebuffererror_invalidmediaformat.md): An error code that indicates the media format doesn’t match the sample buffer’s format description.
- [kCMSampleBufferError_InvalidMediaTypeForOperation](kcmsamplebuffererror_invalidmediatypeforoperation.md): An error code that indicates the media type that the format description defines isn’t a value for the requested operation.
- [kCMSampleBufferError_InvalidSampleData](kcmsamplebuffererror_invalidsampledata.md): An error code that indicates the sample buffer contains bad data.
- [kCMSampleBufferError_Invalidated](kcmsamplebuffererror_invalidated.md): An error code that indicates a sample buffer invalidated its data.
- [kCMSampleBufferError_RequiredParameterMissing](kcmsamplebuffererror_requiredparametermissing.md): An error code that indicates a required parameter’s value is invalid.
- [kCMSampleBufferError_SampleIndexOutOfRange](kcmsamplebuffererror_sampleindexoutofrange.md): An error code that indicates the sample index is outside the range of samples that the buffer contains.
