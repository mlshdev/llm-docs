> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewirecontroller/1457289-createmultiisochreceivelistener](https://developer.apple.com/documentation/kernel/iofirewirecontroller/1457289-createmultiisochreceivelistener)

# createMultiIsochReceiveListener

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOFireWireMultiIsochReceiveListener * createMultiIsochReceiveListener(UInt32 channel, FWMultiIsochReceiveListenerCallback callback, void *pCallbackRefCon, FWMultiIsochReceiveListenerParams *pListenerParams);
```
