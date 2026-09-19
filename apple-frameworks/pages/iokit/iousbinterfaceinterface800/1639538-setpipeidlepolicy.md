> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface800/1639538-setpipeidlepolicy

# SetPipeIdlePolicy

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.12+

## Declaration

```objectivec
IOReturn (*SetPipeIdlePolicy)(void *self, UInt8 pipeRef, UInt32 ioIdleTimeout);
```
