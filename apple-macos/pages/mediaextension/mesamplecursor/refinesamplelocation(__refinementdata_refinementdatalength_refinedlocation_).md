> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/refinesamplelocation(_:refinementdata:refinementdatalength:refinedlocation:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/refinesamplelocation(_:refinementdata:refinementdatalength:refinedlocation:))

# refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Produces an exact sample location based on the estimated sample location and refinement data that you specify.

## Declaration

```swift
optional func refineSampleLocation(_ estimatedSampleLocation: AVSampleCursorStorageRange, refinementData: UnsafePointer<UInt8>, refinementDataLength: Int, refinedLocation refinedLocationOut: UnsafeMutablePointer<AVSampleCursorStorageRange>) throws
```

## Parameters

- `estimatedSampleLocation`: The estimated sample location.
- `refinementData`: The refinement data.
- `refinementDataLength`: The length of the refinement data in bytes.
- `refinedLocationOut`: The starting file offset and size of the sample in bytes.

<a id="Discussion"></a>

## Discussion

Use [estimatedSampleLocation()](estimatedsamplelocation%28%29.md) to obtain the estimated sample location to pass to this method.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSs(than:)](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocation()](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime(\_:completionHandler:)](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrder(by:completionHandler:)](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(by:completionHandler:)](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.

# refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Produces an exact sample location based on the estimated sample location and refinement data that you specify.

## Declaration

```objectivec
- (BOOL) refineSampleLocation:(AVSampleCursorStorageRange) estimatedSampleLocation refinementData:(const uint8_t *) refinementData refinementDataLength:(size_t) refinementDataLength refinedLocation:(AVSampleCursorStorageRange *) refinedLocationOut error:(NSError **) error;
```

## Parameters

- `estimatedSampleLocation`: The estimated sample location.
- `refinementData`: The refinement data.
- `refinementDataLength`: The length of the refinement data in bytes.
- `refinedLocationOut`: The starting file offset and size of the sample in bytes.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md) to obtain the estimated sample location to pass to this method.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime:completionHandler:](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrderByCount:completionHandler:](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:completionHandler:](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.
