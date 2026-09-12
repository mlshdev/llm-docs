> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_multipassstorage](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_multipassstorage)

# kVTCompressionPropertyKey_MultiPassStorage (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

A property key that enables multipass compression and provides storage for encoder private data.

## Declaration

```swift
let kVTCompressionPropertyKey_MultiPassStorage: CFString
```

<a id="Discussion"></a>

## Discussion

Some video encoders support multipass encoding.  To determine whether a [VTCompressionSession](vtcompressionsession-api-collection.md) supports multipass encoding, you can inspect the dictionary returned by [VTSessionCopySupportedPropertyDictionary(\_:supportedPropertyDictionaryOut:)](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md) to see if it contains [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

To enable multipass encoding, set the [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md) property to a [VTMultiPassStorage](vtmultipassstorage-api-collection.md) object, which you can create by calling [VTMultiPassStorageCreate(allocator:fileURL:timeRange:options:multiPassStorageOut:)](vtmultipassstoragecreate%28allocator_fileurl_timerange_options_multipassstorageout_%29.md).  Then make one or more passes over the source frames.  Bracket each pass with a call to [VTCompressionSessionBeginPass(\_:flags:\_:)](vtcompressionsessionbeginpass%28__flags___%29.md) at the beginning and [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) at the end.

In the first pass of multipass encoding, call [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) for every source frame (just as in single-pass encoding).  At the end of every pass, call [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md).  This may take some time as the video encoder determines whether it can improve the encoding by performing another pass.  If the user cancels encoding during this time, call [VTCompressionSessionInvalidate(\_:)](vtcompressionsessioninvalidate%28__%29.md) to interrupt the processing.  [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) indicates through the `furtherPassesRequestedOut` argument whether the video encoder has requested another pass.  There is no particular limit on the number of passes the video encoder may request, but the client is free to disregard this request and use the last-emitted set of frames.

If `furtherPassesRequestedOut` is set to [true](https://developer.apple.com/documentation/swift/true) and you want to perform another pass, call [VTCompressionSessionGetTimeRangesForNextPass(\_:timeRangeCountOut:timeRangeArrayOut:)](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md) to determine the time ranges for the next pass.  Only the source frames within these time ranges need to be passed to [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md); the video encoder is satisfied with the already-emitted compressed frames outside these ranges, and they can be kept for the final output.

In second and successive passes, you must pass identical source frames, frame properties, and timestamps to [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) as in the first pass, with the exception that frames not in the requested time ranges should be skipped.

You can create and use a [VTFrameSilo](vtframesilo-api-collection.md) object to merge sequences of compressed frames across passes during multipass encoding.

# kVTCompressionPropertyKey_MultiPassStorage (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

A property key that enables multipass compression and provides storage for encoder private data.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_MultiPassStorage;
```

<a id="Discussion"></a>

## Discussion

Some video encoders support multipass encoding.  To determine whether a [VTCompressionSession](vtcompressionsession-api-collection.md) supports multipass encoding, you can inspect the dictionary returned by [VTSessionCopySupportedPropertyDictionary](vtsessioncopysupportedpropertydictionary%28__supportedpropertydictionaryout_%29.md) to see if it contains [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

To enable multipass encoding, set the [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md) property to a [VTMultiPassStorage](vtmultipassstorage-api-collection.md) object, which you can create by calling [VTMultiPassStorageCreate](vtmultipassstoragecreate%28allocator_fileurl_timerange_options_multipassstorageout_%29.md).  Then make one or more passes over the source frames.  Bracket each pass with a call to [VTCompressionSessionBeginPass](vtcompressionsessionbeginpass%28__flags___%29.md) at the beginning and [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) at the end.

In the first pass of multipass encoding, call [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) for every source frame (just as in single-pass encoding).  At the end of every pass, call [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md).  This may take some time as the video encoder determines whether it can improve the encoding by performing another pass.  If the user cancels encoding during this time, call [VTCompressionSessionInvalidate](vtcompressionsessioninvalidate%28__%29.md) to interrupt the processing.  [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) indicates through the `furtherPassesRequestedOut` argument whether the video encoder has requested another pass.  There is no particular limit on the number of passes the video encoder may request, but the client is free to disregard this request and use the last-emitted set of frames.

If `furtherPassesRequestedOut` is set to [true](https://developer.apple.com/documentation/swift/true) and you want to perform another pass, call [VTCompressionSessionGetTimeRangesForNextPass](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md) to determine the time ranges for the next pass.  Only the source frames within these time ranges need to be passed to [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md); the video encoder is satisfied with the already-emitted compressed frames outside these ranges, and they can be kept for the final output.

In second and successive passes, you must pass identical source frames, frame properties, and timestamps to [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md) as in the first pass, with the exception that frames not in the requested time ranges should be skipped.

You can create and use a [VTFrameSilo](vtframesilo-api-collection.md) object to merge sequences of compressed frames across passes during multipass encoding.
