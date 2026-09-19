> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3753461-configurereport

# ConfigureReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
IOReturn ConfigureReport(OSData *channels, uint32_t action, uint32_t *outCount, OSDispatchMethod supermethod);
```
