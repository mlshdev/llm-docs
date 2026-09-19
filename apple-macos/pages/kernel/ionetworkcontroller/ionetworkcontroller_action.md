> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ionetworkcontroller/ionetworkcontroller_action

# IONetworkController::Action

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef IOReturn ( *Action)(
   void *target,
   void *param0,
   void *param1,
   void *param2,
   void *param3);
```

## Parameters

- `target`: The first argument passed to action.
- `param0`: Action parameter 0.
- `param1`: Action parameter 1.
- `param2`: Action parameter 2.
- `param3`: Action parameter 3.

<a id="overview"></a>

## Overview

Definition of a C function that can be called through executeCommand().

## See Also

### Callbacks

- [Action](../ioworkloop/action.md)
