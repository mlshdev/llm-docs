> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterinterrupteventsource/1810653-getfilteraction](https://developer.apple.com/documentation/kernel/iofilterinterrupteventsource/1810653-getfilteraction)

# getFilterAction

**Interface language:** Objective-C

**Framework:** Kernel

Get'ter for filterAction variable.

## Declaration

```objectivec
virtual Filter getFilterAction() const; 
```

<a id="return_value"></a>

## Return Value

value of filterAction.

## See Also

### Miscellaneous

- [disableInterruptOccurred](1810540-disableinterruptoccurred.md): Override $link IOInterruptEventSource::disableInterruptOccurred to make a filter callout.
- [filterInterruptEventSource](1810599-filterinterrupteventsource.md): Factor method to create and initialise an IOFilterInterruptEventSource. See $link init.
- [init](1810702-init.md): Primary initialiser for the IOFilterInterruptEventSource class.
- [normalInterruptOccurred](1810739-normalinterruptoccurred.md): Override $link IOInterruptEventSource::normalInterruptOccured to make a filter callout.
- [signalInterrupt](1810772-signalinterrupt.md): Cause the work loop to schedule the action.
