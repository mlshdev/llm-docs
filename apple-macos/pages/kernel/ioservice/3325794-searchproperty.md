> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioservice/3325794-searchproperty

# SearchProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t SearchProperty(const char *name, const char *plane, uint64_t options, OSContainer **property, OSDispatchMethod supermethod);
```
