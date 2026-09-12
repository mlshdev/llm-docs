> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/3753495-stringfromreturn](https://developer.apple.com/documentation/kernel/ioservice/3753495-stringfromreturn)

# StringFromReturn

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

## Declaration

```objectivec
kern_return_t StringFromReturn(IOReturn retval, OSString **str, OSDispatchMethod supermethod);
```
