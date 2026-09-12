> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iouserclient/1400599-sendasyncresult](https://developer.apple.com/documentation/kernel/iouserclient/1400599-sendasyncresult)

# sendAsyncResult

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOReturn sendAsyncResult(OSAsyncReference reference, IOReturn result, void *args[], UInt32 numArgs);
```
