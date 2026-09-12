> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhoststream/1498636-initwithownersandstreamid](https://developer.apple.com/documentation/kernel/iousbhoststream/1498636-initwithownersandstreamid)

# initWithOwnersAndStreamID

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
virtual bool initWithOwnersAndStreamID(AppleUSBHostController *controller, IOUSBHostDevice *device, IOUSBHostPipe *pipe, uint32_t streamID);
```
