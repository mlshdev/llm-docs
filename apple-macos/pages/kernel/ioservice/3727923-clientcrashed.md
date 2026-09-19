> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3727923-clientcrashed

# ClientCrashed

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.3+

## Declaration

```objectivec
kern_return_t ClientCrashed(IOService *client, uint64_t options, OSDispatchMethod supermethod);
```
