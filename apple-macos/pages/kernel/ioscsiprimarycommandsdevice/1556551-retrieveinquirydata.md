> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioscsiprimarycommandsdevice/1556551-retrieveinquirydata](https://developer.apple.com/documentation/kernel/ioscsiprimarycommandsdevice/1556551-retrieveinquirydata)

# RetrieveINQUIRYData

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
bool RetrieveINQUIRYData(UInt8 EVPD, UInt8 inquiryPage, UInt8 *inquiryBuffer, UInt16 *dataSize);
```
