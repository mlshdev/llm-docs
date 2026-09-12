> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1593371-osbacktrace](https://developer.apple.com/documentation/kernel/1593371-osbacktrace)

# OSBacktrace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
unsigned int OSBacktrace(void **bt, unsigned int maxAddrs);
```

## See Also

### Backtrace

- [backtrace](1644760-backtrace.md)
- [backtrace_user](2202280-backtrace_user.md)
- [OSReportWithBacktrace](1593374-osreportwithbacktrace.md)
- [OSPrintBacktrace](1593373-osprintbacktrace.md)
