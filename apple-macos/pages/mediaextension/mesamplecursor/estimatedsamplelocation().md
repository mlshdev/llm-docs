> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/estimatedsamplelocation()](https://developer.apple.com/documentation/mediaextension/mesamplecursor/estimatedsamplelocation())

# estimatedSampleLocation() (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns an estimate of the sample location indicated by the cursor.

## Declaration

```swift
optional func estimatedSampleLocation() throws -> MEEstimatedSampleLocation
```

<a id="return-value"></a>

## Return Value

An object that provides information about the estimated sample location.

<a id="Discussion"></a>

## Discussion

Some formats may need to read some data on a per-sample basis to produce the exact sample location. For these formats, it’s more efficient to read a larger chunk of data that contains both the data to produce the exact sample location and the actual sample data.

> **Note**

>  If you implement this method, also implement [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md).

Pass the value this method returns to [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to obtain the exact sample location.

To indicate that refinement isn’t necessary, return a value for [refinementDataLocation](../meestimatedsamplelocation/refinementdatalocation.md) that has a zero length. If [refinementDataLocation](../meestimatedsamplelocation/refinementdatalocation.md) has a non-zero length, the range for the estimated sample location needs to fully cover the refined range that [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) returns, and the refinement data location.

This method fails with the error [MEError.Code.locationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md) if the sample location indicated by the cursor isn’t contiguous or the method isn’t supported. In this case, use [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the sample data.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSs(than:)](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime(\_:completionHandler:)](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrder(by:completionHandler:)](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(by:completionHandler:)](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.

# estimatedSampleLocationReturningError: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns an estimate of the sample location indicated by the cursor.

## Declaration

```objectivec
- (MEEstimatedSampleLocation *) estimatedSampleLocationReturningError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An object that provides information about the estimated sample location. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Some formats may need to read some data on a per-sample basis to produce the exact sample location. For these formats, it’s more efficient to read a larger chunk of data that contains both the data to produce the exact sample location and the actual sample data.

> **Note**

>  If you implement this method, also implement [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md).

Pass the value this method returns to [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to obtain the exact sample location.

To indicate that refinement isn’t necessary, return a value for [refinementDataLocation](../meestimatedsamplelocation/refinementdatalocation.md) that has a zero length. If [refinementDataLocation](../meestimatedsamplelocation/refinementdatalocation.md) has a non-zero length, the range for the estimated sample location needs to fully cover the refined range that [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) returns, and the refinement data location.

This method fails with the error [MEErrorLocationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md) if the sample location indicated by the cursor isn’t contiguous or the method isn’t supported. In this case, use [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the sample data.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime:completionHandler:](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrderByCount:completionHandler:](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:completionHandler:](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.
