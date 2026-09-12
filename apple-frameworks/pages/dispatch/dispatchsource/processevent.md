> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/processevent](https://developer.apple.com/documentation/dispatch/dispatchsource/processevent)

# DispatchSource.ProcessEvent

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Events related to a process.

## Declaration

```swift
struct ProcessEvent
```

## Topics

### Process Event Flags

- [all](processevent/all.md): All process-related events.
- [exec](processevent/exec.md): The process became another executable image.
- [exit](processevent/exit.md): The process has exited (perhaps cleanly, perhaps not).
- [fork](processevent/fork.md): The process created one or more child processes.
- [signal](processevent/signal.md): The process received a UNIX signal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Process Source

- [makeProcessSource(identifier:eventMask:queue:)](makeprocesssource%28identifier_eventmask_queue_%29.md): Creates a new dispatch source object for monitoring the specified process.
- [DispatchSourceProcess](../dispatchsourceprocess.md): A dispatch source that monitors an external process for events.
