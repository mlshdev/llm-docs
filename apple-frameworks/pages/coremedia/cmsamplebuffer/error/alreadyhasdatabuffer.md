> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/error/alreadyhasdatabuffer](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/error/alreadyhasdatabuffer)

# alreadyHasDataBuffer

**Framework:** Core Media  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

You attempted to set data on a sample buffer that already contains media data.

## Declaration

```swift
static let alreadyHasDataBuffer: NSError
```

## See Also

### Errors

- [allocationFailed](allocationfailed.md): The system failed to allocate memory.
- [arrayTooSmall](arraytoosmall.md): The output array isn’t large enough to hold the requested array.
- [bufferHasNoSampleSizes](bufferhasnosamplesizes.md): You requested sample sizes on a buffer that doesn’t provide that information.
- [bufferHasNoSampleTimingInfo](bufferhasnosampletiminginfo.md): You requested sample timing on a buffer that doesn’t contain that information.
- [bufferNotReady](buffernotready.md): The system can’t make the buffer’s data ready for use.
- [cannotSubdivide](cannotsubdivide.md): A sample buffer doesn’t contain sample sizes.
- [dataCanceled](datacanceled.md): A sample buffer canceled its data loading operation.
- [dataFailed](datafailed.md): A sample buffer failed to load its data.
- [invalidEntryCount](invalidentrycount.md): A timing or size value isn’t within the allowed range.
- [invalidMediaFormat](invalidmediaformat.md): The format of the media doesn’t match the sample buffer’s format description.
- [invalidMediaTypeForOperation](invalidmediatypeforoperation.md): The media type the format description defines isn’t value for the requested operation.
- [invalidSampleData](invalidsampledata.md): The sample buffer contains bad data.
- [invalidated](invalidated.md): A sample buffer invalidated its data.
- [requiredParameterMissing](requiredparametermissing.md): You didn’t provide a valid value for a required parameter.
- [sampleIndexOutOfRange](sampleindexoutofrange.md): You specified a sample index that’s outside of the range of samples that the buffer contains.
