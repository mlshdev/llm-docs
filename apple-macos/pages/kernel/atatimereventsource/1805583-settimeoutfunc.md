> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/atatimereventsource/1805583-settimeoutfunc](https://developer.apple.com/documentation/kernel/atatimereventsource/1805583-settimeoutfunc)

# setTimeoutFunc

**Interface language:** Objective-C

**Framework:** Kernel

override to install my timeout function instead of the super's.

## Declaration

```objectivec
virtual void setTimeoutFunc(); 
```

## See Also

### Miscellaneous

- [ataTimerEventSource](1805559-atatimereventsource.md): allocate an instance of this type.
- [cancelTimeout](1805562-canceltimeout.md): overrides in order to set/clear the timed out flag
- [disable](1805564-disable.md): overrides in order to set/clear the timed out flag
- [enable](1805569-enable.md): overrides in order to set/clear the timed out flag
- [hasTimedOut](1805571-hastimedout.md): returns true if the timer has expired since the last enable/disable or setTimeout() or wakeAtTime() call.
- [init](1805575-init.md)
- [myTimeout](1805579-mytimeout.md): my timeout function which sets the timedOut flag atomically.
- [wakeAtTime](1805589-wakeattime.md): overrides in order to set/clear the timed out flag
