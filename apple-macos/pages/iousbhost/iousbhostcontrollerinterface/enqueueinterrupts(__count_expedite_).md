> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterface/enqueueinterrupts(_:count:expedite:)](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterface/enqueueinterrupts(_:count:expedite:))

# enqueueInterrupts(\_:count:expedite:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func enqueueInterrupts(_ interrupts: UnsafePointer<IOUSBHostCIMessage>, count: Int, expedite: Bool) throws
```

## See Also

### Instance Methods

- [capabilities(forPort:)](capabilities%28forport_%29.md)
- [description(for:)](description%28for_%29.md)
- [destroy()](destroy%28%29.md)
- [enqueueInterrupt(\_:)](enqueueinterrupt%28__%29.md)
- [enqueueInterrupt(\_:expedite:)](enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts(\_:count:)](enqueueinterrupts%28__count_%29.md)
- [getPortStateMachine(forCommand:error:)](getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachine(forPort:error:)](getportstatemachine%28forport_error_%29.md)

# enqueueInterrupts:count:expedite:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) enqueueInterrupts:(const IOUSBHostCIMessage *) interrupts count:(NSUInteger) count expedite:(BOOL) expedite error:(NSError **) error;
```

## See Also

### Instance Methods

- [capabilitiesForPort:](capabilities%28forport_%29.md)
- [descriptionForMessage:](description%28for_%29.md)
- [destroy](destroy%28%29.md)
- [enqueueInterrupt:error:](enqueueinterrupt%28__%29.md)
- [enqueueInterrupt:expedite:error:](enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts:count:error:](enqueueinterrupts%28__count_%29.md)
- [getPortStateMachineForCommand:error:](getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachineForPort:error:](getportstatemachine%28forport_error_%29.md)
- [initWithCapabilities:queue:interruptRateHz:error:commandHandler:doorbellHandler:interestHandler:](initwithcapabilities_queue_interruptratehz_error_commandhandler_doorbellhandler_interesthandler_.md)
