> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iouserclient/3325802-asynccompletion

# AsyncCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
void AsyncCompletion(OSAction *action, IOReturn status, const unsigned long long *asyncData, uint32_t asyncDataCount, OSDispatchMethod supermethod);
```
