> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1558586-dispatchtabletproximityevent](https://developer.apple.com/documentation/kernel/iohideventservice/1558586-dispatchtabletproximityevent)

# dispatchTabletProximityEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchTabletProximityEvent(AbsoluteTime timeStamp, UInt32 transducerID, bool inRange, bool invert, UInt32 vendorTransducerUniqueID, UInt32 vendorTransducerSerialNumber, IOOptionBits options);
```
