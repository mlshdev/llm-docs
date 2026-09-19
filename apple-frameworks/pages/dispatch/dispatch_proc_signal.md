> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatch_proc_signal

# DISPATCH_PROC_SIGNAL (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process received a UNIX signal.

## Declaration

```swift
var DISPATCH_PROC_SIGNAL: Int32 { get }
```

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXEC](dispatch_proc_exec.md): The process became another executable image.
- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_FORK](dispatch_proc_fork.md): The process created one or more child processes.

# DISPATCH_PROC_SIGNAL (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process received a UNIX signal.

## Declaration

```objectivec
#define DISPATCH_PROC_SIGNAL
```

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXEC](dispatch_proc_exec.md): The process became another executable image.
- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_FORK](dispatch_proc_fork.md): The process created one or more child processes.
