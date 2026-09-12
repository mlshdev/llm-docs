> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/event/erroroccurred](https://developer.apple.com/documentation/foundation/stream/event/erroroccurred)

# errorOccurred (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error has occurred on the stream.

## Declaration

```swift
static var errorOccurred: Stream.Event { get }
```

## Mentioned In

- [Uploading streams of data](../../uploading-streams-of-data.md)

## See Also

### Constants

- [openCompleted](opencompleted.md): The open has completed successfully.
- [hasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [hasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [endEncountered](endencountered.md): The end of the stream has been reached.

# NSStreamEventErrorOccurred (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error has occurred on the stream.

## Declaration

```objectivec
NSStreamEventErrorOccurred
```

## Mentioned In

- [Uploading streams of data](../../uploading-streams-of-data.md)

## See Also

### Constants

- [NSStreamEventOpenCompleted](opencompleted.md): The open has completed successfully.
- [NSStreamEventHasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [NSStreamEventHasSpaceAvailable](hasspaceavailable.md): The stream can accept bytes for writing.
- [NSStreamEventEndEncountered](endencountered.md): The end of the stream has been reached.
- [NSStreamEventNone](../../nsstreamevent/nsstreameventnone.md): No event has occurred.
