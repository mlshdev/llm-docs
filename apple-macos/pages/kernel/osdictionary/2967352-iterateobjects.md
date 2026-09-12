> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/2967352-iterateobjects](https://developer.apple.com/documentation/kernel/osdictionary/2967352-iterateobjects)

# iterateObjects

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

## Declaration

```objectivec
bool iterateObjects(void *refcon, bool (*callback)(void *refcon, const OSSymbol *key, OSObject *object));
```
