> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/2870324-copynotifiers](https://developer.apple.com/documentation/kernel/ioservice/2870324-copynotifiers)

# copyNotifiers

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

## Declaration

```objectivec
OSPtr<OSArray> copyNotifiers(const OSSymbol *type, IOOptionBits orNewState, IOOptionBits andNewState);
```
