> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocatalogue/3753421-finddrivers](https://developer.apple.com/documentation/kernel/iocatalogue/3753421-finddrivers)

# findDrivers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
OSPtr<OSOrderedSet> findDrivers(IOService *service, SInt32 *generationCount);
```
