> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1400667-sendasyncresult64withoptions](https://developer.apple.com/documentation/kernel/iouserclient/1400667-sendasyncresult64withoptions)

# sendAsyncResult64WithOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn sendAsyncResult64WithOptions(OSAsyncReference64 reference, IOReturn result, io_user_reference_t args[], UInt32 numArgs, IOOptionBits options);
```
