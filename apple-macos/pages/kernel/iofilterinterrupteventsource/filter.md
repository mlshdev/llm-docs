> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/filter](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/filter)

# Filter

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef bool ( *Filter)(
   OSObject *,
   IOFilterInterruptEventSource *);
```

## Parameters

- `owner`: Pointer to the owning/client instance.
- `sender`: Where is the interrupt comming from.

<a id="return_value"></a>

## Return Value

false if this interrupt can be ignored.

<a id="overview"></a>

## Overview

C Function pointer to a routine to call when an interrupt occurs.
