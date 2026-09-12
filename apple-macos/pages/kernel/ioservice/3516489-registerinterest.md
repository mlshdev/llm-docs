> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3516489-registerinterest](https://developer.apple.com/documentation/kernel/ioservice/3516489-registerinterest)

# registerInterest

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
OSPtr<IONotifier> registerInterest(const OSSymbol *typeOfInterest, IOServiceInterestHandlerBlock handler);
```
