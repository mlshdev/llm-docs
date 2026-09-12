> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstreameventtype/hasbytesavailable](https://developer.apple.com/documentation/corefoundation/cfstreameventtype/hasbytesavailable)

# hasBytesAvailable (Swift)

**Framework:** Core Foundation  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stream has bytes to be read.

## Declaration

```swift
static var hasBytesAvailable: CFStreamEventType { get }
```

## See Also

### Constants

- [openCompleted](opencompleted.md): The open has completed successfully.
- [canAcceptBytes](canacceptbytes.md): The stream can accept bytes for writing.
- [errorOccurred](erroroccurred.md): An error has occurred on the stream.
- [endEncountered](endencountered.md): The end of the stream has been reached.

# kCFStreamEventHasBytesAvailable (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The stream has bytes to be read.

## Declaration

```objectivec
kCFStreamEventHasBytesAvailable
```

## See Also

### Constants

- [kCFStreamEventNone](kcfstreameventnone.md): No event has occurred.
- [kCFStreamEventOpenCompleted](opencompleted.md): The open has completed successfully.
- [kCFStreamEventCanAcceptBytes](canacceptbytes.md): The stream can accept bytes for writing.
- [kCFStreamEventErrorOccurred](erroroccurred.md): An error has occurred on the stream.
- [kCFStreamEventEndEncountered](endencountered.md): The end of the stream has been reached.
