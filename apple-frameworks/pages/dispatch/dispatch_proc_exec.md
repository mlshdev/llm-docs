> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_proc_exec](https://developer.apple.com/documentation/dispatch/dispatch_proc_exec)

# DISPATCH_PROC_EXEC (Swift)

**Framework:** Dispatch  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process became another executable image.

## Declaration

```swift
var DISPATCH_PROC_EXEC: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

The process has become another executable image via an `exec` or `posix_spawn` function family call.

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_FORK](dispatch_proc_fork.md): The process created one or more child processes.
- [DISPATCH_PROC_SIGNAL](dispatch_proc_signal.md): The process received a UNIX signal.

# DISPATCH_PROC_EXEC (Objective-C)

**Framework:** Dispatch  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The process became another executable image.

## Declaration

```objectivec
#define DISPATCH_PROC_EXEC
```

<a id="Discussion"></a>

## Discussion

The process has become another executable image via an `exec` or `posix_spawn` function family call.

## See Also

### Process Event Flags

- [DISPATCH_PROC_EXIT](dispatch_proc_exit.md): The process has exited (perhaps cleanly, perhaps not).
- [DISPATCH_PROC_FORK](dispatch_proc_fork.md): The process created one or more child processes.
- [DISPATCH_PROC_SIGNAL](dispatch_proc_signal.md): The process received a UNIX signal.
