> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644760-backtrace

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
