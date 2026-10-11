> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocatalogue/4048324-terminatedriversformodule

# terminateDriversForModule

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
IOReturn terminateDriversForModule(const char *moduleName, bool unload, bool asynchronous);
```
