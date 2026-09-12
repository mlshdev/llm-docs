> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrack/canprovidesamplecursors](https://developer.apple.com/documentation/avfoundation/avassettrack/canprovidesamplecursors)

# canProvideSampleCursors (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 13.0)

A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.

> Load the value of [canProvideSampleCursors](../avpartialasyncproperty/canprovidesamplecursors.md) asynchronously instead.

## Declaration

```swift
var canProvideSampleCursors: Bool { get }
```

# canProvideSampleCursors (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that indicates whether the track can provide instances of sample cursors to traverse its media samples and discover information.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canProvideSampleCursors;
```

## See Also

### Creating sample cursors

- [makeSampleCursorWithPresentationTimeStamp:](makesamplecursor%28presentationtimestamp_%29.md): Creates a sample cursor and positions it at or near the specified presentation timestamp.
- [makeSampleCursorAtFirstSampleInDecodeOrder](makesamplecursoratfirstsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s first media sample in decode order.
- [makeSampleCursorAtLastSampleInDecodeOrder](makesamplecursoratlastsampleindecodeorder%28%29.md): Creates a sample cursor and positions it at the track’s last media sample in decode order.
