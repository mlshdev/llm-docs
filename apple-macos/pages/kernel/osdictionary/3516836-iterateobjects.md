> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/osdictionary/3516836-iterateobjects](https://developer.apple.com/documentation/kernel/osdictionary/3516836-iterateobjects)

# iterateObjects

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
bool iterateObjects(bool (^block)(const OSSymbol *key, OSObject *object));
```
