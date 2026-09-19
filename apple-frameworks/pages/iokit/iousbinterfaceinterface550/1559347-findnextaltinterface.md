> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface550/1559347-findnextaltinterface

# FindNextAltInterface

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

## Declaration

```objectivec
IOUSBDescriptorHeader *(*FindNextAltInterface)(void *self, const void *current, IOUSBFindInterfaceRequest *request);
```
