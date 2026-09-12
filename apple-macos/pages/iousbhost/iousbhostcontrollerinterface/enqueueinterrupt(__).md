> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterface/enqueueinterrupt(_:)](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterface/enqueueinterrupt(_:))

# enqueueInterrupt(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func enqueueInterrupt(_ interrupt: UnsafePointer<IOUSBHostCIMessage>) throws
```

## See Also

### Instance Methods

- [capabilities(forPort:)](capabilities%28forport_%29.md)
- [description(for:)](description%28for_%29.md)
- [destroy()](destroy%28%29.md)
- [enqueueInterrupt(\_:expedite:)](enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts(\_:count:)](enqueueinterrupts%28__count_%29.md)
- [enqueueInterrupts(\_:count:expedite:)](enqueueinterrupts%28__count_expedite_%29.md)
- [getPortStateMachine(forCommand:error:)](getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachine(forPort:error:)](getportstatemachine%28forport_error_%29.md)

# enqueueInterrupt:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) enqueueInterrupt:(const IOUSBHostCIMessage *) interrupt error:(NSError **) error;
```

## See Also

### Instance Methods

- [capabilitiesForPort:](capabilities%28forport_%29.md)
- [descriptionForMessage:](description%28for_%29.md)
- [destroy](destroy%28%29.md)
- [enqueueInterrupt:expedite:error:](enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts:count:error:](enqueueinterrupts%28__count_%29.md)
- [enqueueInterrupts:count:expedite:error:](enqueueinterrupts%28__count_expedite_%29.md)
- [getPortStateMachineForCommand:error:](getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachineForPort:error:](getportstatemachine%28forport_error_%29.md)
- [initWithCapabilities:queue:interruptRateHz:error:commandHandler:doorbellHandler:interestHandler:](initwithcapabilities_queue_interruptratehz_error_commandhandler_doorbellhandler_interesthandler_.md)
