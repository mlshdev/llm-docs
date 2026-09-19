> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocatalogue/4048323-terminatedriversformodule

# terminateDriversForModule

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

## Declaration

```objectivec
IOReturn terminateDriversForModule(OSString *moduleName, bool unload, bool asynchronous);
```
