> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/stepbypresentationtime(_:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/stepbypresentationtime(_:completionhandler:))

# stepByPresentationTime(\_:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor on the presentation timeline by the delta presentation time that you specify.

## Declaration

```swift
func stepByPresentationTime(_ deltaPresentationTime: CMTime, completionHandler: @escaping @Sendable (CMTime, Bool, (any Error)?) -> Void)
```

```swift
func stepByPresentationTime(_ deltaPresentationTime: CMTime) async throws -> (CMTime, Bool)
```

## Parameters

- `deltaPresentationTime`: The presentation time to move the sample cursor to.
- `completionHandler`: The completion block to execute when the move operation finishes.

<a id="Discussion"></a>

## Discussion

The value for `actualDecodeTime` is the final cursor presentation time. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the current sample decode time + `deltaPresentationTime`, even if the cursor isn’t pinned.

If the request would advance the cursor past the end of the last sample or before the first sample, this method sets the cursor to point to that limiting sample, and sets `positionWasPinned` to [true](https://developer.apple.com/documentation/swift/true). Otherwise, it sets `positionWasPinned` to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSs(than:)](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocation()](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepInDecodeOrder(by:completionHandler:)](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(by:completionHandler:)](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.

# stepByPresentationTime:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Moves the cursor on the presentation timeline by the delta presentation time that you specify.

## Declaration

```objectivec
- (void) stepByPresentationTime:(CMTime) deltaPresentationTime completionHandler:(void (^)(CMTime actualPresentationTime, BOOL positionWasPinned, NSError *error)) completionHandler;
```

## Parameters

- `deltaPresentationTime`: The presentation time to move the sample cursor to.
- `completionHandler`: The completion block to execute when the move operation finishes.

<a id="Discussion"></a>

## Discussion

The value for `actualDecodeTime` is the final cursor presentation time. Because sample cursors snap to sample boundaries when stepped, this value may not be equal to the current sample decode time + `deltaPresentationTime`, even if the cursor isn’t pinned.

If the request would advance the cursor past the end of the last sample or before the first sample, this method sets the cursor to point to that limiting sample, and sets `positionWasPinned` to [true](https://developer.apple.com/documentation/swift/true). Otherwise, it sets `positionWasPinned` to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:](sampleswithlaterdtssmayhaveearlierptss%28than_%29.md): Tests for a later boundary in sample reordering.
- [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepInDecodeOrderByCount:completionHandler:](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:completionHandler:](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.
