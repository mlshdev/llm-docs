> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/sampleswithlaterdtssmayhaveearlierptss(than:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/sampleswithlaterdtssmayhaveearlierptss(than:))

# samplesWithLaterDTSsMayHaveEarlierPTSs(than:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Tests for a later boundary in sample reordering.

## Declaration

```swift
optional func samplesWithLaterDTSsMayHaveEarlierPTSs(than cursor: any MESampleCursor) -> Bool
```

## Parameters

- `cursor`: A sample cursor to use to test the sample reordering boundary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it’s possible that later samples in decode order can have an earlier presentation timestamp than that of the specified cursor; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method tests for a boundary in the reordering from decode order to presentation order. This determines when it’s possible for any sample later in decode order than the current sample to have an earllier presentation time than the current sample of the specified cursor. You can use this test to limit backward scans, such as to start forward playback. For example, with the argument cursor fixed, step the cursor forward until it’s impossible for any later-in-decode-order samples to be earlier-in-presentation-order than the argument cursor sample.

Don’t implement this method for formats where sample reordering doesn’t make sense for the track content, which also indicates that the samples aren’t reordered.

> **Important**

>  Only pass a cursor to this method that references the same sequence of samples as the cursor you call this method on, such as that the same instance of [METrackReader](../metrackreader.md) created. Otherwise, the result is undefined.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSs(than:)](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [estimatedSampleLocation()](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation(\_:refinementData:refinementDataLength:refinedLocation:)](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime(\_:completionHandler:)](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime(\_:completionHandler:)](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrder(by:completionHandler:)](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrder(by:completionHandler:)](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.

# samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Tests for a later boundary in sample reordering.

## Declaration

```objectivec
- (BOOL) samplesWithLaterDTSsMayHaveEarlierPTSsThanCursor:(id<MESampleCursor>) cursor;
```

## Parameters

- `cursor`: A sample cursor to use to test the sample reordering boundary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it’s possible that later samples in decode order can have an earlier presentation timestamp than that of the specified cursor; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method tests for a boundary in the reordering from decode order to presentation order. This determines when it’s possible for any sample later in decode order than the current sample to have an earllier presentation time than the current sample of the specified cursor. You can use this test to limit backward scans, such as to start forward playback. For example, with the argument cursor fixed, step the cursor forward until it’s impossible for any later-in-decode-order samples to be earlier-in-presentation-order than the argument cursor sample.

Don’t implement this method for formats where sample reordering doesn’t make sense for the track content, which also indicates that the samples aren’t reordered.

> **Important**

>  Only pass a cursor to this method that references the same sequence of samples as the cursor you call this method on, such as that the same instance of [METrackReader](../metrackreader.md) created. Otherwise, the result is undefined.

## See Also

### Stepping through samples

- [samplesWithEarlierDTSsMayHaveLaterPTSsThanCursor:](sampleswithearlierdtssmayhavelaterptss%28than_%29.md): Tests for an earlier boundary in sample reordering.
- [estimatedSampleLocationReturningError:](estimatedsamplelocation%28%29.md): Returns an estimate of the sample location indicated by the cursor.
- [refineSampleLocation:refinementData:refinementDataLength:refinedLocation:error:](refinesamplelocation%28__refinementdata_refinementdatalength_refinedlocation_%29.md): Produces an exact sample location based on the estimated sample location and refinement data that you specify.
- [stepByDecodeTime:completionHandler:](stepbydecodetime%28__completionhandler_%29.md): Moves the cursor on the decode timeline by the delta decode time that you specify.
- [stepByPresentationTime:completionHandler:](stepbypresentationtime%28__completionhandler_%29.md): Moves the cursor on the presentation timeline by the delta presentation time that you specify.
- [stepInDecodeOrderByCount:completionHandler:](stepindecodeorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in decode order.
- [stepInPresentationOrderByCount:completionHandler:](stepinpresentationorder%28by_completionhandler_%29.md): Moves the cursor a given number of samples in presentation order.
