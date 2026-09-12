> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1644760-backtrace](https://developer.apple.com/documentation/kernel/1644760-backtrace)

# backtrace

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
unsigned int backtrace(uintptr_t *bt, unsigned int btlen, struct backtrace_control *ctl, backtrace_info_t *info_out);
```

## See Also

### Backtrace

- [backtrace_user](2202280-backtrace_user.md)
- [OSReportWithBacktrace](1593374-osreportwithbacktrace.md)
- [OSBacktrace](1593371-osbacktrace.md)
- [OSPrintBacktrace](1593373-osprintbacktrace.md)
