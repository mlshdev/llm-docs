> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_proc_fork](https://developer.apple.com/documentation/dispatch/dispatch_proc_fork)

# DISPATCH_PROC_FORK (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process created one or more child processes.

## Declaration

```swift
var DISPATCH_PROC_FORK: Int32 { get }
```

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXEC](dispatch_proc_exec.md): The process became another executable image.
- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_SIGNAL](dispatch_proc_signal.md): The process received a UNIX signal.

# DISPATCH_PROC_FORK (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process created one or more child processes.

## Declaration

```objectivec
#define DISPATCH_PROC_FORK
```

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXEC](dispatch_proc_exec.md): The process became another executable image.
- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_SIGNAL](dispatch_proc_signal.md): The process received a UNIX signal.
