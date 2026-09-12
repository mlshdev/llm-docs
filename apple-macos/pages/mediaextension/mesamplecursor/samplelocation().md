> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/samplelocation()](https://developer.apple.com/documentation/mediaextension/mesamplecursor/samplelocation())

# sampleLocation() (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns the location and byte source of the sample indicated by the cursor.

## Declaration

```swift
optional func sampleLocation() throws -> MESampleLocation
```

<a id="return-value"></a>

## Return Value

A sample location.

<a id="Discussion"></a>

## Discussion

Sample data needs to be contiguous. If the sample data isn’t contiguous or the cursor doesn’t support this method, it fails with the error [MEError.Code.locationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md). In this case, use [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the data.

If it’s not possible to implement this method, implement [estimatedSampleLocation()](estimatedsamplelocation%28%29.md) to get an estimated sample location, and [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to analyze this data and provide precise location and size info.

## See Also

### Sending samples to a pipeline

- [chunkDetails()](chunkdetails%28%29.md): Returns information about the chunk that holds the sample indicated by the cursor.
- [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md): Builds a sample buffer that contains the samples at the cursor that you specify.

# sampleLocationReturningError: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns the location and byte source of the sample indicated by the cursor.

## Declaration

```objectivec
- (MESampleLocation *) sampleLocationReturningError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A sample location. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

Sample data needs to be contiguous. If the sample data isn’t contiguous or the cursor doesn’t support this method, it fails with the error [MEErrorLocationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md). In this case, use [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the data.

If it’s not possible to implement this method, implement [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md) to get an estimated sample location, and [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md) to analyze this data and provide precise location and size info.

## See Also

### Sending samples to a pipeline

- [chunkDetailsReturningError:](chunkdetails%28%29.md): Returns information about the chunk that holds the sample indicated by the cursor.
- [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md): Builds a sample buffer that contains the samples at the cursor that you specify.
