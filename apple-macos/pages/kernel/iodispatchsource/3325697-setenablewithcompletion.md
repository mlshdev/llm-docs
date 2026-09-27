> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodispatchsource/3325697-setenablewithcompletion

# SetEnableWithCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t SetEnableWithCompletion(bool enable, IODispatchSourceCancelHandler handler, OSDispatchMethod supermethod);
```
