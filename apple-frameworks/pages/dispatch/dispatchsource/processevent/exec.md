> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsource/processevent/exec](https://developer.apple.com/documentation/dispatch/dispatchsource/processevent/exec)

# exec

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process became another executable image.

## Declaration

```swift
static let exec: DispatchSource.ProcessEvent
```

<a id="Discussion"></a>

## Discussion

The process has become another executable image via an `exec` or `posix_spawn` function family call.

## See Also

### Process Event Flags

- [all](all.md): All process-related events.
- [exit](exit.md): The process has exited (perhaps cleanly, perhaps not).
- [fork](fork.md): The process created one or more child processes.
- [signal](signal.md): The process received a UNIX signal.
