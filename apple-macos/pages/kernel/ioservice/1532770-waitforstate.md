> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioservice/1532770-waitforstate](https://developer.apple.com/documentation/kernel/ioservice/1532770-waitforstate)

# waitForState

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn waitForState(UInt32 mask, UInt32 value, mach_timespec_t *timeout);
```
