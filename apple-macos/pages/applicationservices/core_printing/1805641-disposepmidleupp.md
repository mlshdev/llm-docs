> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/core_printing/1805641-disposepmidleupp](https://developer.apple.com/documentation/applicationservices/core_printing/1805641-disposepmidleupp)

# DisposePMIdleUPP

**Interface language:** Objective-C

**Framework:** Application Services

Disposes of a universal procedure pointer (UPP) to an idle callback.

> There is no replacement; this function was included to facilitate porting legacy applications to macOS, but it serves no useful purpose.

## Declaration

```objectivec
void DisposePMIdleUPP (
   PMIdleUPP userUPP
);
```

<a id="overview"></a>

## Overview

You do not need this function in macOS. Instead, use the standard idle proc. See the [PMIdleProcPtr](pmidleprocptr.md) callback function.

## See Also

### Creating, Calling, and Deleting Universal Procedure Pointers

- [NewPMIdleUPP](1805635-newpmidleupp.md): Deprecated. Creates a new universal procedure pointer (UPP) to an idle callback.
- [InvokePMIdleUPP](1805637-invokepmidleupp.md): Deprecated. Calls an idle callback.
