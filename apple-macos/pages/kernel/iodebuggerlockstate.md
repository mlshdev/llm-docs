> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodebuggerlockstate

# IODebuggerLockState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef enum IODebuggerLockState : unsigned int {
    ...
} IODebuggerLockState;
```

<a id="overview"></a>

## Overview

Defines flags returned by IOKernelDebugger::lock().

## Topics

### Constants

- [kIODebuggerLockTaken](iodebuggerlockstate/kiodebuggerlocktaken.md)
