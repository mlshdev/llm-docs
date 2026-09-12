> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/makesamplecursor(presentationtimestamp:)](https://developer.apple.com/documentation/avfoundation/avassettrack/makesamplecursor(presentationtimestamp:))

# makeSampleCursor(presentationTimeStamp:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample cursor and positions it at or near the specified presentation timestamp.

## Declaration

```swift
func makeSampleCursor(presentationTimeStamp: CMTime) -> AVSampleCursor?
```

## Parameters

- `presentationTimeStamp`: The initial presentation timestamp of the sample cursor.

<a id="return-value"></a>

## Return Value

An instance of [AVSampleCursor](../avsamplecursor.md).

<a id="Discussion"></a>

## Discussion

If the track’s [asset](asset.md) property value for [providesPreciseDurationAndTiming](../avasset/providesprecisedurationandtiming.md) is [true](https://developer.apple.com/documentation/swift/true), the sample cursor is accurately positioned at the track’slast media sample with a presentation timestamp less than or equal to the desired timestamp, or, if there are no such samples, the first sample in presentation order.

If the track’s [asset](asset.md) property value for [providesPreciseDurationAndTiming](../avasset/providesprecisedurationandtiming.md) is [false](https://developer.apple.com/documentation/swift/false), and it’s prohibitively expensive to locate the precise sample at the desired timestamp, the sample cursor may be approximately positioned.

## See Also

### Creating sample cursors

- [makeSampleCursorAtFirstSampleInDecodeOrder()](makesamplecursoratfirstsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s first media sample in decode order.
- [makeSampleCursorAtLastSampleInDecodeOrder()](makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.

# makeSampleCursorWithPresentationTimeStamp: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample cursor and positions it at or near the specified presentation timestamp.

## Declaration

```objectivec
- (AVSampleCursor *) makeSampleCursorWithPresentationTimeStamp:(CMTime) presentationTimeStamp;
```

## Parameters

- `presentationTimeStamp`: The initial presentation timestamp of the sample cursor.

<a id="return-value"></a>

## Return Value

An instance of [AVSampleCursor](../avsamplecursor.md).

<a id="Discussion"></a>

## Discussion

If the track’s [asset](asset.md) property value for [providesPreciseDurationAndTiming](../avasset/providesprecisedurationandtiming.md) is [true](https://developer.apple.com/documentation/swift/true), the sample cursor is accurately positioned at the track’slast media sample with a presentation timestamp less than or equal to the desired timestamp, or, if there are no such samples, the first sample in presentation order.

If the track’s [asset](asset.md) property value for [providesPreciseDurationAndTiming](../avasset/providesprecisedurationandtiming.md) is [false](https://developer.apple.com/documentation/swift/false), and it’s prohibitively expensive to locate the precise sample at the desired timestamp, the sample cursor may be approximately positioned.

## See Also

### Creating sample cursors

- [canProvideSampleCursors](canprovidesamplecursors.md): Deprecated. A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.
- [makeSampleCursorAtFirstSampleInDecodeOrder](makesamplecursoratfirstsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s first media sample in decode order.
- [makeSampleCursorAtLastSampleInDecodeOrder](makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.
