> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/event/hasbytesavailable](https://developer.apple.com/documentation/foundation/stream/event/hasbytesavailable)

# hasBytesAvailable (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stream has bytes to be read.

## Declaration

```swift
static var hasBytesAvailable: Stream.Event { get }
```

## See Also

### Constants

- [openCompleted](opencompleted.md): The open has completed successfully.
- [hasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [errorOccurred](erroroccurred.md): An error has occurred on the stream.
- [endEncountered](endencountered.md): The end of the stream has been reached.

# NSStreamEventHasBytesAvailable (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stream has bytes to be read.

## Declaration

```objectivec
NSStreamEventHasBytesAvailable
```

## See Also

### Constants

- [NSStreamEventOpenCompleted](opencompleted.md): The open has completed successfully.
- [NSStreamEventHasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [NSStreamEventErrorOccurred](erroroccurred.md): An error has occurred on the stream.
- [NSStreamEventEndEncountered](endencountered.md): The end of the stream has been reached.
- [NSStreamEventNone](../../nsstreamevent/nsstreameventnone.md): No event has occurred.
