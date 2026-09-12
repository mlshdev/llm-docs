> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterface/initwithcapabilities:queue:interruptratehz:error:commandhandler:doorbellhandler:interesthandler:](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterface/initwithcapabilities:queue:interruptratehz:error:commandhandler:doorbellhandler:interesthandler:)

# initWithCapabilities:queue:interruptRateHz:error:commandHandler:doorbellHandler:interestHandler:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (instancetype) initWithCapabilities:(NSData *) capabilities queue:(dispatch_queue_t) queue interruptRateHz:(NSUInteger) interruptRateHz error:(NSError **) error commandHandler:(IOUSBHostControllerInterfaceCommandHandler) commandHandler doorbellHandler:(IOUSBHostControllerInterfaceDoorbellHandler) doorbellHandler interestHandler:(IOServiceInterestCallback) interestHandler;
```

## See Also

### Instance Methods

- [capabilitiesForPort:](capabilities%28forport_%29.md)
- [descriptionForMessage:](description%28for_%29.md)
- [destroy](destroy%28%29.md)
- [enqueueInterrupt:error:](enqueueinterrupt%28__%29.md)
- [enqueueInterrupt:expedite:error:](enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts:count:error:](enqueueinterrupts%28__count_%29.md)
- [enqueueInterrupts:count:expedite:error:](enqueueinterrupts%28__count_expedite_%29.md)
- [getPortStateMachineForCommand:error:](getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachineForPort:error:](getportstatemachine%28forport_error_%29.md)
