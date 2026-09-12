> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iointerrupteventsource/1812606-getintindex](https://developer.apple.com/documentation/kernel/iointerrupteventsource/1812606-getintindex)

# getIntIndex

**Interface language:** Objective-C

**Framework:** Kernel

Get'ter for $link intIndex interrupt index variable.

## Declaration

```objectivec
virtual int getIntIndex() const; 
```

<a id="return_value"></a>

## Return Value

value of intIndex.

## See Also

### Miscellaneous

- [checkForWork](1812548-checkforwork.md): Pure Virtual member function used by IOWorkLoop for issueing a client calls.
- [disable](1812553-disable.md): Disable event source.
- [disableInterruptOccurred](1812562-disableinterruptoccurred.md): Functions that get called by the interrupt controller.See $link IOService::registerInterrupt
- [enable](1812570-enable.md): Enable event source.
- [free](1812582-free.md): Sub-class implementation of free method, disconnects from the interrupt source.
- [getAutoDisable](1812592-getautodisable.md): Get'ter for $link autoDisable variable.
- [getProvider](1812623-getprovider.md): Get'ter for $link provider variable.
- [init](1812641-init.md): Primary initialiser for the IOInterruptEventSource class.
- [interruptEventSource](1812661-interrupteventsource.md): Factory function for IOInterruptEventSources creation and initialisation.
- [interruptOccurred](1812679-interruptoccurred.md): Functions that get called by the interrupt controller. See $link IOService::registerInterrupt
- [normalInterruptOccurred](1812702-normalinterruptoccurred.md): Functions that get called by the interrupt controller.See $link IOService::registerInterrupt
- [setWorkLoop](1812729-setworkloop.md): Sub-class implementation of setWorkLoop method.
- [warmCPU](1812762-warmcpu.md): Tries to reduce latency for an interrupt which will be received near a specified time.
