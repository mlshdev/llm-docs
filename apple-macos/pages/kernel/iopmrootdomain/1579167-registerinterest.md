> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmrootdomain/1579167-registerinterest](https://developer.apple.com/documentation/kernel/iopmrootdomain/1579167-registerinterest)

# registerInterest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual OSPtr<IONotifier> registerInterest(const OSSymbol *typeOfInterest, IOServiceInterestHandler handler, void *target, void *ref);
```
