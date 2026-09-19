> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/filter

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
