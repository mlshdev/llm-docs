> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/event/hasspaceavailable](https://developer.apple.com/documentation/foundation/stream/event/hasspaceavailable)

# hasSpaceAvailable (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stream can accept bytes for writing.

## Declaration

```swift
static var hasSpaceAvailable: Stream.Event { get }
```

## Mentioned In

- [Uploading streams of data](../../uploading-streams-of-data.md)

## See Also

### Constants

- [openCompleted](opencompleted.md): The open has completed successfully.
- [hasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [errorOccurred](erroroccurred.md): An error has occurred on the stream.
- [endEncountered](endencountered.md): The end of the stream has been reached.

# NSStreamEventHasSpaceAvailable (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stream can accept bytes for writing.

## Declaration

```objectivec
NSStreamEventHasSpaceAvailable
```

## Mentioned In

- [Uploading streams of data](../../uploading-streams-of-data.md)

## See Also

### Constants

- [NSStreamEventOpenCompleted](opencompleted.md): The open has completed successfully.
- [NSStreamEventHasBytesAvailable](hasbytesavailable.md): The stream has bytes to be read.
- [NSStreamEventErrorOccurred](erroroccurred.md): An error has occurred on the stream.
- [NSStreamEventEndEncountered](endencountered.md): The end of the stream has been reached.
- [NSStreamEventNone](../../nsstreamevent/nsstreameventnone.md): No event has occurred.
