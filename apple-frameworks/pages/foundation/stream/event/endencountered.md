> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/event/endencountered](https://developer.apple.com/documentation/foundation/stream/event/endencountered)

# endEncountered (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The end of the stream has been reached.

## Declaration

```swift
static var endEncountered: Stream.Event { get }
```

## See Also

### Constants

- [openCompleted](opencompleted.md): The open has completed successfully.
- [hasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [hasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [errorOccurred](erroroccurred.md): An error has occurred on the stream.

# NSStreamEventEndEncountered (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The end of the stream has been reached.

## Declaration

```objectivec
NSStreamEventEndEncountered
```

## See Also

### Constants

- [NSStreamEventOpenCompleted](opencompleted.md): The open has completed successfully.
- [NSStreamEventHasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [NSStreamEventHasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [NSStreamEventErrorOccurred](erroroccurred.md): An error has occurred on the stream.
- [NSStreamEventNone](../../nsstreamevent/nsstreameventnone.md): No event has occurred.
