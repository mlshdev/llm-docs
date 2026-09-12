> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/error](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/error)

# CMSampleBuffer.Error

**Framework:** Core Media  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines errors that occur during framework operations.

## Declaration

```swift
struct Error
```

## Topics

### Errors

- [allocationFailed](error/allocationfailed.md): The system failed to allocate memory.
- [alreadyHasDataBuffer](error/alreadyhasdatabuffer.md): You attempted to set data on a sample buffer that already contains media data.
- [arrayTooSmall](error/arraytoosmall.md): The output array isn’t large enough to hold the requested array.
- [bufferHasNoSampleSizes](error/bufferhasnosamplesizes.md): You requested sample sizes on a buffer that doesn’t provide that information.
- [bufferHasNoSampleTimingInfo](error/bufferhasnosampletiminginfo.md): You requested sample timing on a buffer that doesn’t contain that information.
- [bufferNotReady](error/buffernotready.md): The system can’t make the buffer’s data ready for use.
- [cannotSubdivide](error/cannotsubdivide.md): A sample buffer doesn’t contain sample sizes.
- [dataCanceled](error/datacanceled.md): A sample buffer canceled its data loading operation.
- [dataFailed](error/datafailed.md): A sample buffer failed to load its data.
- [invalidEntryCount](error/invalidentrycount.md): A timing or size value isn’t within the allowed range.
- [invalidMediaFormat](error/invalidmediaformat.md): The format of the media doesn’t match the sample buffer’s format description.
- [invalidMediaTypeForOperation](error/invalidmediatypeforoperation.md): The media type the format description defines isn’t value for the requested operation.
- [invalidSampleData](error/invalidsampledata.md): The sample buffer contains bad data.
- [invalidated](error/invalidated.md): A sample buffer invalidated its data.
- [requiredParameterMissing](error/requiredparametermissing.md): You didn’t provide a valid value for a required parameter.
- [sampleIndexOutOfRange](error/sampleindexoutofrange.md): You specified a sample index that’s outside of the range of samples that the buffer contains.
- [sampleTimingInfoInvalid](error/sampletiminginfoinvalid.md): The sample buffer unexpectedly contains nonnumeric sample timing information.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [CMSampleBuffer.Flags](flags.md): Flags that customize the behavior of framework operations.
- [CMSampleBuffer.NotificationKey](notificationkey.md): A key for sample buffer notifications.
