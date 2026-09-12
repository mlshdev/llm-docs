> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/oscollection/2967351-iterateobjects](https://developer.apple.com/documentation/kernel/oscollection/2967351-iterateobjects)

# iterateObjects

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

## Declaration

```objectivec
bool iterateObjects(void *refcon, bool (*callback)(void *refcon, OSObject *object));
```
