> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/stepindecodeorder(by:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/stepindecodeorder(by:completionhandler:))

# stepInDecodeOrder(by:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor a given number of samples in decode order.

## Declaration

```swift
func stepInDecodeOrder(by stepCount: Int64, completionHandler: @escaping @Sendable (Int64, (any Error)?) -> Void)
```

```swift
func stepInDecodeOrder(by stepCount: Int64) async throws -> Int64
```

## Parameters

- `stepCount`: The number of samples to move. If positive, the cursor steps forward. If negative, the cursor steps backward.
- `completionHandler`: The completion block to execute when the move operation finishes.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSs(than:)](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocation()](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime(\_:completionHandler:)](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInPresentationOrder(by:completionHandler:)](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.

# stepInDecodeOrderByCount:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor a given number of samples in decode order.

## Declaration

```objectivec
- (void) stepInDecodeOrderByCount:(int64_t) stepCount completionHandler:(void (^)(int64_t actualStepCount, NSError *error)) completionHandler;
```

## Parameters

- `stepCount`: The number of samples to move. If positive, the cursor steps forward. If negative, the cursor steps backward.
- `completionHandler`: The completion block to execute when the move operation finishes.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime:completionHandler:](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInPresentationOrderByCount:completionHandler:](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.
