> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/2202280-backtrace_user](https://developer.apple.com/documentation/kernel/2202280-backtrace_user)

# backtrace_user

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.12+

## Declaration

```objectivec
unsigned int backtrace_user(uintptr_t *bt, unsigned int btlen, const struct backtrace_control *ctl, struct backtrace_user_info *info_out);
```

## See Also

### Backtrace

- [backtrace](1644760-backtrace.md)
- [OSReportWithBacktrace](1593374-osreportwithbacktrace.md)
- [OSBacktrace](1593371-osbacktrace.md)
- [OSPrintBacktrace](1593373-osprintbacktrace.md)
