> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/1558586-dispatchtabletproximityevent

# dispatchTabletProximityEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
virtual void dispatchTabletProximityEvent(AbsoluteTime timeStamp, UInt32 transducerID, bool inRange, bool invert, UInt32 vendorTransducerUniqueID, UInt32 vendorTransducerSerialNumber, IOOptionBits options);
```
