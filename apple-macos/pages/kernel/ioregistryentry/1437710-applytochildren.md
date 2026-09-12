> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioregistryentry/1437710-applytochildren](https://developer.apple.com/documentation/kernel/ioregistryentry/1437710-applytochildren)

# applyToChildren

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void applyToChildren(IORegistryEntryApplierFunction applier, void *context, const IORegistryPlane *plane);
```
