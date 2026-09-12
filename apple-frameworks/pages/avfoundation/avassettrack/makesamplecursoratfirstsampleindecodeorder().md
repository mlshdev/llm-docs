> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/makesamplecursoratfirstsampleindecodeorder()](https://developer.apple.com/documentation/avfoundation/avassettrack/makesamplecursoratfirstsampleindecodeorder())

# makeSampleCursorAtFirstSampleInDecodeOrder() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample cursor and positions it at the track’s first media sample in decode order.

## Declaration

```swift
func makeSampleCursorAtFirstSampleInDecodeOrder() -> AVSampleCursor?
```

<a id="return-value"></a>

## Return Value

An instance of [AVSampleCursor](../avsamplecursor.md).

## See Also

### Creating sample cursors

- [makeSampleCursor(presentationTimeStamp:)](makesamplecursor%28presentationtimestamp_%29.md): Creates a sample cursor and positions it at or near the specified presentation timestamp.
- [makeSampleCursorAtLastSampleInDecodeOrder()](makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.

# makeSampleCursorAtFirstSampleInDecodeOrder (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample cursor and positions it at the track’s first media sample in decode order.

## Declaration

```objectivec
- (AVSampleCursor *) makeSampleCursorAtFirstSampleInDecodeOrder;
```

<a id="return-value"></a>

## Return Value

An instance of [AVSampleCursor](../avsamplecursor.md).

## See Also

### Creating sample cursors

- [canProvideSampleCursors](canprovidesamplecursors.md): Deprecated. A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.
- [makeSampleCursorWithPresentationTimeStamp:](makesamplecursor%28presentationtimestamp_%29.md): Creates a sample cursor and positions it at or near the specified presentation timestamp.
- [makeSampleCursorAtLastSampleInDecodeOrder](makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.
