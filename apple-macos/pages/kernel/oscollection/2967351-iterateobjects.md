> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/oscollection/2967351-iterateobjects

# iterateObjects

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

## Declaration

```objectivec
bool iterateObjects(void *refcon, bool (*callback)(void *refcon, OSObject *object));
```
