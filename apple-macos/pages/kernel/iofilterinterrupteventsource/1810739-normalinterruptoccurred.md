> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/1810739-normalinterruptoccurred](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/1810739-normalinterruptoccurred)

# normalInterruptOccurred

**Interface language:** Objective-C

**Framework:** Kernel

Override $link IOInterruptEventSource::normalInterruptOccured to make a filter callout.

## Declaration

```objectivec
virtual void normalInterruptOccurred(
 void *self,
 IOService *prov,
 int ind); 
```

## See Also

### Miscellaneous

- [disableInterruptOccurred](1810540-disableinterruptoccurred.md): Override $link IOInterruptEventSource::disableInterruptOccurred to make a filter callout.
- [filterInterruptEventSource](1810599-filterinterrupteventsource.md): Factor method to create and initialise an IOFilterInterruptEventSource. See $link init.
- [getFilterAction](1810653-getfilteraction.md): Get'ter for filterAction variable.
- [init](1810702-init.md): Primary initialiser for the IOFilterInterruptEventSource class.
- [signalInterrupt](1810772-signalinterrupt.md): Cause the work loop to schedule the action.
