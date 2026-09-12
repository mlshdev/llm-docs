> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostream/1809761-inputsynccallback](https://developer.apple.com/documentation/kernel/iostream/1809761-inputsynccallback)

# inputSyncCallback

**Interface language:** Objective-C

**Framework:** Kernel

Input callback function to be implemented by a subclass.

## Declaration

```objectivec
virtual void inputSyncCallback(
 UInt32token ); 
```

## Parameters

- `token`: A 32-bit token value that can be used by convention to communicate from user space to the stream. The semantics of this value are defined by the IOStream subclass.

<a id="overview"></a>

## Overview

The inputSyncCallback() method is called as a result of a fast trap from user space. It is called on the same thread as the user request, so no context switch is necessary.

## See Also

### Managing notifications

- [inputCallback](1809754-inputcallback.md): Input callback function to be implemented by a subclass;
