> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/ionvmesmartinterface/3521169-getlogpage

# GetLogPage

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.15.4+

## Declaration

```objectivec
IOReturn (*GetLogPage)(void *interface, void *data, uint32_t inLogPageId, uint32_t inNumDWords);
```
