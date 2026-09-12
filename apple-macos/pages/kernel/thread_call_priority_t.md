> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/thread_call_priority_t](https://developer.apple.com/documentation/kernel/thread_call_priority_t)

# thread_call_priority_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration  
**Availability:** macOS 10.8+

## Declaration

```objectivec
typedef enum thread_call_priority_t : unsigned int {
    ...
} thread_call_priority_t;
```

<a id="overview"></a>

## Overview

Thread call priorities should not be assumed to have any specific numerical value; they should be interpreted as importances or roles for work items, priorities for which will be reasonably managed by the subsystem.

## Topics

### Constants

- [THREAD_CALL_PRIORITY_HIGH](thread_call_priority_t/thread_call_priority_high.md)
- [THREAD_CALL_PRIORITY_KERNEL](thread_call_priority_t/thread_call_priority_kernel.md)
- [THREAD_CALL_PRIORITY_USER](thread_call_priority_t/thread_call_priority_user.md)
- [THREAD_CALL_PRIORITY_LOW](thread_call_priority_t/thread_call_priority_low.md)
- [THREAD_CALL_PRIORITY_KERNEL_HIGH](thread_call_priority_t/thread_call_priority_kernel_high.md)
