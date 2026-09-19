> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopcidevice/3516649-callplatformfunction

# callPlatformFunction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+ (deprecated in 11.0)

## Declaration

```objectivec
virtual IOReturn callPlatformFunction(const char *functionName, bool waitForFunction, void *p1, void *p2, void *p3, void *p4);
```
