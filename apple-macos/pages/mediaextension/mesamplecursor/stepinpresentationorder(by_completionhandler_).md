> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/stepinpresentationorder(by:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/stepinpresentationorder(by:completionhandler:))

# stepInPresentationOrder(by:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor a given number of samples in presentation order.

## Declaration

```swift
func stepInPresentationOrder(by stepCount: Int64, completionHandler: @escaping @Sendable (Int64, (any Error)?) -> Void)
```

```swift
func stepInPresentationOrder(by stepCount: Int64) async throws -> Int64
```

## Parameters

- `stepCount`: The number of samples to move. If positive, the cursor steps forward. If negative, the cursor steps backward.
- `completionHandler`: The completion block to execute when the move operation finishes.

<a id="Discussion"></a>

## Discussion

If the request would advance the cursor past the last sample or before the first sample, the cursor points to that limiting sample and `actualStepCount` is equal to the number of samples the cursor moved. If decode order and presentation order are the same, in other words, the samples aren’t reordered, this method has the same effect as [stepInDecodeOrder(byCount:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/stepindecodeorder%28bycount:%29).

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSs(than:)](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocation()](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime(\_:completionHandler:)](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrder(by:completionHandler:)](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.

# stepInPresentationOrderByCount:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor a given number of samples in presentation order.

## Declaration

```objectivec
- (void) stepInPresentationOrderByCount:(int64_t) stepCount completionHandler:(void (^)(int64_t actualStepCount, NSError *error)) completionHandler;
```

## Parameters

- `stepCount`: The number of samples to move. If positive, the cursor steps forward. If negative, the cursor steps backward.
- `completionHandler`: The completion block to execute when the move operation finishes.

<a id="Discussion"></a>

## Discussion

If the request would advance the cursor past the last sample or before the first sample, the cursor points to that limiting sample and `actualStepCount` is equal to the number of samples the cursor moved. If decode order and presentation order are the same, in other words, the samples aren’t reordered, this method has the same effect as [stepInDecodeOrderByCount:](https://developer.apple.com/documentation/avfoundation/avsamplecursor/stepindecodeorder%28bycount:%29).

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime:completionHandler:](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrderByCount:completionHandler:](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
