> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iogatedoutputqueue/1485502-gatedoutput

# gatedOutput

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void gatedOutput(OSObject *owner, IOGatedOutputQueue *self, IOMbufQueue *queue, UInt32 *state);
```
