> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3325794-searchproperty](https://developer.apple.com/documentation/kernel/ioservice/3325794-searchproperty)

# SearchProperty

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
kern_return_t SearchProperty(const char *name, const char *plane, uint64_t options, OSContainer **property, OSDispatchMethod supermethod);
```
