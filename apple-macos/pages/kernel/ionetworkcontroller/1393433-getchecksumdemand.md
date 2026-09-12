> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkcontroller/1393433-getchecksumdemand](https://developer.apple.com/documentation/kernel/ionetworkcontroller/1393433-getchecksumdemand)

# getChecksumDemand

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual void getChecksumDemand(const mbuf_t packet, UInt32 checksumFamily, UInt32 *demandMask, void *param0, void *param1);
```
