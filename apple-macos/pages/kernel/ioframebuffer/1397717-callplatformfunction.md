> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioframebuffer/1397717-callplatformfunction

# callPlatformFunction

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn callPlatformFunction(const OSSymbol *functionName, bool waitForFunction, void *p1, void *p2, void *p3, void *p4);
```
