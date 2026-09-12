> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerrupteventsource/1812548-checkforwork](https://developer.apple.com/documentation/kernel/iointerrupteventsource/1812548-checkforwork)

# checkForWork

**Interface language:** Objective-C

**Framework:** Kernel

Pure Virtual member function used by IOWorkLoop for issueing a client calls.

## Declaration

```objectivec
virtual bool checkForWork(); 
```

<a id="return_value"></a>

## Return Value

Return true if this function needs to be called again before all its outstanding events have been processed.

<a id="overview"></a>

## Overview

This function called when the work-loop is ready to check for any work to do and then to call out the owner/action.

## See Also

### Miscellaneous

- [disable](1812553-disable.md): Disable event source.
- [disableInterruptOccurred](1812562-disableinterruptoccurred.md): Functions that get called by the interrupt controller.See $link IOService::registerInterrupt
- [enable](1812570-enable.md): Enable event source.
- [free](1812582-free.md): Sub-class implementation of free method, disconnects from the interrupt source.
- [getAutoDisable](1812592-getautodisable.md): Get'ter for $link autoDisable variable.
- [getIntIndex](1812606-getintindex.md): Get'ter for $link intIndex interrupt index variable.
- [getProvider](1812623-getprovider.md): Get'ter for $link provider variable.
- [init](1812641-init.md): Primary initialiser for the IOInterruptEventSource class.
- [interruptEventSource](1812661-interrupteventsource.md): Factory function for IOInterruptEventSources creation and initialisation.
- [interruptOccurred](1812679-interruptoccurred.md): Functions that get called by the interrupt controller. See $link IOService::registerInterrupt
- [normalInterruptOccurred](1812702-normalinterruptoccurred.md): Functions that get called by the interrupt controller.See $link IOService::registerInterrupt
- [setWorkLoop](1812729-setworkloop.md): Sub-class implementation of setWorkLoop method.
- [warmCPU](1812762-warmcpu.md): Tries to reduce latency for an interrupt which will be received near a specified time.
