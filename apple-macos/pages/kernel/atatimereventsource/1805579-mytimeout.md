> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/atatimereventsource/1805579-mytimeout](https://developer.apple.com/documentation/kernel/atatimereventsource/1805579-mytimeout)

# myTimeout

**Interface language:** Objective-C

**Framework:** Kernel

my timeout function which sets the timedOut flag atomically.

## Declaration

```objectivec
static void myTimeout(
 void *self); 
```

## See Also

### Miscellaneous

- [ataTimerEventSource](1805559-atatimereventsource.md): allocate an instance of this type.
- [cancelTimeout](1805562-canceltimeout.md): overrides in order to set/clear the timed out flag
- [disable](1805564-disable.md): overrides in order to set/clear the timed out flag
- [enable](1805569-enable.md): overrides in order to set/clear the timed out flag
- [hasTimedOut](1805571-hastimedout.md): returns true if the timer has expired since the last enable/disable or setTimeout() or wakeAtTime() call.
- [init](1805575-init.md)
- [setTimeoutFunc](1805583-settimeoutfunc.md): override to install my timeout function instead of the super's.
- [wakeAtTime](1805589-wakeattime.md): overrides in order to set/clear the timed out flag
