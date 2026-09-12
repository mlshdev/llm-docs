> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/3325802-asynccompletion](https://developer.apple.com/documentation/kernel/iouserclient/3325802-asynccompletion)

# AsyncCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
void AsyncCompletion(OSAction *action, IOReturn status, const unsigned long long *asyncData, uint32_t asyncDataCount, OSDispatchMethod supermethod);
```
