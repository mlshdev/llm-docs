> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps(laterthan:)](https://developer.apple.com/documentation/avfoundation/avsamplecursor/maysampleswithearlierdecodetimestampshavepresentationtimestamps(laterthan:))

# maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Determines whether a sample earlier in decode order can have a presentation timestamp later than that of the specified sample cursor.

## Declaration

```swift
func maySamplesWithEarlierDecodeTimeStampsHavePresentationTimeStamps(laterThan cursor: AVSampleCursor) -> Bool
```

## Parameters

- `cursor`: An instance of `AVSampleCursor` with which to test the sample reordering boundary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it’s possible for any sample earlier in decode order than the sample at the position of the receiver can have a presentation timestamp later than that of the specified sample cursor; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Undefined results occur if this cursor and the passed in cursor reference different sequences of samples, such as when they’re created by different instances of [AVAssetTrack](../avassettrack.md).

## See Also

### Accessing samples

- [maySamplesWithLaterDecodeTimeStampsHavePresentationTimeStamps(earlierThan:)](maysampleswithlaterdecodetimestampshavepresentationtimestamps%28earlierthan_%29.md): Determines whether a sample later in decode order can have a presentation timestamp earlier than that of the specified sample cursor.
- [samplesRequiredForDecoderRefresh](samplesrequiredfordecoderrefresh.md): The number of samples prior to the current sample, in decode order, the decoder requires to achieve a coherent output at the current decode time.

# samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Determines whether a sample earlier in decode order can have a presentation timestamp later than that of the specified sample cursor.

## Declaration

```objectivec
- (BOOL) samplesWithEarlierDecodeTimeStampsMayHaveLaterPresentationTimeStampsThanCursor:(AVSampleCursor *) cursor;
```

## Parameters

- `cursor`: An instance of `AVSampleCursor` with which to test the sample reordering boundary.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if it’s possible for any sample earlier in decode order than the sample at the position of the receiver can have a presentation timestamp later than that of the specified sample cursor; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Undefined results occur if this cursor and the passed in cursor reference different sequences of samples, such as when they’re created by different instances of [AVAssetTrack](../avassettrack.md).

## See Also

### Accessing samples

- [samplesWithLaterDecodeTimeStampsMayHaveEarlierPresentationTimeStampsThanCursor:](maysampleswithlaterdecodetimestampshavepresentationtimestamps%28earlierthan_%29.md): Determines whether a sample later in decode order can have a presentation timestamp earlier than that of the specified sample cursor.
- [samplesRequiredForDecoderRefresh](samplesrequiredfordecoderrefresh.md): The number of samples prior to the current sample, in decode order, the decoder requires to achieve a coherent output at the current decode time.
