> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibphypacketskippedcallback](https://developer.apple.com/documentation/iokit/iofirewirelibphypacketskippedcallback)

# IOFireWireLibPHYPacketSkippedCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Callback called when incoming packets have been dropped from the internal queue

## Declaration

```objectivec
typedef void (*IOFireWireLibPHYPacketSkippedCallback)(IOFireWireLibPHYPacketListenerRef listener, FWClientCommandID commandID, UInt32 skippedPacketCount, void *refCon);
```

## Parameters

- `listener`: The listener which dropped the packets
- `commandID`: An FWClientCommandID to be passed to ClientCommandIsComplete()
- `skippedPacketCount`: The number of skipped packets
- `refCon`: user specified reference value specified on the listener

## See Also

### Callbacks

- [IOFireWireBusResetDoneHandler](iofirewirebusresetdonehandler.md): Called when a bus reset has occured and FireWire has completed configuring the bus.
- [IOFireWireBusResetHandler](iofirewirebusresethandler.md): Called when a bus reset has occured, but before FireWire has completed configuring the bus.
- [IOFireWireLibCommandCallback](iofirewirelibcommandcallback.md): Callback called when an asynchronous command has completed executing
- [IOFireWireLibIRMAllocationLostNotificationProc](iofirewirelibirmallocationlostnotificationproc.md): Callback called when an IOFireWireLibIRMAllocationRef fails to reclaim IRM resources after a bus-reset
- [IOFireWireLibPHYPacketCallback](iofirewirelibphypacketcallback.md): Callback called to handle incoming PHY packets
- [IOFireWirePseudoAddressSpaceReadHandler](iofirewirepseudoaddressspacereadhandler.md): This callback is called to handle read requests to pseudo address spaces. This function should fill in the specified area in the pseudo address space backing store and call ClientCommandIsComplete with the specified command ID
- [IOFireWirePseudoAddressSpaceSkippedPacketHandler](iofirewirepseudoaddressspaceskippedpackethandler.md): Callback called when incoming packets have been dropped from the internal queue
- [IOFireWirePseudoAddressSpaceWriteHandler](iofirewirepseudoaddressspacewritehandler.md): Callback called to handle write requests to a pseudo address space.
- [IOFWAsyncStreamListenerHandler](iofwasyncstreamlistenerhandler.md): Callback called to handle Async Stream packets.
- [IOFWAsyncStreamListenerSkippedPacketHandler](iofwasyncstreamlistenerskippedpackethandler.md): Callback called when incoming packets have been dropped from the internal queue
